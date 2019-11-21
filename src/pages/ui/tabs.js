import React, { Component } from 'react';
import { Card, Button, message, Tabs, Icon } from 'antd';
import './ui.less';

const TabPane = Tabs.TabPane;

class MyTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillMount() {
    const panes = [
      {
        title: 'Tab 1',
        content: 'Content of Tab 1',
        key: '1'
      },

      {
        title: 'Tab 2',
        content: 'Content of Tab 2',
        key: '2'
      },

      {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3'
      }
    ];

    this.setState({
      activeKey: panes[1].key,
      panes
    });
  }

  newTabIndex = 0;

  handleCallback = (key) => {
    message.info("Hi, You select Tab " + key);
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() { 
    return (
      <div>
        <Card title="Tab" className="card-wrap">
          <Tabs defaultActiveKey="2" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>

        <Card title="Tab with icon" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>

        <Card title="Tab with icon" className="card-wrap">
          <Tabs //defaultActiveKey="3" 
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}>
            {
              this.state.panes.map((pane) => {
                return <TabPane tab={pane.title} key={pane.key} />
              })
            }
          </Tabs>
        </Card>
        
      </div>
    );
  }
}
 
export default MyTabs;