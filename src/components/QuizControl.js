import QuizList from "./QuizList";
import QuizDetails from "./QuizDetails";
import NewQuizForm from "./NewQuizForm";
import { withFirestore, isLoaded } from "react-redux-firebase";
import React from "react";

class QuizControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuizInDetail: null,
      currentPage: 0,
      //0 QuizList
      //1 QuizDetail
      //2 newQuizForm
    };
  }

  handleQuizClick = (id) => {
    this.setState({
      currentQuizInDetail: id,
      currentPage: 1,
    });
  };

  handleCreateClick = () => {
    this.setState({
      currentPage: 2
    })
  }

  handleQuizCreate = () => {
    this.setState({
      currentPage: 0
    })
  }

  render() {
    const auth = this.props.firebase.auth();
    let pageShowing = null;
    if (this.state.currentPage === 0) {
      pageShowing = <QuizList onQuizClick={this.handleQuizClick} />;
    } else if (this.state.currentPage === 2) {
      pageShowing = <NewQuizForm onQuizCreate={this.handleQuizCreate}/>;
    } else if (this.state.currentQuizInDetail !== null) {
      pageShowing = <QuizDetails id={this.state.currentQuizInDetail} />;
    } else {
      pageShowing = <h1>Loading...</h1>;
    }
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      return (
      <React.Fragment>
        {pageShowing}
        <button onClick={this.handleCreateClick}>Create a Quiz</button>
      </React.Fragment>
      );
    }
  }
}

export default withFirestore(QuizControl);
