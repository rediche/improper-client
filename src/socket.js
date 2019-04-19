// Load redux store
import { store } from "./store.js";

// These are the actions needed by this element.
import { navigateToGame } from "./actions/app.js";

// TODO: Add socket host to config file
export const socket = io('http://127.0.0.1:3000');

socket.on('game-joined', ({ code }) => {
  store.dispatch(navigateToGame(code));
});

socket.on('game-started', (data) => {
  // TODO: Change game state.
});