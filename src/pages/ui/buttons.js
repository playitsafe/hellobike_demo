import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';

import './ui.less';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: false
    }
  }

  handleCloseLoading = () => {
    this.setState({
      loading: true,
      size: 'default'
    });
  }

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    });
  }

  render() { 
    return (
      <div>
        <Card title="Basic Buttons" className="card-wrap">
          <Button type="primary">Primary</Button>
          <Button>Ordinary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </Card>

        <Card title="Buttons w/ Pics" className="card-wrap">
          <Button icon="plus">Plus</Button>
          <Button icon="edit">Edit</Button>
          <Button icon="delete">Delete</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">Search</Button>
          <Button type="primary" icon="download">Download</Button>
        </Card>

        <Card title="Loading Buttons" className="card-wrap">
          <Button type="primary" loading={true}>Confirm</Button>
          <Button type="primary" shape="circle" loading={true}></Button>
          <Button loading={true}>Click To Load</Button>
          <Button shape="circle" loading={true}></Button>
          <Button type="primary" onClick={this.handleCloseLoading} loading={this.state.loading}>Close</Button>
        </Card>

        <Card title="Button Group">
          <Button.Group>
            <Button type="primary" icon="left">Return</Button>
            <Button type="primary" icon="right">Forward</Button>
          </Button.Group>
        </Card>

        <Card title="Buttons Sizes" className="card-wrap">

          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">Small</Radio>
            <Radio value="default">Medium</Radio>
            <Radio value="large">Large</Radio>
          </Radio.Group>

          <Button type="primary" size={this.state.size}>Primary</Button>
          <Button size={this.state.size}>Ordinary</Button>
          <Button size={this.state.size} type="dashed">Dashed</Button>
          <Button size={this.state.size} type="danger">Danger</Button>
          <Button size={this.state.size} disabled>Disabled</Button>
        </Card>
      </div> 
     );
  }
}
 
export default Buttons;