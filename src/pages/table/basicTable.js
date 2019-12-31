import React, { Component } from 'react';
import { Card, Table, Modal, Button, message } from 'antd';
import axios from 'axios_service/index.js';
import '../ui/ui.less';
import utils from 'utils/utils';

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
      }
    ];
    dataSource.map((item, index)=>{ item.key = index });
    this.setState({ dataSource });
    this.request();
  }

  //get mock data
  /*
  request = () => {
    let baseUrl = 'https://www.fastmock.site/mock/699b6d4d132ed44d8fbac1d675104739/mockapi';
    axios.get(baseUrl + '/table/list').then((res) => {
      //console.log(JSON.stringify(res));
      if (res.status == '200' && res.data.code == 0) {
        this.setState({ dataSource2: res.data.result });
      }
    });
  }
  */

  request = () => {
    axios.ajax({
      url: '/table/list',
      data: {
        params: { page: 1 },
        //showLoading: false
      }
    }).then((res) => {
      if (res.code == 0) {
        res.result.list.map((item, index)=>{ item.key = index });
        this.setState({
          dataSource2: res.result.list,
          //clear selected items after delete
          selectedRowKeys: [],
          selectedRows: null,
          pagination: utils.pagination(res, (current) => {
            //to do
          })
        });
      } else {
        
      }
    });
  }

  //record is the curreny row data
  onRowClick = (record, index) => {
    let selectedKey = [index];
    
    Modal.info({
      title: 'Info',
      content: `Username: ${record.userName}. Hobby is ${record.hobby}`
    });
    this.setState({
      selectedRowKeys: selectedKey,
      selectedItem: record
    });
  }

  //delete selected multiple choice
  handleDelete = () => {
    let rows = this.state.selectedRows;
    let ids = [];
    rows.map((item)=>{
      ids.push(item.id)
    });
    Modal.confirm({
      title: 'Delete Confirm',
      content: `Are you sure to delete the selected item(s)? ${ids.join(',')}`,
      onOk: () => {
        message.success('Deleted successfully!');
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

    //for single selection
    const selectedRowKeys = this.state.selectedRowKeys
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }

    //for multi selection
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        // let ids = [];
        // selectedRows.map((item) => {
        //   ids.push(item.id);
        // });

        this.setState({
          selectedRowKeys,
          selectedRows
        });
      }
    }

    return (
      <div>
        <Card title="Basic Table" className="card-wrap">
          <Table columns={columns} bordered
                 dataSource={this.state.dataSource}
                 pagination={false} />
        </Card>

        <Card title="Show Table Programatically - Mock" className="card-wrap">
          <Table columns={columns} bordered
                 dataSource={this.state.dataSource2}
                 pagination={false} />
        </Card>

        <Card title="Row Selection - Single - Mock" className="card-wrap">
        <Table columns={columns} bordered
        rowSelection={rowSelection}
        onRow={(record, index) => {
          return {
            onClick: () => {this.onRowClick(record, index)}
          }
        }}
        dataSource={this.state.dataSource2}
        pagination={false} />
        </Card>
        
        <Card title="Row Selection - Multiple - Mock" className="card-wrap">
          <div style={{margin: '10px 0'}}>
            <Button onClick={this.handleDelete}>Delete</Button>
          </div>
          <Table columns={columns} bordered
                 rowSelection={rowCheckSelection}
                 dataSource={this.state.dataSource2}
                 pagination={false} />
        </Card>

        <Card title="Pagination - Mock" className="card-wrap">
          <div style={{margin: '10px 0'}}>
            <Button onClick={this.handleDelete}>Delete</Button>
          </div>
          <Table columns={columns} bordered
                 
                 dataSource={this.state.dataSource2}
                 pagination={this.state.pagination} />
        </Card>
      </div>
    );
  }
}
 
export default BasicTable;