import React from 'react'
import { Table, Button } from 'antd'
import 'antd/dist/antd.css'
import './order.scss'
const columns = [
  {
    title: '订单号',
    dataIndex: 'orderNo',
    key: 'orderNo',
  },
  {
    title: '桌位号',
    dataIndex: 'tableNo',
    key: 'tableNo',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '付款金额',
    dataIndex: 'money',
    key: 'money',
  },
  {
    title: '优惠金额',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: '完成时间',
    dataIndex: 'finishTime',
    key: 'finishTime',
  },
  {
    title: '详情',
    key: 'action',
    render: () => <Button type="link">详情</Button>,
  },
]
const data = [
  {
    orderNo: '12312312',
  },
]
function Order() {
  return (
    <div className="order">
      <div className="header">
        <div className="header-item">
          <span>订单总数</span>
          <span>123213</span>
        </div>
        <div className="header-item">
          <span>销售总额</span>
          <span>123213</span>
        </div>
        <div className="header-item">
          <span>超时总数</span>
          <span>123213</span>
        </div>
        <div className="header-item">
          <span>退单总数</span>
          <span>123213</span>
        </div>
      </div>
      <Table className="table" columns={columns} dataSource={data} />
    </div>
  )
}
export default Order
