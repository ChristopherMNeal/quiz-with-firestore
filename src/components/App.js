import React from "react";
import Header from "./Header";
import QuizList from "./QuizList";
import Signin from "./Signin";
import NewQuizForm from "./NewQuizForm";
import QuizDetails from "./QuizDetails";
import { withFirestore, isLoaded } from "react-redux-firebase";
import EditQuizForm from "./EditQuizForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuizInDetail: null,
      currentPage: 0,

      //0 QuizList
      //1 QuizDetail
      //2 newQuizForm
      //3 Signin
      //4 EditForm
    };
  }

  handleDeletingQuiz = (id) => {
    this.props.firestore.delete({ collection: "quizzes", doc: id });
    this.setState({ currentQuizInDetail: null, currentPage: 1 });
  };

  handleEditQuiz = () => {
    this.setState({
      currentPage: 4,
    });
  };

  handleQuizClick = (id) => {
    this.setState({
      currentQuizInDetail: id,
      currentPage: 1,
    });
  };

  handleCreateClick = () => {
    this.setState({
      currentPage: 2,
    });
  };

  handleSignIn = () => {
    this.setState({
      currentPage: 3,
    });
  };

  handleBackHome = () => {
    this.setState({
      currentPage: 0,
    });
  };

  render() {
    const auth = this.props.firebase.auth();
    let pageShowing = null;
    const handleReturnHome = this.handleBackHome;
    const handleSigninOnPage = this.handleSignIn;
    const handleClick = this.handleCreateClick;

    if (this.state.currentPage === 0) {
      pageShowing = <QuizList onQuizClick={this.handleQuizClick} />;
    } else if (this.state.currentPage === 2) {
      pageShowing = <NewQuizForm onQuizCreate={this.handleBackHome} />;
    } else if (this.state.currentPage === 3) {
      pageShowing = <Signin />;
    } else if (this.state.currentPage === 4) {
      pageShowing = (
        <EditQuizForm
          id={this.state.currentQuizInDetail}
          onQuizCreate={this.handleBackHome}
        />
      );
    } else if (this.state.currentQuizInDetail !== null) {
      pageShowing = (
        <QuizDetails
          handleDelete={this.handleDeletingQuiz}
          id={this.state.currentQuizInDetail}
          handleEdit={this.handleEditQuiz}
        />
      );
    } else {
      pageShowing = <h1>Loading...</h1>;
    }
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <Header
            handleHome={handleReturnHome}
            handleSign={handleSigninOnPage}
          />
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <Header
            handleHome={handleReturnHome}
            handleSign={handleSigninOnPage}
          />
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      return (
        <React.Fragment>
          <Header
            handleHome={handleReturnHome}
            handleSign={handleSigninOnPage}
          />
          {pageShowing}
          <button onClick={handleClick}>Create a Quiz</button>
        </React.Fragment>
      );
    }
  }
}

export default withFirestore(App);
