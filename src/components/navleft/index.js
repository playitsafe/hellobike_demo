import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuConfig from 'config/menuConfig';
import { Menu } from 'antd';

import './index.less';

const { SubMenu } = Menu;

class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({menuTreeNode});
  }

  renderMenu = (data) => {
    return data.map(
      (item) => {
        if (item.children) {
          return (
            <SubMenu key={item.key} title={item.title}>
              {this.renderMenu(item.children)}
            </SubMenu>
          );
        }
        return <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
              </Menu.Item>
      }
    );
  }

  render() { 
    return ( 
      <div>

        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>HelloBike MS</h1>
        </div>

        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    );
  }
}
 
export default NavLeft;