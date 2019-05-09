import {
  UPDATE_PAGE,
  UPDATE_ERROR_MESSAGES,
  UPDATE_NICKNAME
} from '../actions/app.js';

const INITIAL_STATE = {
  page: '',
  errorMessages: [],
  nickname: ''
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case UPDATE_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: action.errorMessages
      };
    case UPDATE_NICKNAME:
      return {
        ...state,
        nickname: action.nickname
      };
    default:
      return state;
  }
};

export default app;
