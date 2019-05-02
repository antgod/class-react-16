import React, { Component } from '@alipay/bigfish/react';
import { Table } from '@alipay/bigfish/antd';
import { Link } from '@alipay/bigfish/sdk/router';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '编号',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '操作',
        dataIndex: 'op',
        key: 'op',
        render: (text, record) => <Link to={`/user/${record.key}`}>查看</Link>,
      },
    ];
  }

  render() {
    const { style, list } = this.props;
    return (
      <Table
        rowKey="key"
        dataSource={list}
        columns={this.columns}
        pagination={false}
        style={style}
      />
    );
  }
}

export default UserList;
