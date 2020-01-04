import React, { Component } from 'react';
import { Card, Table, Modal, Button, message, Badge } from 'antd';

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
      url: '/table/high/list',
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

  handleChange = (pagination, filters, sorter) => {
    console.log("sort is::" + sorter)
    this.setState({ sortOrder: sorter.order });
  }

  handleDelete = (item) => {
    let id = item.id;
    Modal.confirm({
      title: 'Confirm',
      content: 'Are you sure to delete this data?',
      onOk: () => {
        message.success('Delete successfully!');
        this.request();
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

    const columns3 = [
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
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a,b) => {
          return a.age - b.age;
        },
        sortOrder: this.state.sortOrder
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

    const columns4 = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id4'
      },
      {
        title: 'Username',
        dataIndex: 'userName',
        key: 'userName4'
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age4'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender4',
        render(gender) {
          return gender == 1 ? 'Male' : 'Female'
        }
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status4',
        render(status) {
          let config = {
            '1': <Badge status="success" text="success"/>,
            '2': <Badge status="error" text="error"/>,
            '3': <Badge status="default" text="default"/>,
            '4': <Badge status="processing" text="processing"/>,
            '5': <Badge status="warning" text="warning"/>
          }
          return config[status];
        }
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby4',
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
        key: 'birthday4'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address4'
      },
      {
        title: 'Option',
        key: 'option',
        render: (text, item) => {
          return <Button onClick={(item)=>{this.handleDelete(item)}} size="small">Delete</Button>
        }
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

        <Card title="Reorder Form" className="card-wrap">
          <Table columns={columns3} bordered
                 dataSource={this.state.dataSource}
                 pagination={false}
                 onChange={this.handleChange} />
        </Card>
        
        <Card title="Add Options" className="card-wrap">
          <Table columns={columns4} bordered
                 dataSource={this.state.dataSource}
                 pagination={false} />
        </Card>
      </div>
    );
  }
}
 
export default HighTable;