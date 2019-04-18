import { navigate } from './app.js';

export const UPDATE_GAME_CODE = 'UPDATE_GAME_CODE';
export const UPDATE_PLAYER_TYPE = 'UPDATE_PLAYER_TYPE';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const UPDATE_GAME_WINNER = 'UPDATE_GAME_WINNER';

export const updateGameCode = (code) => {
  return {
    type: UPDATE_GAME_CODE,
    code
  };
};

const updatePlayerType = (playerType) => {
  return {
    type: UPDATE_PLAYER_TYPE,
    playerType
  };
};