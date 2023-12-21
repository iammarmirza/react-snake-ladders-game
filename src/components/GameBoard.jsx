import { useState, useEffect } from "react"

const NUMBERS = [
    [36, 35, 34, 33, 32, 31],
    [25, 26, 27, 28, 29, 30],
    [24, 23, 22, 21, 20, 19],
    [13, 14, 15, 16, 17, 18],
    [12, 11, 10, 9, 8, 7],
    [1, 2, 3, 4, 5, 6]
];

const SNAKES = {
    8: 4,
    15: 10,
    23: 17,
    32: 25
}

const LADDERS = {
    2: 7,
    6: 12,
    19: 25,
    27: 31,
}

function GameBoard({ dice, isGameActive }) {

    const [position, setPosition] = useState(0)

    useEffect(() => {
        if (isGameActive === true) {
            alert('Game Begins')
            setPosition(1)
        }
    }, [isGameActive])

    useEffect(() => {
        if (dice && isGameActive === true) setPosition(position + dice)
    }, [dice])

    useEffect(() => {

        if (position === 36) {
            alert('Congratulations, You won the Game!')
        }

        if (position > 36) setPosition((prevPosition) => prevPosition - dice)

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
            {NUMBERS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((number) => (
                        <div key={number} className={`${position === number ? 'border-8 border-purple-900' : ''} 
                            ${SNAKES[number] ? "bg-[url('/public/snake.png')] bg-cover" : ''} 
                            ${LADDERS[number] ? "bg-[url('/public/ladder.png')] bg-cover" : ''} 
                            w-20 h-20 border border-purple-900 flex items-center justify-center`}>
                            <span className="text-2xl drop-shadow-2xl shadow-blue-600/50 font-extrabold text-center rounded-full">{number}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

}

export default GameBoard