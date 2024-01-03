import { useState } from 'react';
import Dice from './Dice';
import GameBoard from './GameBoard';
import { DiceContext } from '../contexts/DiceContext';

function SnakesAndLadders() {
    const [dice, setDice] = useState(1)

    const generateRandomNumber = () => {
        const randomValue = Math.floor(Math.random() * 6) + 1
        setDice(randomValue)
    }

    return (
        <DiceContext.Provider value={{dice, generateRandomNumber}}>
            <div className='flex flex-col items-center gap-6 h-screen bg-purple-900'>
                <GameBoard />
                <Dice />
            </div>
        </DiceContext.Provider>
    )
}

export default SnakesAndLadders