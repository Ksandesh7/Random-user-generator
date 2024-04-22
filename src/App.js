import { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
import { getPosts, getUser } from "./api";
import "./App.css";

function App() {

  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    getPosts().then((posts) => setData(posts));
  }, [])

  useEffect(()=> {
    getUser().then((user)=>setUserData(user.results[0]));
  }, [])

  return (<div className="App">
    <h2>Random User Generator</h2>
    {userData && <UserCard data={userData}/>}
   {/* { data ? data.map((e)=><PostCard title={e.title} body={e.body}/>) : <p>No data</p>} */}
  </div>);
}

export default App;
