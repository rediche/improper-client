import { updateGameCode } from './game.js';

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const navigateToGame = (gameCode) => (dispatch) => {
  const newLocation = `/game/${gameCode}`;
  window.history.pushState({}, "", newLocation);
  dispatch(navigate(newLocation));
}

export const navigate = (path) => (dispatch) => {
  // Extract the page name from path.
  const page = path === '/' ? 'index' : path.slice(1);

  // Dynamic routing logic for game route.
  const splitPath = path.split('/');

  if (splitPath.length > 2 && splitPath[1] === 'game' && splitPath[2].length === 6) {
    dispatch(loadGameByCode(splitPath[2]));
  } else {
    dispatch(loadPage(page));
  }
};

const loadGameByCode = (gameCode) => (dispatch) => {
  import('../pages/page-game.js').then((module) => {
    dispatch(updateGameCode(gameCode));
  });

  dispatch(updatePage('game'));
};

const loadPage = (page) => (dispatch) => {
  switch (page) {
    case 'index':
      import('../pages/page-index.js').then((module) => {
        // Put code in here that you want to run every time when
        // navigating to view1 after my-view1.js is loaded.
      });
      break;
    default:
      page = 'view404';
      import('../pages/my-view404.js');
  }

  dispatch(updatePage(page));
};

const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  };
};

let snackbarTimer;

export const showSnackbar = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  window.clearTimeout(snackbarTimer);
  snackbarTimer = window.setTimeout(() =>
    dispatch({ type: CLOSE_SNACKBAR }), 3000);
};

export const updateOffline = (offline) => (dispatch, getState) => {
  // Show the snackbar only if offline status changes.
  if (offline !== getState().app.offline) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};
