import PropTypes from 'prop-types';
import { FaBookmark} from 'react-icons/fa';
import './Blog.css'
const Blog = ({ blog,handleAddToBookmark, HandleMarksAsRead }) => {
    const { title, cover,'hashtags':hashtags,authorimg,author,'posted-date': postedDate, 'reading-time': readingTime } = blog;
    console.log(blog);
    return (
        <div className=' container  grid w-96  mb-20 space-y-4 p-4 rounded-2xl m-4 text-cyan-50'>
<img  className='w-full mb-8' src={cover} />
            <div className='flex justify-between'>
               <div className=' flex' >
                <img className='w-14 rounded-full ' src={authorimg} alt="" />
                <div className='ml-6 '>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{postedDate}</p>
                </div>
                </div> 
                <div className='gap-3'>
<span >{readingTime}</span> 
<button  onClick= {()=>handleAddToBookmark(blog)} className='mr-3 text-2xl bg-lime-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
           
           <div><p className='text-2xl mb-4 ' >{title}</p></div>
           <div><p className='text-xl' > {hashtags} </p></div>
           <button onClick={()=> HandleMarksAsRead(readingTime)}
            className='text-purple-600 font-bold underline'> Mark as read</button>

</div>
       


    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
};

export default Blog;
