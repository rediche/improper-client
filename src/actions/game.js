import { navigate } from './app.js';

export const UPDATE_GAMECODE = 'UPDATE_GAMECODE';

export const updateGameCode = (gameCode) => {
  return {
    type: UPDATE_GAMECODE,
    gameCode
  };
};