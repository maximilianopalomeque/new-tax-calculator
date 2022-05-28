export const initializeLocalStorage = () => {
  localStorage.setItem("recent", JSON.stringify([]));
};

export const getFromLocalStorage = () => {
  const games = localStorage.getItem("recent");
  if (!games) {
    initializeLocalStorage();
    return;
  }
  return JSON.parse(games);
};

export const saveInLocalStorage = (game) => {
  const recent = getFromLocalStorage();
  const updatedRecent = [game, ...recent];
  localStorage.setItem("recent", JSON.stringify(updatedRecent));
};
