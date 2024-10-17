import React from 'react'

const Background = () => {
  return (
    <>
      <div className='fixed x-[2] w-full h-screen'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 text-lg'>Documents</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[10vw] leading-none text-zinc-900'>Docs.</h1>
      </div>
    </>
  )
}

export default Background