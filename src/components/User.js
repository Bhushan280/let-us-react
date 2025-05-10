import { useEffect, useState } from 'react';

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('React OP');
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // async function getUserInfo() {
  //   const data = await fetch('https://api.github.com/users/Bhushan280');
  //   const json = data.json();
  //   console.log(json);s
  // }
  return (
    <div className='m-4 p-4 bg-gray-50 rounded-lgs'>
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name : {name} </h2>
      <h2>Location : Maheshwar</h2>
      <h2>Contact : Bhushan280</h2>
    </div>
  );
};

export default User;
