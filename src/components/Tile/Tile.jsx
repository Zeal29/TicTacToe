import React from "react";
import { PLAYER1, PLAYER2 } from "../../constants";
import css from "./Tile.module.css";
export default function Tile(props) {
	let symbol = "";

	if (props.state === PLAYER1) {
		symbol = "⨉";
	}
	if (props.state === PLAYER2) {
		symbol = "O";
	}

	return (
		<div className={css.Tile} onClick={props.onClickTile}>
			{symbol}
		</div>
	);
}
