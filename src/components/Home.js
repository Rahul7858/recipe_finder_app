import React from 'react'
import { useSelector } from 'react-redux'
import { RecipeCard } from './RecipeCard'
import { Bars } from 'react-loader-spinner';

export const Home = () => {
    const recipeList = useSelector((state) => state.searchApiReducer.recipeList);
    const loading = useSelector((state) => state.searchApiReducer.loading);


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

        <div className='flex justify-center items-center gap-3 m-4 flex-wrap'>
            {
                recipeList.length > 0 ? recipeList.map((item, index) => (
                    <div>
                        <RecipeCard recipe={item} key={index} />
                    </div>
                )) : <h1 className='text-[25px] text-slate-400 p-8 font-semibold'>Search Items Likes Chicken, Chicken briyani, Egg, Cake etc....</h1>

            }
        </div>
    )
}
