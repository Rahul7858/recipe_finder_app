import React from 'react'
import logo from "../assets/logo.png"
import { fetchAsyncSearch } from '../redux/apiSlices/SearchApi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const [searchItem, setSearchItem] = useState("");
    const favList = useSelector((state) => state.favReducer.setFav);
    const dispatch = useDispatch();

    const navigator = useNavigate();


    function submitHandler(e) {
        e.preventDefault();
        dispatch(fetchAsyncSearch(searchItem));
        navigator("/");
        
    }
    
    return (
        <div>
            <div className='bg-teal-200 flex flex-col justify-center items-center gap-3 p-5  md:flex-row md:justify-evenly'>
                <div className='flex justify-center items-center gap-2'>
                    <img className='w-[55px] h-[55px]' src={logo} alt='' />
                    <h3 className='text-[20px] lg:text-[25px] text-black/80 font-semibold'>Recipe Finder</h3>
                </div>
                <form className='flex justify-center flex-wrap items-center gap-2' onSubmit={submitHandler}>
                    <input
                        className='bg-white/75 p-3 md:px-8 rounded-md outline-none shadow-lg'
                        type='text'
                        placeholder='Search by ingredients or dish'
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)} />

                    <input className='bg-teal-500 p-3 px-8 rounded-md outline-none shadow-lg hover:scale-105 cursor-pointer transition duration-250 ease-in-out' type='submit' value="Search" />
                </form>
                <Link to="/favourites">
                    <div className='text-center text-[20px] text-black/80 font-semibold md:hover:scale-110  hover:text-gray-700 hover:font-semibold cursor-pointer transition duration-250 ease-in-out'>
                        Favourites<span className='text-red-500'>{`(${favList.length})`}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
