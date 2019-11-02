import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Util from 'utils/utils';
import axios from 'axios/index.js';

import './index.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.setState({
      userName: 'Aaaron'
    });

    setInterval(() => {
      let sysTime = Util.formateDate(new Date());
      this.setState({sysTime});
    }, 1000);

    this.getWeatherApiData();
  }

  getWeatherApiData = () => {
    let weatherAPI = 'http://api.jirengu.com/getWeather.php?city=shanghai';
    
    axios.jsonp(weatherAPI).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          temperature: data.temperature
        });
        
      }
    });
  }

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
            Home
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}, </span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="weather-icon" />
            </span>
            <span className="weather-detail">{this.state.temperature}</span>
          </Col>
        </Row>
      </div>
    );
  }
}
 
export default Header;