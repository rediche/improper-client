import { navigate } from './app.js';

export const UPDATE_GAME_CODE = 'UPDATE_GAME_CODE';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const UPDATE_GAME_WINNER = 'UPDATE_GAME_WINNER';
export const UPDATE_GAME_SELECTED_CARD = 'UPDATE_GAME_SELECTED_CARD';
export const UPDATE_PLAYER_TYPE = 'UPDATE_PLAYER_TYPE';
export const UPDATE_GAME_CARDS = 'UPDATE_GAME_CARDS';
export const UPDATE_GAME_CZAR = 'UPDATE_GAME_CZAR';

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

const updatePlayerType = (playerType) => {
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