import {
  UPDATE_GAMECODE,
  UPDATE_PLAYER_TYPE
} from '../actions/game.js';

const PLAYER_TYPES = {
  HOST: 'HOST',
  CLIENT: 'CLIENT'
};

const INITIAL_STATE = {
  gameCode: '',
  playerType: PLAYER_TYPES.CLIENT
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_GAMECODE:
      return {
        ...state,
        gameCode: action.gameCode
      };
    case UPDATE_PLAYER_TYPE:
      return {
        ...state,
        playerType: action.playerType
      };
    default:
      return state;
  }
};

export default game;