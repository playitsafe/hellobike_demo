import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal_1: false,
      showModal_2: false,
      showModal_3: false,
      showModal_4: false
    }
  }

  handleOpen = (type) => {
    this.setState({
      [type]: true
    });
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: 'Confirm??',
      content: 'Are you sure to Confirm?',
      onOk() {
        console.log('ok')
      },
      onCancel() {
        console.log('cancel')
      }
    });
  }

  render() { 
    return (
      <div>
        <Card title="Basic Modal" className="card-wrap">
          {/*传参方法必须通过箭头函数实现*/}
          <Button type="primary" onClick={() => this.handleOpen('showModal_1')}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal_2')}>Custome footage</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal_3')}>Top 20px</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal_4')}>Centred</Button>
        </Card>

        <Card title="Info Confirm Modal" className="card-wrap">
          {/*传参方法必须通过箭头函数实现*/}
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>

        {/*Modal 1--Open*/}
        <Modal title="React -- Modal 1" visible={this.state.showModal_1} 
               onCancel={()=>{
                 this.setState({showModal_1: false});
               }}>
          <p>Welcome to HelloBike MS</p>
        </Modal>

        {/*Modal 2--Custome footage*/}
        <Modal title="React -- Modal 2" visible={this.state.showModal_2} 
               onCancel={()=>{
                 this.setState({showModal_2: false});
               }}
               okText="Next Step~" cancelText="Forget it">
          <p>Welcome to HelloBike MS</p>
        </Modal>

        {/*Modal 3--Top 20px*/}
        <Modal style={{top: 20}}
               title="React -- Modal 3" visible={this.state.showModal_3} 
               onCancel={()=>{
                 this.setState({showModal_3: false});
               }}>
          <p>Welcome to HelloBike MS</p>
        </Modal>

        {/*Modal 4--Centered*/}
        <Modal title="React -- Modal 4"
               wrapClassName="vertical-center-modal"
               visible={this.state.showModal_4} 
               onCancel={()=>{
                 this.setState({showModal_4: false});
               }}>
          <p>Welcome to HelloBike MS</p>
        </Modal>
      </div>
    );
  }
}
 
export default Modals;