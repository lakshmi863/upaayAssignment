// This function loads the state from local storage.
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasksState');
    if (serializedState === null) {
      return undefined; // Let the reducers initialize the state.
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from local storage", err);
    return undefined;
  }
};

// This function saves the state to local storage.
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasksState', serializedState);
  } catch (err) {
    console.error("Could not save state to local storage", err);
  }
};