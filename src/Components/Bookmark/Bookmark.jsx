
import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const{title,authorimg}=bookmark;
    return (
        <div>
           <div className=' bg-orange-200 p-4 m-3 rounded-xl '>
           <ul className='inline-flex gap-2'>
           <li><img className='w-14 rounded-full ' src={authorimg} alt="" /></li>
            <li> <h3 className='text-2xl'>{title} </h3></li>
            
           </ul>
            </div> 
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
};
export default Bookmark;