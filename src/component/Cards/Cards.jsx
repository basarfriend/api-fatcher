import React from 'react'
import './Cards.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Cards(obj) {
  
  return (
   <>
   <div className='cards'>
    <div className='profile'><LazyLoadImage src={obj.photo} alt="image" /></div>
    <h2>{obj.name}</h2>
    <p>LeetCode Score : {obj.cfRank} point </p>
    <p>Codeforces Air : {obj.leetScore} </p>
   </div>
   </>
  )
}

export default Cards