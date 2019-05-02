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
  updateGameBlackCard,
  updateGameWinner,
  resetRoundState,
  updateGameRoundWinner,
  updateGamePlayerCount
} from "./actions/game.js";

import {
  addErrorMessage
} from "./actions/app.js";

import { GAME_STATES, PLAYER_TYPES } from "./reducers/game.js";

// TODO: Add socket host to config file, remember port on localhost
export const socket = io('127.0.0.1:3000'/* "https://improper-server.herokuapp.com" */);

socket.on('game-created', ({ code }) => {
  store.dispatch(updatePlayerType(PLAYER_TYPES.HOST));
  store.dispatch(navigateToGame(code));
});

socket.on("game-joined", ({ code }) => {
  store.dispatch(navigateToGame(code));
});

socket.on("player-connected", ({ playerCount }) => {
  store.dispatch(updateGamePlayerCount(playerCount));
});

socket.on("game-started", () => {
  store.dispatch(updateGameState(GAME_STATES.PICKING_CARDS));
});

socket.on("new-round-host", ({ blackCard }) => {
  store.dispatch(resetRoundState());
  store.dispatch(updateGameBlackCard(blackCard));
});

socket.on("new-round", ({ cards, czar }) => {
  store.dispatch(resetRoundState());
  store.dispatch(updateGameCzar(czar));
  store.dispatch(updateGameCards(cards));
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

socket.on("winner-found", ({ card }) => {
  console.log("Winner found", card);
  store.dispatch(updateGameRoundWinner(card));
});

socket.on("game-ended", ({ winner, wins }) => {
  store.dispatch(updateGameState(GAME_STATES.GAME_OVER));
  store.dispatch(updateGameWinner({ id: winner, wins }));
});

socket.on("error-message", ({ errorMessage }) => {
  store.dispatch(addErrorMessage(errorMessage));
});