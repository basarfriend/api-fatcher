import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '/home/basar/reactBASAR/src/component/Cards/Cards.jsx'
import { Link, Links } from 'react-router-dom'
const Home = () => {
  const [num, setNum] = useState(10)
  const [data, setData] = useState([])
  const api=async ()=>{
  const response=await axios.get(`https://picsum.photos/v2/list?page=${num}&limit=15`)
  setData(response.data)
  }
  useEffect(() => {
    setData([])
    api()
  return () => {
    }
  }, [num])
 const prev=(e)=>{
  if (num>1) {
    setNum(num-1)
  }
}
  const next=()=>{
    setNum(num+1)
  }
  let printData=""
  if (data.length > 0) {
    printData=data.map((e,idx)=>{
      return <Link key={idx} to={'/Profile'} state={{ img: e.download_url, name: e.author, leet: e.height, cfRank: e.width }} className='cardsLink'>
  <Cards name={e.author} leetScore={e.height} cfRank={e.width} photo={e.download_url} />
</Link>

    })
  }
  else{
    printData=<p className='loadP'>...Loading</p>
  }

  return <>
   <div className='cardsdiv' >
    {printData}
   </div>
   <div className="pagination-container">
    <button 
     disabled={num === 1} style={{ opacity: num === 1 ? 0.3 : 1 }}
     onClick={prev}>PREV</button>
    <h2>page {num}</h2>
    <button onClick={next}>NEXT</button>
   </div>
  </>
}

export default Home