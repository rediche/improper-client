import {
  UPDATE_GAME_CODE,
  UPDATE_PLAYER_TYPE,
  UPDATE_GAME_STATE,
  UPDATE_GAME_WINNER,
  UPDATE_GAME_SELECTED_CARD,
  UPDATE_GAME_CARDS,
  UPDATE_GAME_CZAR,
  UPDATE_GAME_PLAYED_CARDS,
  UPDATE_GAME_BLACK_CARD
} from '../actions/game.js';

// REPORT: Talk about using objects with strings to make sure everything is typed correctly.
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
  czar: null,
  winner: '',
  selectedCard: null,
  blackCard: null,
  cards: [],
  playedCards: []
};

// REPORT: Debugging with redux
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
    case UPDATE_GAME_SELECTED_CARD:
      return {
        ...state,
        selectedCard: action.selectedCard
      };
    case UPDATE_GAME_CARDS:
      return {
        ...state,
        cards: action.cards
      };
    case UPDATE_GAME_CZAR:
      return {
        ...state,
        czar: action.czar
      };
    case UPDATE_GAME_PLAYED_CARDS:
      return {
        ...state,
        playedCards: action.playedCards
      };
    case UPDATE_GAME_BLACK_CARD:
      return {
        ...state,
        blackCard: action.blackCard
      };
    default:
      return state;
  }
};

export default game;