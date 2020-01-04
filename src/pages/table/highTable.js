import React, { Component } from 'react';
import { Card, Table, Modal, Button, message } from 'antd';

import axios from 'axios_service/index.js';
import utils from 'utils/utils';

class HighTable extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.params = {
      page: 1
    }
  }

  componentDidMount() {
    this.request();
  }

  request = () => {
    let _this = this;
    axios.ajax({
      url: '/table/list',
      data: {
        params: { page: this.params.page },
        //showLoading: false
      }
    }).then((res) => {
      if (res.code == 0) {
        res.result.list.map((item, index)=>{ item.key = index });
        this.setState({
          dataSource: res.result.list
        });
      } else {
        
      }
    });
  }

  render() { 
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Username',
        dataIndex: 'userName',
        key: 'userName'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render(gender) {
          return gender == 1 ? 'Male' : 'Female'
        }
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render(status) {
          let config = {
            '1': 'Single',
            '2': 'Engaged',
            '3': 'Married',
            '4': 'Seperated',
            '5': 'Fall in Love'
          }
          return config[status];
        }
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
        render(hobby) {
          let config = {
            '1': 'Reading',
            '2': 'Writing',
            '3': 'Listening',
            '4': 'Movie',
            '5': 'Music',
            '6': 'Law',
            '7': 'History',
            '8': 'Walking',
          }
          return config[hobby];
        }
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: 'BrekkiTime',
        dataIndex: 'brekkiTime',
        key: 'brekkiTime'
      }
    ];

    const columns2 = [
      {
        title: 'Id',
        dataIndex: 'id',
        fixed: 'left',
        key: 'id'
      },
      {
        title: 'Username',
        dataIndex: 'userName',
        fixed: 'left',
        key: 'userName'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render(gender) {
          return gender == 1 ? 'Male' : 'Female'
        }
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render(status) {
          let config = {
            '1': 'Single',
            '2': 'Engaged',
            '3': 'Married',
            '4': 'Seperated',
            '5': 'Fall in Love'
          }
          return config[status];
        }
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
        render(hobby) {
          let config = {
            '1': 'Reading',
            '2': 'Writing',
            '3': 'Listening',
            '4': 'Movie',
            '5': 'Music',
            '6': 'Law',
            '7': 'History',
            '8': 'Walking',
          }
          return config[hobby];
        }
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address2'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address3'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address4'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address5'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address6'
      },
      {
        title: 'BrekkiTime',
        dataIndex: 'brekkiTime',
        key: 'brekkiTime'
      }
    ];
    return (
      <div>
        <Card title="Header Fixed" className="card-wrap">
          <Table columns={columns} bordered
                 dataSource={this.state.dataSource}
                 pagination={false}
                 scroll={{y:240}} />
        </Card>

        <Card title="Side Fixed" className="card-wrap">
          <Table columns={columns2} bordered
                 dataSource={this.state.dataSource}
                 pagination={false}
                 scroll={{x:1400}} />
        </Card>
      </div>
    );
  }
}
 
export default HighTable;