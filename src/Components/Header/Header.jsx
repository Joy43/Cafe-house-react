import './Header.css'
import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-2 max-w-7xl max-auto'>
           <h1 className='text-4xl '>Knowledge cafe  </h1>
           <img src={Profile} alt=""  />  
        </div>
    );
};

export default Header;