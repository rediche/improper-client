// Load redux store
import { store } from "./store.js";

// These are the actions needed by this element.
import { navigateToGame, navigate } from "./actions/app.js";

import {
  updateGameState,
  updateGameCards,
  updateGameSelectedCard,
  updateGameCzar,
  updateGamePlayedCards,
  updatePlayerType,
  updateGameBlackCard
} from "./actions/game.js";
import { GAME_STATES, PLAYER_TYPES } from "./reducers/game.js";

// TODO: Add socket host to config file
export const socket = io("http://127.0.0.1:3000");

socket.on('game-created', ({ code }) => {
  store.dispatch(updatePlayerType(PLAYER_TYPES.HOST));
  store.dispatch(navigateToGame(code));
});

socket.on("game-joined", ({ code }) => {
  store.dispatch(navigateToGame(code));
});

socket.on("game-started", () => {
  store.dispatch(updateGameState(GAME_STATES.PICKING_CARDS));
});

socket.on("new-round-host", ({ blackCard }) => {
  store.dispatch(updateGameState(GAME_STATES.PICKING_CARDS));
  store.dispatch(updateGameBlackCard(blackCard));
  store.dispatch(updateGamePlayedCards([]));
});

socket.on("new-round", ({ cards, czar }) => {
  store.dispatch(updateGameState(GAME_STATES.PICKING_CARDS));
  store.dispatch(updateGameCzar(czar));
  store.dispatch(updateGameCards(cards));
  store.dispatch(updateGamePlayedCards([]));
  store.dispatch(updateGameSelectedCard(null));
});

socket.on("card-played-host", ({ playedCards }) => {
  store.dispatch(updateGamePlayedCards(playedCards));
});

socket.on("card-played", ({ id }) => {
  store.dispatch(updateGameSelectedCard(id));
});

socket.on("find-winner", ({ playedCards }) => {
  store.dispatch(updateGamePlayedCards(playedCards));
  store.dispatch(updateGameState(GAME_STATES.CHOOSE_WINNER));
});

socket.on("winner-found", () => {
  console.log("Winner found!");
});