import { WINNER_COMBOS } from "../constants.js"

export const checkWinner = (boardToCheck) => {
    // revisamos todas las combianaciones ganadoras
    // para ver si gano X o O
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate si no hay mas espacios vacíos

    // newBoard = [null, null, null, null, null, null, null, null, null]
    return newBoard.every((square) => square !== null)
  }