import React, { Component } from 'react';
//import logo from './logo.svg';

import './App.less';
//import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
      {this.props.children}
      </div>
     );
  }
}
 
export default App;

