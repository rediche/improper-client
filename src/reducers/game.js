import {
  UPDATE_GAMECODE,
  UPDATE_PLAYER_TYPE,
  UPDATE_GAME_STATE
} from '../actions/game.js';

const PLAYER_TYPES = {
  HOST: 'HOST',
  CLIENT: 'CLIENT'
};

// REPORT: Talk about different states of the game.
const GAME_STATES = {
  STARTING: 'STARTING',
  PICKING_CARDS: 'PICKING_CARDS',
  CHOOSE_WINNER: 'CHOOSE_WINNER',
  GAME_OVER: 'GAME_OVER'
}

const INITIAL_STATE = {
  gameCode: '',
  playerType: PLAYER_TYPES.CLIENT,
  gameState: GAME_STATES.STARTING
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
    case UPDATE_GAME_STATE:
      return {
        ...state,
        gameState: action.gameState
      };
    default:
      return state;
  }
};

export default game;