import QuizList from "./QuizList";
import QuizDetails from "./QuizDetails";
import NewQuizForm from "./NewQuizForm";
import { withFirestore, isLoaded } from "react-redux-firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

function QuizControl(props) {
  const auth = props.firebase.auth();

  const [currentQuizInDetail, setCurrentQuizInDetail] = useState(null);

  const handleQuizClick = (id) => {
    setCurrentQuizInDetail(id);
  };

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
      <Router>
        <Switch>
          <Route path="/">
            <QuizList onQuizClick={handleQuizClick} />
          </Route>
          <Route path="/quizDetails">
            {currentQuizInDetail ? (
              <h1>Loading...</h1>
            ) : (
              <QuizDetails detailedQuiz={currentQuizInDetail} />
            )}
          </Route>
          <Route path="/newQuizForm">
            <NewQuizForm />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default withFirestore(QuizControl);

{
  /* <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <QuizControl />
        </Route>
      </Switch>
    </Router> */
}
