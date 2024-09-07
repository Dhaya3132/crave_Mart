import React from 'react';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({setCategory}) => {
    return (
        <div className='p-5 mt-10' id='menu'>
            <h1 className='font-semibold text-2xl mb-1'>Explores menu</h1>
            <p className='font-light text-base mb-1'>Choose from a diverse menu featuring a delectable array</p>
            <div id="menu-list" className='flex justify-between items-center gap-10 overflow-x-auto no-scrollbar mt-7'>
                {
                    menu_list.map((item, index) => (
                        <div key={index} className='menu-list-item flex flex-col gap-2 justify-center items-center shrink-0' onClick={()=> setCategory(item.menu_name)}>
                            <img src={item.menu_image} alt="item-image" className='w-50 h-50 object-cover' />
                            <p className='font-medium'>{item.menu_name}</p>
                        </div>
                    ))
                }
            </div>
            <hr className='mt-10 h-4'/>
        </div>
    )
}

export default ExploreMenu