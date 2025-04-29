import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // creating a state varibale in class based component
      count: 0,
    };

    console.log('child Contuctor is called');
  }

  componentDidMount() {
    console.log('child class Compomenet did Mount called');
  }

  render() {
    // converted into HTML and rendered into the webpage UI

    const { name, location } = this.props;
    const { count } = this.state;

    console.log('child render menthod is called ');
    return (
      <div className='user-card'>
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            /* never ever update state variable directly in class based component {this.state.count = this.state.count+1 ❌} it can create inconsistancy in your program
             */

            this.setState({
              // this is the big object in class based component
              count: this.state.count + 1,
            }); // this will contains the updated value of your state variable, can be used any where inside the component {when ever thisState will updateds react will re-render your component }
          }}
        >
          CountIncrease
        </button>
        <h2>Name : {name} </h2>
        <h2>Location : {location}</h2>
        <h2>Contact : Bhushan280</h2>
      </div>
    );
  }
}

export default UserClass;
