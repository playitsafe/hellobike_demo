import React, { Component } from 'react';
import './index.less';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="home-wrap">
        Welcome to HelloBike MS!
      </div>

    );
  }
}
 
export default Home;