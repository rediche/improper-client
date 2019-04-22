import { navigate } from './app.js';

export const UPDATE_GAME_CODE = 'UPDATE_GAME_CODE';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const UPDATE_GAME_WINNER = 'UPDATE_GAME_WINNER';
export const UPDATE_GAME_SELECTED_CARD = 'UPDATE_GAME_SELECTED_CARD';
export const UPDATE_PLAYER_TYPE = 'UPDATE_PLAYER_TYPE';
export const UPDATE_GAME_CARDS = 'UPDATE_GAME_CARDS';
export const UPDATE_GAME_CZAR = 'UPDATE_GAME_CZAR';
export const UPDATE_GAME_PLAYED_CARDS = 'UPDATE_GAME_PLAYED_CARDS';
export const UPDATE_GAME_BLACK_CARD = 'UPDATE_GAME_BLACK_CARD';
export const RESET_ROUND_STATE = 'RESET_ROUND_STATE';

export const updateGameCode = (code) => {
  return {
    type: UPDATE_GAME_CODE,
    code
  };
};

export const updateGameCards = (cards) => {
  return {
    type: UPDATE_GAME_CARDS,
    cards
  };
};

export const updateGameState = (state) => {
  return {
    type: UPDATE_GAME_STATE,
    state
  };
};

export const updatePlayerType = (playerType) => {
  return {
    type: UPDATE_PLAYER_TYPE,
    playerType
  };
};

export const updateGameSelectedCard = (selectedCard) => {
  return {
    type: UPDATE_GAME_SELECTED_CARD,
    selectedCard
  };
};

export const updateGameCzar = (czar) => {
  return {
    type: UPDATE_GAME_CZAR,
    czar
  };
};

export const updateGamePlayedCards = (playedCards) => {
  return {
    type: UPDATE_GAME_PLAYED_CARDS,
    playedCards
  };
};

export const updateGameBlackCard = (blackCard) => {
  return {
    type: UPDATE_GAME_BLACK_CARD,
    blackCard
  };
};

export const resetRoundState = () => {
  return {
    type: RESET_ROUND_STATE
  };
};

export const updateGameWinner = (winner) => {
  return {
    type: UPDATE_GAME_WINNER,
    winner
  };
};