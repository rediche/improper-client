import {
  UPDATE_GAMECODE,
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
  gameCode: '',
  playerType: PLAYER_TYPES.PLAYER,
  gameState: GAME_STATES.STARTING,
  winner: ''
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