
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setbookmarks]=useState([]);
  const [readingTime,setreadingTime]=useState(0);
  const handleAddToBookmark=blog=>{
    console.log('adding book')
    const newBookmarks=[...bookmarks,blog];
    setbookmarks(newBookmarks);
  }
  const HandleMarksAsRead =time =>{
    console.log('making as read',time);
  }

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl  mx-auto '>
      <Blogs handleAddToBookmark={handleAddToBookmark} 
      HandleMarksAsRead={handleAddToBookmark} ></Blogs>
     <Bookmarks bookmarks={bookmarks} ></Bookmarks>
     </div>
    </>
  )
}

export default App
