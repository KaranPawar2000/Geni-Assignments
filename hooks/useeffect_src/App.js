import{useState,useEffect} from 'react';

import './App.css';

function App() {
  const [resourceType,setresourcetype] =useState("posts")
  const [items,setitems] =useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setitems(json))
  },[resourceType]);


  return (
    <>
    <div>
    <button onClick={()=>setresourcetype("posts")}>post</button>
    <button onClick={()=>setresourcetype("comments")}>comment</button>
    <button onClick={()=>setresourcetype("users")}> share</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item=>{
      return <pre>{JSON.stringify(item)}</pre>
    })}
    </>
  );
}

export default App;
