import { useState, useEffect, useContext } from "react"
import { BOARD_NUMBERS, SNAKES, LADDERS } from '../utils/constants'
import { DiceContext } from "../contexts/DiceContext"

function GameBoard() {
    const {dice} = useContext(DiceContext)

    const [isGameActive, setIsGameActive] = useState(false)
    const [position, setPosition] = useState(0)

    useEffect(() => {
        if (!!isGameActive) {
            alert('Game Begins')
            setPosition(1)
        }
    }, [isGameActive])

    useEffect(() => {
        if (dice === 6 && isGameActive === false) {
            setIsGameActive(true)
        }

        if (!!isGameActive) {
            const targetPosition = Math.floor(position + dice, 36)
            if(targetPosition <= 36) setPosition(targetPosition)
        }
    }, [dice])

    useEffect(() => {

        if (position === 36) {
            alert('Congratulations, You won the Game!')
        }

        if (SNAKES[position]) {
            setPosition(SNAKES[position])
            alert(`You got bit by a snake, descending from ${position} to ${SNAKES[position]}`)
        }

        if (LADDERS[position]) {
            setPosition(LADDERS[position])
            alert(`You found a ladder, climbing from ${position} to ${LADDERS[position]}`)
        }

    }, [position])

    return (
        <div className="mt-5 bg-white shadow-black shadow-lg">
            {BOARD_NUMBERS.map((row, rowIndex) => (
                <BoardDiv key={rowIndex} row={row} position={position}/>
            ))}
        </div>
    );

}

const BoardDiv = ({ row, position }) => {
    return (
        <div className="flex">
            {row.map((number) => (
                <BoardBlock key={number} isActive={position === number} number={number}/>
            ))}
        </div>
    )
}

const BoardBlock = ({ isActive, number }) => {
    return (
        <div className={`${isActive ? 'border-8 border-purple-900' : ''} 
                            ${SNAKES[number] ? "bg-[url('/public/snake.png')] bg-cover" : ''} 
                            ${LADDERS[number] ? "bg-[url('/public/ladder.png')] bg-cover" : ''} 
                            w-20 h-20 border border-purple-900 flex items-center justify-center`}>
            <span className="text-2xl drop-shadow-2xl shadow-blue-600/50 font-extrabold text-center rounded-full">{number}</span>
        </div>
    )
}


export default GameBoard