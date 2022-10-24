const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkResult = (grid, turn) => {
  return WINNING_COMBINATIONS.some((combination) =>
    combination.every((index) => grid[index] === turn)
  );
};

export const checkDraw = (grid) => {
  return grid.every((cell) => cell !== "");
};
