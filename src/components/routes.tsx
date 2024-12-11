export const games = {
  puzzle: {
    url: "/puzzle",
    games: [
      {
        title: "2048",
        url: "/puzzle/2048",
        description: "combine tiles to reach the 2048 tile.",
        goal: ["score"]
      },
      {
        title: "slider",
        url: "/puzzle/slider",
        description: "arrange scrambled tiles to recreate the original sequence.",
        goal: ["time"]
      },
      {
        title: "tower of hanoi",
        url: "/puzzle/tower",
        description: "solve the classic puzzle by moving discs between rods.",
        goal: ["time", "moves"]
      },
      {
        title: "card match",
        url: "/puzzle/match",
        description: "test your memory by matching pairs of cards.",
        goal: ["time", "moves"]
      },
    ],
  },
  strategy: {
    url: "/strategy",
    games: [
      {
        title: "chess",
        url: "/strategy/chess",
        description: "classic game of chess against ai or a friend.",
        goal: ["time", "moves"]
      },
      {
        title: "minesweeper",
        url: "/strategy/minesweeper",
        description: "uncover all safe squares without triggering hidden mines.",
        goal: ["time", "moves"]
      },
      {
        title: "tic-tac-toe",
        url: "/strategy/tic-tac-toe",
        description: "classic game of tic-tac-toe against ai or a friend.",
        goal: ["time"]
      },
      {
        title: "snake",
        url: "/strategy/snake",
        description: "fill the board while avoiding collisions.",
        goal: ["time"]
      },
    ],
  },
  word: {
    url: "/word",
    games: [
      {
        title: "typing test",
        url: "/word/typing",
        description: "test your typing speed and accuracy.",
        goal: ["typing"]
      },
      {
        title: "wordle",
        url: "/word/wordle",
        description: "based on the popular nyt daily word challenge",
        goal: ["moves"]
      },
    ],
  },
};
