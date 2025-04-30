import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  // let buttonName = 'Login';
  // will not update UI although it will update the variable name
  const [btnName, setBtnName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  //If no dependency array array => useEffect is called  on every render of the component ::::::
  // [] --> dependency array
  //If dependency is empty then = [] => useEffect will be called on the initial render only :::::::
  //If dependency array is [btnName] ==> then, called everytime btnName is updated ::::::
  useEffect(() => {
    console.log('UseEffect Called');
  }, [btnName]);

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status {onlineStatus ? '🟢' : '🔴'} </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
