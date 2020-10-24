import React from "react";
import Tile from "../Tile/Tile";
import css from "./grid.module.css";

export default function Grid(props) {
	function onClickTile(i) {
		if (props.isGamePlayable) {
			props.onClickTile(i);
		}
	}

	return (
		<div className={css.grid}>
			{props.state.map((tileState, i) => (
				<Tile onClickTile={() => onClickTile(i)} state={tileState} />
			))}
		</div>
	);
}

// <Tile state={tileState} />
