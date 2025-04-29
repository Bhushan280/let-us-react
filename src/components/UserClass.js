import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'kashi',
        location: 'Maheshwar',
      },
    };

    console.log(this.props.name + ' child Contuctor is called');
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log('React OP');
    }, 1000);
    console.log(this.props.name + ' child class Compomenet did Mount called');

    const data = await fetch('https://api.github.com/users/Bhushan280');
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Component Will Unmount');
  }
  render() {
    //converted into HTML and rendered into the webpage UI
    console.log('Render');
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className='user-card'>
        <img src={avatar_url} alt='' />
        <h2>Name : {name} </h2>
        <h2>Location : {location}</h2>
        <h2>Contact : Bhushan280</h2>
      </div>
    );
  }
}

export default UserClass;

/*****
 *
 * Contructor Called (with dummy data assigned while instantiating)
 * Render will be called (with dummy data)
 *
 * <Html will be loaded into DOM with the dummt data fro few mili seconds>
 *
 * ComponentDidMount() is called ====> we will make an API call is called
 *
 * then will do
 * this.setState // ::: ===> State Variable is Updated
 *
 * :::::: this finished the Mountying Cycle ::::::::::
 *
 * ------>
 * Uopdate Cycle Begins {UPDATE}
 *
 *  render() // render method will be called again with the API data:: new Data
 *
 * Now
 * HTML is Loaded with New API DATA
 *
 * then --->
 *
 * Called ComponentDidUpdate() :::::::::::::
 *
 *
 * and when we move or navigate to another url page or componenet then in this case
 * ComponenetWillUnMount() will be called ::::::::::
 *
 *
 */
