import { Space, Table, Tag } from 'antd';
import ActionButtonComponent from './ActionButtonComponent';

const TableComponent = () => {
      const columns = [
  {
    title: 'Car Model',
    dataIndex: 'model',
    key: 'model',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Pickup Date',
    dataIndex: 'pickup',
    key: 'pickup',
  },
  {
    title: 'Return Date',
    dataIndex: 'return',
    key: 'return',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => {
        let color = status === 'Pending' ? 'yellow' : 'red'
        
        if(status === 'Confirmed'){
          color = 'green'
        }

        return (
          <Tag color={color}>
            {status.toUpperCase()}
          </Tag>
        );
      }
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="medium">
        <ActionButtonComponent />
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    model: 'John Brown',
    pickup: 32,
    return: 'New York No. 1 Lake Park',
    status: 'Completed',
  },
  {
    key: '2',
    model: 'Jim Green',
    pickup: 42,
    return: 'London No. 1 Lake Park',
    status: 'Pending',
  },
  {
    key: '3',
    model: 'Joe Black',
    pickup: 32,
    return: 'Sydney No. 1 Lake Park',
    status: 'Deleted',
  },
];

  return (
    <div className='table border-gray-200 border-s-2 shadow-md rounded-lg'>
        <div className='bg-[#FFFFFF] flex items-center justify-between px-5 py-3 rounded-t-md'>
            <h1 className='text-xl text-black font-semibold'>Recent Bookings</h1>
            <a href="#">View All</a>
        </div>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default TableComponent
