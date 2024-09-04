import React from 'react';

const Header = () => {
  return (
    <div className='relative bg-headerImage p-10 w-full h-80 rounded-3xl mt-5'>
       <div id="header-contents" className='absolute flex flex-col items-start bottom-5 gap-4'>
           <h2 className='font-semibold text-5xl text-white'>Order your favourite foods</h2>
           <p className='font-extralight text-slate-200 text-xl'>Choose from a diverse menu featuring a delactable array of dishes crafted with the finest</p>
           <button className='bg-white px-6 py-2 rounded-full'>View menu</button>
       </div>
       
    </div>
  )
}

export default Header;