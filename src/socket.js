// Load redux store
import { store } from "./store.js";

// These are the actions needed by this element.
import { navigateToGame } from "./actions/app.js";

import { updateGameState, updateGameCards } from "./actions/game.js";
import { GAME_STATES } from "./reducers/game.js";

// TODO: Add socket host to config file
export const socket = io("http://127.0.0.1:3000");

socket.on("game-joined", ({ code }) => {
  store.dispatch(navigateToGame(code));
});

socket.on("game-started", () => {
  store.dispatch(updateGameState(GAME_STATES.PICKING_CARDS));
});

socket.on("new-round", ({ cards, blackCard }) => {
  store.dispatch(updateGameCards(cards));
});
