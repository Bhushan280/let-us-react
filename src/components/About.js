import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> About Class Component </h1>
        <h2> This is About Page Namaste React Series </h2>

        {/* <User name={'Bhushan Chouhan'} /> */}

        <UserClass name={'Kashi Chouhan'} location={'Indore'} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1> About </h1>
//       <h2> This is About Page Namaste React Series </h2>

//       {/* <User name={'Bhushan Chouhan'} /> */}

//       <UserClass name={'Kashi Chouhan'} location={'Indore'} />
//     </div>
//   );
// };
export default About;
