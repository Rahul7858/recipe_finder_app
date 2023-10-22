import React from 'react'
import { useSelector } from 'react-redux'
import { FavList } from './FavList';

export const Favourite = () => {
    const favList = useSelector((state) => state.favReducer.setFav);

    return (
        <div>
            <div className='flex justify-center items-center gap-3 m-4 flex-wrap'>
                {
                    favList.length > 0 ? favList.map((item, index) => (
                        <div>
                            <FavList item={item} key={index}/>
                        </div>
                    )) : <h2 className='text-[25px] text-slate-400 p-8 font-semibold'>Favourite list is empty....</h2>

                }
            </div>
        </div>
    )
}
