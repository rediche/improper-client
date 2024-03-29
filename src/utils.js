/**
 * Shuffles array in place.
 * Source: https://stackoverflow.com/a/6274381
 * @param {Array} a items An array containing the items.
 */
export const shuffle = (a) => {
  let newArray = [...a];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export const getGameInfo = () => {
  const gameInfoString = localStorage.getItem('game-info');

  if (gameInfoString) {
    return JSON.parse(gameInfoString);
  }

  return null;
}

export const saveGameInfo = (gameInfo) => {
  localStorage.setItem('game-info', JSON.stringify(gameInfo));
}