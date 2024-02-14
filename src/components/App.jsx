import "./App.css";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

import { useState } from "react";

const App = () => {
  const [opinion, setOpinion] = useState(() => {
    const savedOptions = window.localStorage.getItem("saved-options");

    if(savedOptions !== null) {
        return JSON.parse(savedOptions);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  window.localStorage.setItem("saved-options", JSON.stringify(opinion));

  const totalFeedback = opinion.good + opinion.neutral + opinion.bad;
  const updateFeedback = (feedbackType) => {
    setOpinion({
      ...opinion,
      ...opinion,
      [feedbackType]: opinion[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setOpinion({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={opinion.good}
          neutral={opinion.neutral}
          bad={opinion.bad}
          total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
