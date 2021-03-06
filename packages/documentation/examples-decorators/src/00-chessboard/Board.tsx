import React from 'react'
import BoardSquare from './BoardSquare'
import { Piece } from './Piece'

export interface BoardProps {
	knightPosition: [number, number]
}

/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
	width: '100%',
	height: '100%',
	display: 'flex',
	flexWrap: 'wrap',
}
/** Styling properties applied to each square element */
const squareStyle: React.CSSProperties = { width: '12.5%', height: '12.5%' }

/**
 * The chessboard component
 * @param props The react props
 */
export const Board: React.FC<BoardProps> = ({
	knightPosition: [knightX, knightY],
}) => {
	function renderSquare(i: number) {
		const x = i % 8
		const y = Math.floor(i / 8)

		return (
			<div key={i} style={squareStyle}>
				<BoardSquare x={x} y={y}>
					<Piece isKnight={x === knightX && y === knightY} />
				</BoardSquare>
			</div>
		)
	}

	const squares = []
	for (let i = 0; i < 64; i += 1) {
		squares.push(renderSquare(i))
	}
	return <div style={boardStyle}>{squares}</div>
}
