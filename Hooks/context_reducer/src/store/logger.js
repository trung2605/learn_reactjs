

function logger(reducer) {
  return (state, action) => {
    console.group(action.type);
    console.log('state:', state);
    console.log('action:', action);

    const nextState = reducer(state, action);
    console.log('next state:', nextState);

    console.groupEnd();
    return nextState;
  };
}

export default logger;
