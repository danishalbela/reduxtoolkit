import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSong, removeSong } from './store'

function Songs() {
    let [songtxt, setsongtxt] = useState('')

    // useSelector
    let songsData = useSelector(state=>state.songs)
    console.log(songsData)

    // useDispatch
    let dispatch = useDispatch()

   let handleSongsAdd = ()=>{
    // alert(5322)
        dispatch(addSong(songtxt))
    }

    let removeHandleSongs = (para)=>{
      // alert(5)
      // console.log(para)
      dispatch(removeSong(para))
    }
  return (
    <div>
      <input type='text' 
      placeholder='Enter Songs Name' 
      className='form-control m-3 w-50 d-inline-block'
      value={songtxt} 
      onChange={(e)=>setsongtxt(e.target.value)} 
      />
      <button 
      onClick={handleSongsAdd}
      className='btn btn-success'>Add Songs</button>

      {
        songsData.length > 0 && songsData.map((ele,index)=>{
            return <div className='d-flex justify-content-between m-3' key={index}>
                <h4>{ele}</h4>
                <button 
                onClick={()=>removeHandleSongs(ele)}
                className='btn btn-danger'>X</button>
            </div>
        })
      }
    </div>
  )
}

export default Songs