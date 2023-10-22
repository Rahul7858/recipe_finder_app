import React from 'react'
import { useDispatch } from 'react-redux';
import {MdDelete} from "react-icons/md"
import { remove } from '../redux/slices/FavSlice';
import { toast } from "react-hot-toast";

export const FavList = ({ item }) => {

    const dispatch = useDispatch();

    
    const deleteToFav=()=> {
        dispatch(remove(item.id));
        toast.success("delete from favourite");
      }



    return (
        <div className='flex flex-col items-center bg-white p-4 mb-3 rounded-md drop-shadow-md cursor-pointer transition duration-250 ease-in-out'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <img className='h-[190px] w-[250px] rounded-md' src={item.image_url} alt='' />
                <h2 className='text-slate-500 font-semibold'>{item.title}</h2>
            </div>
            <div className='text-[25px] text-red-500 hover:text-red-700' onClick={deleteToFav}>
                <MdDelete/>
            </div>
        </div>
    )
}
