import { useEffect, useState } from 'react';

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {}, []);
  return (
    <div className='user-card'>
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name : {name} </h2>
      <h2>Location : Maheshwar</h2>
      <h2>Contact : Bhushan280</h2>
    </div>
  );
};

export default User;
