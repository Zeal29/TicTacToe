import React, { useState } from "react";
import "./App.css";
import Grid from "./components/grid/grid";
import { NONE, PLAYER1, PLAYER2, possibilities, TIE, initialGridState } from "./constants";
function App() {
	const [gridState, setGridState] = useState(initialGridState);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER1);
	const [currentWinner, setCurrentWinner] = useState(NONE);

	function onClickTile(index) {
		if (gridState[index] !== NONE) {
			return;
		}

		let newGrid = [...gridState];

		newGrid.splice(index, 1, currentPlayer);

		setGridState(newGrid);
		console.log(gridState);

		const winner = isAnyWin(newGrid);

		if (winner !== NONE) {
			setCurrentWinner(winner);
			return;
		}

		if (currentPlayer === PLAYER1) {
			setCurrentPlayer(PLAYER2);
		} else {
			setCurrentPlayer(PLAYER1);
		}
	}

	function isAnyWin(gridState) {
		for (const possibility of possibilities) {
			const first = gridState[possibility[0]] === currentPlayer;
			const second = gridState[possibility[1]] === currentPlayer;
			const third = gridState[possibility[2]] === currentPlayer;

			if (first && second && third) {
				return currentPlayer;
			}
		}

		if (!gridState.some((s) => s === NONE)) {
			return TIE;
		}

		return NONE;
	}

	function replay() {
		setGridState(initialGridState);
		setCurrentWinner(NONE);
	}

	let winnerText = null;

	if (currentWinner === TIE) {
		winnerText = <h1>Game is Tie</h1>;
	} else if (currentWinner !== NONE) {
		winnerText = <h1>{currentPlayer} is the winner</h1>;
	}

	return (
		<div className="App">
			{winnerText}

			<Grid isGamePlayable={currentWinner === NONE} onClickTile={onClickTile} state={gridState} />

			{currentWinner !== NONE && <button onClick={replay}>Replay</button>}
		</div>
	);
}

export default App;
