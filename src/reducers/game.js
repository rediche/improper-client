import {
  UPDATE_GAMECODE
} from '../actions/game.js';

const INITIAL_STATE = {
  gameCode: ''
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_GAMECODE:
      return {
        ...state,
        gameCode: action.gameCode
      };
    default:
      return state;
  }
};

export default game;