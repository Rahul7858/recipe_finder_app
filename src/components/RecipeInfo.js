import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncId } from '../redux/apiSlices/FavApi';
import { Link } from 'react-router-dom';
import {TbHandClick} from "react-icons/tb";
import { Bars } from 'react-loader-spinner';

export const RecipeInfo = () => {
    const recipeDetail = useSelector((state) => state.favApiReducer.recipeDetail);
    const loading = useSelector((state) => state.favApiReducer.loading);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncId(id));
    }, [dispatch,id])

    console.log(recipeDetail);


    
    if (loading) {
        return (
            <div className='h-[100vh] flex justify-center items-center'>
                <Bars
                    height="80"
                    width="80"
                    color="#87CEEB"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }


    return (
        <div className='flex flex-col md:flex-row justify-center gap-4 m-3 p-3'>
            <div className='flex flex-col gap-3'>
                <img className='rounded-md shadow-md md:w-[500px] md:h-[380px]' src={recipeDetail.image_url} alt='' />
                <h2 className='bg-emerald-200 text-[15px] md:text-[20px] text-black/60 font-semibold p-4 rounded-md outline-none shadow-md'>{recipeDetail.title}</h2>
                <span className='bg-blue-300/75 text-sm md:text-md text-blue-600 font-semibold p-3 rounded-md outline-none shadow-md'>Publisher:{recipeDetail.publisher}</span>
                <Link to={recipeDetail.source_url} target='_blank'>
                    <div className='flex items-center gap-2 bg-yellow-300/70 text-sm md:text-md text-yellow-600 font-semibold p-3 rounded-md outline-none shadow-md'>
                        <span>For Cooking Instructions Click Here</span>
                        <span className='text-xl'><TbHandClick /></span>
                    </div>
                </Link>
            </div>
            <div>
                <h2 className='text-xl text-black/75 font-bold '>Ingredients :</h2>
                {
                    recipeDetail.ingredients?.map((item, id) => (
                        <div className='bg-white/70 flex item-center gap-3 mt-2 p-2 rounded-md outline-none shadow-md break-all leading-8' key={id}>
                            <span className='text-black/70'>{item.description}</span>
                            <div>
                                <span className='text-green-500'>{item.quantity}</span>
                                <span className='text-yellow-500'>{item.unit}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
