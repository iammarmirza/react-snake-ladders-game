import { IMAGES } from "../utils/constants"
function Dice({dice, onClick}) {
  
  return (
      <div className='flex gap-6 justify-center items-center bg-purple-800 px-5 py-3 rounded-xl shadow-black shadow-md'>
        <img className='h-16' src={`/${IMAGES[dice - 1]}`}/>
        <button onClick={onClick} className='bg-white p-2 rounded-lg text-purple-800 font-bold text-lg hover:bg-slate-200 shadow-sm shadow-black'>Roll The Dice</button>
      </div>
  )
}

export default Dice