import { useEffect, useState } from 'react'

function Crosso() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("x");
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
      }
    }
  }

  const handleTurn = (index: number) => {
    const newBoard = [...board];
    if (!newBoard[index]) {
      newBoard[index] = turn;
      setTurn(prev => {
        if (prev === "x") {
          return "o";
        } else {
          return "x";
        }
      })
    }
    setBoard(newBoard)
  }

  useEffect(() => {
    checkWinner();
    if (!(board.includes("")) && !winner) {
      alert("Tie!");
      window.location.reload();
    } else if (winner) {
      alert(`${winner} Wins!`)
      window.location.reload();
    }
  }, [board, winner, checkWinner])

  return (
    <div className='container flex flex-col items-center justify-center h-full w-full'>
      <h1 className='mb-3 text-xl sm:text-2xl'>{turn === "x" ? "X's turn" : "Os turn"}</h1>
      <div className='grid grid-cols-3 gap-2 bg-card border border-border h-[60%] aspect-square rounded-md p-3'>
        {board.map((cell, index) => (
          <div
            key={index}
            className='flex text-3xl text-center items-center justify-center bg-muted aspect-square rounded-sm'
            onClick={() => handleTurn(index)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Crosso
