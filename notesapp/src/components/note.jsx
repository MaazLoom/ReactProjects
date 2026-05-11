import React from 'react'

const note = ( {title, text, onDelete}) => {

  return (
    <div className=' flex flex-col justify-between bg-white h-60 w-80 mt-5 border-none shadow-xl rounded-xl p-5'>
        <div className='gap-3'>
            <h1 className='text-[#203562] font-bold text-2xl'>{title}</h1>
            <p className='font-serif'>{text}</p>
        </div>
        <button onClick={onDelete} className='bg-red-700 text-white font-bold w-20 p-0.5 rounded' >Delete</button>
    </div>
  )
}

export default note