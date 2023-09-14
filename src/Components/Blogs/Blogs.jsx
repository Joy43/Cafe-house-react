import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import './Blogs.css'
// data load json

const Blogs = ({handleAddToBookmark, HandleMarksAsRead}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
fetch('blogs.json')
.then(res=>res.json())
.then(data=>setBlogs(data))
    },[])
    return (
        <div className=" Blogs-container  md:w-2/3 bg-hero-pattern  from-black via-black to-transparent bg-blend-overlay bg-no-repeat bg-cover bg-fixed ">

         <h1  className="text-4xl">Blogs:{blogs.length}</h1>
         {
            blogs.map(blog => <Blog 
                key={blog.id} blog={blog} 
                handleAddToBookmark={handleAddToBookmark}
                HandleMarksAsRead={ HandleMarksAsRead}
                > </Blog> )
         }
            
        </div>
    );
};

export default Blogs;