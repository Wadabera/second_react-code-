import React, { useEffect, useState } from 'react'
import axios from 'axios'

 function Usecontxt() {
  const [posts, setpost] = useState([])
  useEffect(() => {
    axios.get('https:jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
      setpost(res.data)
    })
  } ,[])
  return (
    <div> 
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}

          </li>
        ))}
      </ul>
      
    </div>
  )
 }
export default Usecontxt;



//https://jsonplaceholder.typicode.com/posts
