import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, removeMovie, removeSong } from './store'

function Movies() {
    let [movietxt, setmovietxt] = useState('')

    // useSlelector
    let movieData = useSelector(state=>state.movies)
    console.log(movieData)

    // useDispatch
    let dispatch = useDispatch()

   let handleMovieAdd = ()=>{
    dispatch(addMovie(movietxt))
    setmovietxt('')
    }

    let handleMovieRemove = (para)=>{   
        // alert(4)
        dispatch(removeMovie(para))
    }

  return (
    <div>
        <input 
        type='text'
        placeholder='Enter Movies Name' 
        className='form-control m-3 w-50 d-inline-block'
         value={movietxt} 
         onChange={(e)=>setmovietxt(e.target.value)}  
        />
        <button 
        onClick={handleMovieAdd}
        className='btn btn-success d-inline-block'
        >Add Movies</button>


        
      {
        movieData.length > 0 &&  movieData.map((ele,index)=>{
            return <div className='d-flex justify-content-between m-3' key={index}>
                <h4>{ele}</h4>
                <button 
                onClick={()=>handleMovieRemove(ele)}
                className='btn btn-danger'>X</button>
            </div>
        })
      }
    </div>
  )
}

export default Movies