import React from "react";
import QuizList from "./QuizList";
import QuizDetails from "./QuizDetails";
import UserControl from "./UserControl";
import NewQuizForm from "./NewQuizForm";
import { withFirestore, isLoaded } from "react-redux-firebase";

function QuizControl(props) {
  const auth = props.firebase.auth();

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
        <QuizList />
        <QuizDetails />
        <UserControl />
        <NewQuizForm />
      </React.Fragment>
    );
  }
}

export default withFirestore(QuizControl);
