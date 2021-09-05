import React, { useState } from "react";


export default function useVisualMode(initial) {

  const [history, setHistory] = useState ([initial]);

  const transition = function (newMode) {
    setHistory([...history, newMode]);
  }

  const back = () => {
    if (history.length < 2) return;

    const currentHistory = [...history];
    currentHistory.pop();

    setHistory(currentHistory);
  }

  let mode = history[history.length - 1];
  mode = history.slice(-1)[0];

  return { mode, transition, back };
};