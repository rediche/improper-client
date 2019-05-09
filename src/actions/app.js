import { updateGameCode } from "./game.js";
import { attemptReconnectToGame } from "../socket";
import { saveGameInfo, getGameInfo } from '../utils';

export const UPDATE_PAGE = "UPDATE_PAGE";
export const UPDATE_ERROR_MESSAGES = "UPDATE_ERROR_MESSAGES";
export const UPDATE_NICKNAME = "UPDATE_NICKNAME";

export const navigateToUrl = path => dispatch => {
  window.history.pushState({}, "", path);
  dispatch(navigate(path));
}

export const navigateToGame = gameCode => dispatch => {
  const newLocation = `/game/${gameCode}`;
  window.history.pushState({}, "", newLocation);
  dispatch(loadGameByCode(gameCode));
};

export const navigate = path => dispatch => {
  // Extract the page name from path.
  const page = path === "/" ? "index" : path.slice(1);

  // Dynamic routing logic for game route.
  const splitPath = path.split("/");

  if (splitPath.length > 2 && splitPath[1] === "game") {
    if (getGameInfo()) {
      attemptReconnectToGame();
      return;
    } else {
      preventNavigateToGame();
      return;
    }
  }

  dispatch(loadPage(page));
};

export const preventNavigateToGame = () => dispatch => {
  saveGameInfo(null);
  dispatch(
    addErrorMessage("You have to join a game, by entering its code.")
  );
  dispatch(navigateToUrl("/"));
}

const loadGameByCode = gameCode => dispatch => {
  import("../pages/page-game.js").then(module => {
    dispatch(updateGameCode(gameCode));
    dispatch(updatePage("game"));
  });
};

const loadPage = page => dispatch => {
  switch (page) {
    case "index":
      import("../pages/page-index.js");
      break;
    default:
      page = "view404";
      import("../pages/my-view404.js");
  }

  dispatch(updatePage(page));
};

const updatePage = page => {
  return {
    type: UPDATE_PAGE,
    page
  };
};

const updateErrorMessages = errorMessages => {
  return {
    type: UPDATE_ERROR_MESSAGES,
    errorMessages
  };
};

export const addErrorMessage = errorMessage => (dispatch, getState) => {
  dispatch(
    updateErrorMessages([...getState().app.errorMessages, errorMessage])
  );
};

let oldMessageTimer;

export const removeOldestErrorMessage = () => (dispatch, getState) => {
  clearTimeout(oldMessageTimer);

  oldMessageTimer = setTimeout(() => {
    dispatch(
      updateErrorMessages(
        getState().app.errorMessages.filter((item, index) => index !== 0)
      )
    );
  }, 500);
};

export const updateNickname = nickname => {
  return {
    type: UPDATE_NICKNAME,
    nickname
  };
};