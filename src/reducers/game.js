import {
  UPDATE_GAME_CODE,
  UPDATE_PLAYER_TYPE,
  UPDATE_GAME_STATE,
  UPDATE_GAME_WINNER,
  UPDATE_GAME_SELECTED_CARD
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
  state: GAME_STATES.PICKING_CARDS,//GAME_STATES.STARTING,
  winner: '',
  selectedCard: null,
  // TODO: Get cards from server
  cards: [{
    id: 1,
    text: 'A Gypsy curse.'
  },{
    id: 2,
    text: 'A moment of silence.'
  },{
    id: 3,
    text: 'A sausage festival.'
  },{
    id: 4,
    text: 'An honest cop.'
  },{
    id: 5,
    text: 'Famine.'
  },{
    id: 6,
    text: 'Flesh-eating bacteria.'
  },{
    id: 7,
    text: 'Flying sex snakes.'
  },{
    id: 8,
    text: 'Sexting'
  },{
    id: 9,
    text: 'Not giving a shit about the Third World.'
  },{
    id: 10,
    text: 'Shapeshifters.'
  }]
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
    case UPDATE_GAME_SELECTED_CARD:
      return {
        ...state,
        selectedCard: action.selectedCard
      };
    default:
      return state;
  }
};

export default game;