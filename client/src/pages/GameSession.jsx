import React from 'react'
import GameSessionImg from '../assets/images/GameSession/GameSessionImg.jpg';

const GameSession = () => {
  return (
    <div 
      className='flex flex-col justify-center'
    >
      <img 
        src={GameSessionImg}
        alt="Characters Graphic" 
        className='h-full w-auto object-fit'
      />
    </div>
  )
}

export default GameSession
