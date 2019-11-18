import React, { Component } from 'react';
import { Card, Button, Spin, Icon, Alert } from 'antd';
import './ui.less';

class Loadings extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const icon = <Icon type="loading" style={{fontSize: 24}} />
    return (
      <div>
        <Card title="The Use of Spin" className="card-wrap">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin indicator={icon} />
        </Card>

        <Card title="Content Alert" className="card-wrap">
          <Alert message="React / type:info" type="info"
                 description="Welcome to HelloBike MS" />

          {/*put Spin inside Alert*/}
          <Spin>
            <Alert message="React / type:warning" type="warning"
            description="Welcome to HelloBike MS" />
          </Spin>

          {/*put Spin inside Alert w/ Tip*/}
          <Spin tip="loading...">
            <Alert message="React / type:warning" type="warning"
                   description="Welcome to HelloBike MS" />
          </Spin>

          {/*put Spin inside Alert w/ Icon*/}
          <Spin indicator={icon}>
            <Alert message="React / type:warning" type="warning"
                   description="Welcome to HelloBike MS" />
          </Spin>
        </Card>
      
      </div>
    );
  }
}
 
export default Loadings;
