function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji = "";
  if (percentage === 100) emoji = "🥇😎😎";
  if (percentage >= 80 && percentage < 100) emoji = "🎉🙌";
  if (percentage >= 50 && percentage < 80) emoji = "😊";

  if (percentage >= 0 && percentage < 50) emoji = "😟😔";
  if (percentage === 0) emoji = "😫🤡";
  return (
    <>
      <p className="result">
        {emoji}You scored {points} points out of {maxPossiblePoints} points-
        {"  "}
        {Math.ceil(percentage)}%
      </p>
      <p className="highscore">Highscore: {highscore} Points </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
