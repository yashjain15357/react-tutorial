import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()         // use loader hook it is faster than fetch in fetching data

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/yashjain15357')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// this function help in lode a data
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/yashjain15357')
    return response.json()
}