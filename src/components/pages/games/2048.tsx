import { useContext, useEffect, useState } from 'react'

function Mergo() {

  const addRandomTile = (board: number[][]) => {
    const empty = getEmptySpots(board);
    const selected = empty[Math.floor(Math.random() * empty.length)]
    board[selected.i][selected.j] = Math.random() < 0.9 ? 2 : 4;
  }

  const getEmptySpots = (board: number[][]) => {
    const empty = []
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 0) {
          empty.push({ i, j });
        }
      }
    }
    return empty;
  }

  const initialiseBoard = () => {
    const board = Array(4).fill(null).map(() => Array(4).fill(0));
    addRandomTile(board);
    addRandomTile(board);
    return board;
  };

  const moveTiles = (direction: string) => {
    const newBoard = JSON.parse(JSON.stringify(board));
    let changed = false;
    const moveRow = (row: number[]): number[] => {
      let newRow = row.filter(tile => tile !== 0);
      let rowChanged = newRow.length !== row.length;

      for (let i = 0; i < newRow.length - 1; i++) {
        if (newRow[i] === newRow[i + 1]) {
          newRow[i] *= 2;
          newRow.splice(i + 1, 1);
          rowChanged = true;
        }
      }

      while (newRow.length < 4) {
        newRow.push(0);
      }

      if (direction === 'right' || direction === 'down') {
        newRow.reverse();
      }

      return newRow;
    };

    if (direction === 'left' || direction === 'right') {
      for (let i = 0; i < 4; i++) {
        const newRow = moveRow(direction === 'right' ? newBoard[i].reverse() : newBoard[i]);
        newBoard[i] = newRow;
        // changed = true;
      }
    } else {
      for (let j = 0; j < 4; j++) {
        const column = [newBoard[0][j], newBoard[1][j], newBoard[2][j], newBoard[3][j]];
        const newColumn = moveRow(direction === 'down' ? column.reverse() : column);
        for (let i = 0; i < 4; i++) {
          newBoard[i][j] = newColumn[i];
        }
        // changed = true;
      }
    }

    if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
      addRandomTile(newBoard);
    }

    setBoard(newBoard);
    const empty = getEmptySpots(newBoard);

    if (empty.length === 0) {
      alert(`You won ! Score: ${score()}`)
      // addWin();
      window.location.reload()
    }

  }

  const [board, setBoard] = useState(initialiseBoard());

  useEffect(() => {
    let direction: string;
    const handleKeyInput = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        direction = "left"
      } else if (event.key === "ArrowRight") {
        direction = "right"
      } else if (event.key === "ArrowUp") {
        direction = "up"
      } else if (event.key === "ArrowDown") {
        direction = "down"
      }
      direction ? moveTiles(direction) : null
    }

    window.addEventListener("keydown", handleKeyInput);

    return () => {
      window.removeEventListener("keydown", handleKeyInput);
    };
  }, [board]);

  const score = () => {
    let sum = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        sum += board[i][j]
      }
    }
    return sum;
  }

  return (
    <div className='container flex flex-col items-center justify-center h-full w-full'>
      <h1 className='text-xl md:text-3xl mb-2 font-bold'>Score: {`${score()}`}</h1>
      <div className='grid grid-cols-4 grid-rows-4 gap-2 p-2 rounded-md bg-card border border-border aspect-square h-full text-secondary'>
        {board.map((row, i) => {
          return row.map((tile, j) => {
            return tile ? (
              <div
                className='aspect-square bg-yellow-300 flex items-center justify-center rounded-sm'
                key={`${i}${j}`}
              >
                {tile}
              </div>
            ) : (
              <div
                className='aspect-square bg-muted flex items-center justify-center rounded-sm'
                key={`${i}${j}`}
              >
              </div>
            )

          })
        })}
      </div>
    </div >
  )
}

export default Mergo;
