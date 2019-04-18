import { navigate } from './app.js';

export const UPDATE_GAMECODE = 'UPDATE_GAMECODE';
export const UPDATE_PLAYER_TYPE = 'UPDATE_PLAYER_TYPE';

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