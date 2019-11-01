import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from 'components/header';
import Footer from 'components/footer';
import NavLeft from 'components/navleft';

import './styles/common.less';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Row className="container">
        <Col span={5} className="nav-left">
          <NavLeft />
        </Col>

        <Col span={19} className="main">
        <Header />
        <Row className="content">
          Right Content
          {/*{this.props.children}*/}
        </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
 
export default Admin;