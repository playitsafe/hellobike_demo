import React, { Component } from 'react';

class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{textAlign: "center", fontSize: '24'}}>
        This is no match 404 no found
      </div>
     );
  }
}
 
export default NoMatch;