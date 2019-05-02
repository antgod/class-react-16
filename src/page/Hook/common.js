import { useState, useEffect } from "react";

function reducerCreator(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

export {
	reducerCreator,
}