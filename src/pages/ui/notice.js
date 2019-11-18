import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';
import './ui.less';

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  openNotice = (type, position) => {
    if (position) {
      notification.config({
        placement: position
      });
    }
    notification[type]({
      message: 'this is msg',
      description: 'this is description, this is description, this is description'
    });
  }
  render() { 
    return (
      <div>
        <Card title="Info Notice" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotice('success')}>Sucess</Button>
          <Button type="primary" onClick={() => this.openNotice('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotice('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.openNotice('error')}>Error</Button>
        </Card>

        {/*Adjust placement position*/}
        <Card title="Adjust placement position" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotice('success', 'topLeft')}>Sucess</Button>
          <Button type="primary" onClick={() => this.openNotice('info', 'topRight')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotice('warning', 'bottomLeft')}>Warning</Button>
          <Button type="primary" onClick={() => this.openNotice('error', 'bottomRight')}>Error</Button>
        </Card>
      </div>
    );
  }
}
 
export default Notice;