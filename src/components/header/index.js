import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Util from 'utils/utils';

import './index.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillMount() {
    this.setState({
      userName: 'Aaaron'
    });

    setInterval(() => {
      let sysTime = Util.formateDate(new Date());
      this.setState({sysTime});
    }, 1000);

    //this.getWeatherApiData();
  }

  //getWeatherApiData = () => {}

  render() { 
    return ( 
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>Welcom, {this.state.userName}</span>
            <a href="#">Logout</a>
          </Col>
        </Row>

        <Row className="breadCrumb">
          <Col span={4} className="breadCrumb-title">
            HomePage
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}, </span>
            <span className="weather-detail">Cloudy</span>
          </Col>
        </Row>
      </div>
    );
  }
}
 
export default Header;