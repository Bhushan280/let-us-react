import { useContext, useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  // let buttonName = 'Login';
  // will not update UI although it will update the variable name
  const [btnName, setBtnName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //If no dependency array array => useEffect is called  on every render of the component ::::::
  // [] --> dependency array
  //If dependency is empty then = [] => useEffect will be called on the initial render only :::::::
  //If dependency array is [btnName] ==> then, called everytime btnName is updated ::::::
  useEffect(() => {
    console.log('UseEffect Called');
  }, [btnName]);

  return (
    <div className='flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-200 lg:bg-green-100'>
      <div className='logo-container'>
        <img className='w-56' src={LOGO_URL} alt='' />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4 '>
          <li className='px-4'>Online Status {onlineStatus ? '🟢' : '🔴'} </li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-4'>
            <Link to='/cart'>Cart</Link>
          </li>
          <button
            className='login'
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
              console.log(btnName);
            }}
          >
            {btnName}
          </button>

          <li className='px-4 font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
