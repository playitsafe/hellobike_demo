import React, { Component } from 'react';

import './index.less';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="footer">
        Copyright@Aaron - Designed for ReactJS Practice with AntDesign Framework
      </div>
    );
  }
}
 
export default Footer;