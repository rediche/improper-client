import {
  UPDATE_GAME_CODE,
  UPDATE_PLAYER_TYPE,
  UPDATE_GAME_STATE,
  UPDATE_GAME_WINNER
} from '../actions/game.js';

export const PLAYER_TYPES = {
  HOST: 'HOST',
  PLAYER: 'PLAYER'
};

// REPORT: Talk about different states of the game.
export const GAME_STATES = {
  STARTING: 'STARTING',
  PICKING_CARDS: 'PICKING_CARDS', // This is the core game loop.
  CHOOSE_WINNER: 'CHOOSE_WINNER', // This is the core game loop.
  GAME_OVER: 'GAME_OVER'
}

const INITIAL_STATE = {
  code: '',
  playerType: PLAYER_TYPES.PLAYER,
  state: GAME_STATES.STARTING,
  winner: ''
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_GAME_CODE:
      return {
        ...state,
        code: action.code
      };
    case UPDATE_PLAYER_TYPE:
      return {
        ...state,
        playerType: action.playerType
      };
    case UPDATE_GAME_STATE:
      return {
        ...state,
        state: action.state
      };
    case UPDATE_GAME_WINNER:
      return {
        ...state,
        winner: action.winner
      };
    default:
      return state;
  }
};

export default game;