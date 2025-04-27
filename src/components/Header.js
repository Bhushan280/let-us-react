import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  // let buttonName = 'Login';
  // will not update UI although it will update the variable name
  const [btnName, setBtnName] = useState('Login');

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
