import { configureStore } from '@reduxjs/toolkit';
// We must import the initialState from the slice to guarantee the store's shape.
import projectsReducer, { initialState as projectsInitialState } from './projectsSlice';
import { loadState, saveState } from '../utils/localStorage';

const loadedState = loadState();

// THE DEFINITIVE FIX:
// Create a complete and safe preloaded state.
// We spread the default state from the slice FIRST, then spread the user's saved data on top.
// This ensures that any missing keys (like `filters`) are added from the default state,
// while still preserving the user's saved projects and tasks.
const preloadedState = loadedState && loadedState.projects ? {
  projects: {
    ...projectsInitialState,
    ...loadedState.projects
  }
} : undefined;


export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  preloadedState, // Pass the safe, merged preloaded state to the store.
});

store.subscribe(() => {
  // The state being saved will now always be complete.
  saveState({
    projects: store.getState().projects,
  });
});