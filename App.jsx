import React from 'react';
import {useState, useEffect} from 'react';



function App (){

  //step1 we have to define states to fetch the data
  const [posts, setPosts]=useState([]);//for storing the data
  const [error, setErrors]=useState(null);//for storing the errors
  const [loading, setLoading]=useState(true);//for set loading

  //step 2 fetch data
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((data)=>{
        setPosts(data);
        setLoading(false);
    })
    .catch((error)=>{
      setErrors(error);
      setLoading(false);
    });
    
  },[]);

  if(loading){
    return <div>Loading NOW</div>
  }
  if (error){
    return <div>ERRORR {error.message}</div>
  }
  
  
  return(
    <>
      <div className='App'>
        <h1>Posts</h1>
        <ul>
          {posts.map ((post)=>(
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
      
          ))}
        </ul>
      </div>
    </>
  )
}
  export default App;

