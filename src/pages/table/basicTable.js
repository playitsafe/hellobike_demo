import React, { Component } from 'react';
import { Card, Table } from 'antd';
import axios from 'axios';
import '../ui/ui.less';

class BasicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource2: []
    }
  }

  componentDidMount() {
    const dataSource = [
      {
        id: '0',
        userName: 'Aaron',
        gender: '1',
        status: '1',
        hobby: '1',
        birthday: '2007-01-01',
        address: '1 King st',
        brekkiTime: '08:15',
        key: '0'
      },
      {
        id: '1',
        userName: 'Lee',
        gender: '1',
        status: '1',
        hobby: '1',
        birthday: '2007-01-01',
        address: '1 King st',
        brekkiTime: '08:15',
        key: '1'
      },
      {
        id: '2',
        userName: 'Jason',
        gender: '1',
        status: '1',
        hobby: '1',
        birthday: '2007-01-01',
        address: '1 King st',
        brekkiTime: '08:15',
        key: '2'
      }
    ]
    this.setState({ dataSource });
  }

  //get mock data
  request = () => {
    
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
        key: 'gender'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby'
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
    return (
      <div>
        <Card title="Basic Table" className="card-wrap">
          <Table columns={columns} bordered
                 dataSource={this.state.dataSource}
                 pagination={false} />
        </Card>

        <Card title="Show Table Programatically" className="card-wrap">
          <Table columns={columns} bordered
                 dataSource={this.state.dataSource2}
                 pagination={false} />
        </Card>
      </div>
    );
  }
}
 
export default BasicTable;