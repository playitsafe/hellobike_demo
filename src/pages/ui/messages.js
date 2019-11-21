import React, { Component } from 'react';
import { Card, Button, message } from 'antd';
import './ui.less';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  showMessage = (type) => {
    message[type]("WelcomeToHelloBike");
  }

  render() { 
    return (
      <div>
        <Card title="Global Msg" className="card-wrap">
          <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
          <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
          <Button type="primary" onClick={()=>this.showMessage('warning')}>Warning</Button>
          <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
          <Button type="primary" onClick={()=>this.showMessage('loading')}>Loading</Button>
        </Card>
      </div>
    );
  }
}
 
export default Message;