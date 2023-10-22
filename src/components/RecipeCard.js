import React from 'react'
import { Link } from 'react-router-dom'
import { add, remove } from '../redux/slices/FavSlice'
import { useDispatch ,useSelector} from 'react-redux'
import { toast } from "react-hot-toast";

export const RecipeCard = ({recipe}) => {
  const favList = useSelector((state) => state.favReducer.setFav);
    const dispatch = useDispatch();


  const addToFav=()=> {
    dispatch(add(recipe));
    toast.success("added");
  }

  const removeToFav=()=> {
    dispatch(remove(recipe.id));
    toast.success("removed");
  }

  console.log(favList);
  console.log(recipe.id);

  return (
    <div className='flex flex-col items-center bg-white p-4 mb-3 rounded-md drop-shadow-md cursor-pointer transition duration-250 ease-in-out'>
      <div className='flex flex-col justify-center items-center gap-3'>
        <img className='h-[190px] w-[250px] rounded-md' src={recipe.image_url} alt='' />
        <h2 className='text-slate-500 font-semibold'>{recipe.title}</h2>
      </div>

      <div className='flex gap-2'>
        <div>
          <Link to={`/recipe-info/${recipe.id}`}>
            <button className='text-yellow-500 border-2 border-yellow-400 rounded-full font-semibold 
                                    text-[12px] p-2 px-8 mt-2 uppercase shadow-sm
                                    hover:bg-yellow-400
                                    hover:text-white transition duration-300 ease-in"'>View</button>

          </Link>
        </div>
        <div>
          {
            favList?.some((p) => p.id === recipe.id) ?
              (<button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                                    text-[12px] p-2 px-8 mt-2 uppercase shadow-sm
                                    hover:bg-gray-700
                                    hover:text-white transition duration-300 ease-in"
                onClick={removeToFav}>
                Remove
              </button>) :
              (<button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                                    text-[12px] p-2 px-8 mt-2 uppercase shadow-sm
                                    hover:bg-gray-700
                                    hover:text-white transition duration-300 ease-in"
                onClick={addToFav}>
                Add
              </button>)

          }
        </div>
      </div>
    </div>
  )
}
