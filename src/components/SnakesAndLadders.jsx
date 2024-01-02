import { useState, useEffect } from 'react';
import Dice from './Dice';
import GameBoard from './GameBoard';


function SnakesAndLadders() {
    const [dice, setDice] = useState(1)
    const [isGameActive, setIsGameActive] = useState(false)

    const generateRandomNumber = () => {
        const randomValue = Math.floor(Math.random() * 6) + 1
        setDice(randomValue)
    }

    useEffect(() => {
        if (dice === 6 && isGameActive === false) {
            setIsGameActive(true)
        }
    }, [dice])

    return (
        <div className='flex flex-col items-center gap-6 h-screen bg-purple-900'>
            <GameBoard dice={dice} isGameActive={isGameActive}/>
            <Dice dice={dice} onClick={generateRandomNumber} />
        </div>
    )
}

export default SnakesAndLadders