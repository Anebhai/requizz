import { useEffect } from "react";

function Timer({ remainingSeconds, dispatch }) {
  const min = Math.floor(remainingSeconds / 60);
  const sec = remainingSeconds % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
