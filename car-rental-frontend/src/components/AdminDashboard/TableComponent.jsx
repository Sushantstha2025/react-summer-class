import { Space, Table, Tag } from 'antd';
import ActionButtonComponent from '../userDashboard/ActionButtonComponent';

const TableComponent = () => {
      const columns = [
  {
    title: 'Car Model',
    dataIndex: 'model',
    key: 'model',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => {
        let color = status === 'Pending' ? 'yellow' : 'red'
        
        if(status === 'Completed'){
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
    model: 'Porshe 911',
    customer: 'Sarah Jenkins',
    date: 'Oct 24, 2023',
    status: 'Completed',
  },
  {
    key: '2',
    model: 'Range Rover',
    customer: 'Michael Chaen',
    date: 'Oct 23, 2023',
    status: 'Pending',
  },
  {
    key: '3',
    model: 'Ferrari F8',
    customer: 'Robert Wilson',
    date: 'Oct 24, 2023',
    status: 'Maintenance',
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
