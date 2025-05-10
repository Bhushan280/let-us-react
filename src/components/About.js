import React from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('parent contructor ');
  }
  componentDidMount() {
    // console.log('parent did mount ');
  }
  render() {
    // console.log('parent render');
    return (
      <div>
        <h1> About Class Component </h1>
        <h2> This is About Page Namaste React Series </h2>
        <div>
          LoggedIn User
          {/* // this is conponent not a hook  */}
          <UserContext.Consumer> 
            {(data) => console.log(data)}
          </UserContext.Consumer>
        </div>

        {/* <User name={'Bhushan Chouhan'} /> */}

        <User />
        {/* <UserClass name={'Kashi Chouhan'} location={'Indore'} /> */}
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

/*

- Parent Constructor
- Parent Render
  
  - First Child Constructor 
  - First Child Render

  - Second Child Constructor 
  - Second Child Render

  <DOM UPDATED - IN SINGLE BATCH> (react batching happens here::::)

  - First Child ComponentDidMount
  - Second Child ComponentDidMount

- Parent ComponentDidMount
*/

export default About;
