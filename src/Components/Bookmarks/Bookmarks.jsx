
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-slate-400 sticky scroll-m-6 ">
    <h2 className="text-3xl text-center">Bookmark:{bookmarks.length}</h2>  
    {
      bookmarks.map(bookmark => <Bookmark  bookmark={bookmark} ></Bookmark> )
    }
  </div>
  )
}

Bookmarks.propTypes = {
bookmarks:PropTypes.array
}

export default Bookmarks
