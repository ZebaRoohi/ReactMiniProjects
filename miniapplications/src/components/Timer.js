import React, { useReducer, useEffect } from "react";

const init = (initialState) => {
  return {
    seconds: 0,
    isActive: false,
  };
};
const timerReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isActive: true };
    case "STOP":
      return { ...state, isActive: false };
    case "RESET":
      return { ...state, seconds: 0, isActive: false };
    case "SEC":
      return { ...state, seconds: state.seconds + 1 };
    default:
      return state;
  }
};

const Timer = ({ initialState }) => {
  const [state, dispatch] = useReducer(timerReducer, initialState, init);

  useEffect(() => {
    let interval;

    if (state.isActive) {
      interval = setInterval(() => {
        dispatch({ type: "SEC" });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [state.isActive]);

  const handleStart = () => {
    dispatch({ type: "START" });
  };

  const handleStop = () => {
    dispatch({ type: "STOP" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="container">
      <h1 className="timer">Timer: {state.seconds}s</h1>
      <button
        className="timer-btn"
        onClick={handleStart}
        disabled={state.isActive}
      >
        Start
      </button>
      <button
        className="timer-btn"
        onClick={handleStop}
        disabled={!state.isActive}
      >
        Stop
      </button>
      <button className="timer-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
