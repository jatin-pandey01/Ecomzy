import React from 'react'

const Spinner = () => {
  return (
    <div className='w-full min-h-[80vh] flex gap-8 flex-col justify-center items-center'>
        <div className='spinner'></div>
        <div className='text-3xl font-bold'>Loading</div>
    </div>
  )
}

export default Spinner;