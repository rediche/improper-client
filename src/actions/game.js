import { navigate } from './app.js';

export const UPDATE_GAMECODE = 'UPDATE_GAMECODE';
export const UPDATE_PLAYER_TYPE = 'UPDATE_PLAYER_TYPE';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const UPDATE_GAME_WINNER = 'UPDATE_GAME_WINNER';

export const updateGameCode = (gameCode) => {
  return {
    type: UPDATE_GAMECODE,
    gameCode
  };
};

const updatePlayerType = (playerType) => {
  return {
    type: UPDATE_PLAYER_TYPE,
    playerType
  };
};