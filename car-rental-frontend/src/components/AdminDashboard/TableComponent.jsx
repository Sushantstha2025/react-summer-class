import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, Popconfirm, message } from 'antd';
import { rentalAPI } from '../../services/api';

const TableComponent = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllBookings();
  }, []);

  const fetchAllBookings = async () => {
    try {
      setLoading(true);
      const res = await rentalAPI.getAllBookings();
      setBookings(res.history || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (id) => {
    try {
      await rentalAPI.cancelBooking(id);
      message.success('Booking status updated to Cancelled');
      fetchAllBookings();
    } catch (err) {
      message.error(err.message || 'Failed to update booking');
    }
  };

  const columns = [
    {
      title: 'Car Model',
      dataIndex: 'vehicle',
      key: 'vehicle',
      render: (vehicle) => (
        <span className="font-semibold text-blue-900">
          {vehicle ? `${vehicle.brand} ${vehicle.model}` : 'Vehicle'}
        </span>
      ),
    },
    {
      title: 'Customer',
      dataIndex: 'user',
      key: 'user',
      render: (user) => (
        <span className="text-gray-800 font-medium">
          {user ? user.name || user.email : 'Customer'}
        </span>
      ),
    },
    {
      title: 'Booking Dates',
      key: 'dates',
      render: (_, record) => (
        <span className="text-xs text-gray-600">
          {new Date(record.startDate).toLocaleDateString()} - {new Date(record.endDate).toLocaleDateString()}
        </span>
      ),
    },
    {
      title: 'Total Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <span className="font-bold text-blue-900">${price ? price.toFixed(2) : '0.00'}</span>,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        let color = 'gold';
        if (status === 'Completed' || status === 'Active') color = 'green';
        if (status === 'Cancelled') color = 'red';
        if (status === 'Booked') color = 'blue';

        return (
          <Tag color={color} key={status}>
            {status ? status.toUpperCase() : 'BOOKED'}
          </Tag>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        record.status !== 'Cancelled' ? (
          <Popconfirm
            title="Cancel Customer Booking"
            description="Cancel this customer reservation?"
            onConfirm={() => handleCancelBooking(record._id)}
            okText="Yes, Cancel"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            <Button type="link" danger size="small">
              Cancel
            </Button>
          </Popconfirm>
        ) : (
          <span className="text-gray-400 text-xs italic">Cancelled</span>
        )
      ),
    },
  ];

  const dataSource = bookings.map((item) => ({
    key: item._id,
    _id: item._id,
    vehicle: item.vehicleId,
    user: item.userId,
    startDate: item.startDate,
    endDate: item.endDate,
    price: item.price,
    status: item.status,
  }));

  return (
    <div className='table border border-gray-200 shadow-sm rounded-lg bg-white overflow-hidden mt-6'>
      <div className='bg-white flex items-center justify-between px-6 py-4 border-b border-gray-100'>
        <h1 className='text-xl text-blue-900 font-bold'>All Customer Bookings</h1>
        <button onClick={fetchAllBookings} className='text-sm text-blue-700 hover:underline font-medium'>
          Refresh List
        </button>
      </div>
      <Table 
        columns={columns} 
        dataSource={dataSource} 
        loading={loading}
        pagination={{ pageSize: 5 }}
        locale={{ emptyText: 'No customer bookings recorded yet.' }}
      />
    </div>
  );
};

export default TableComponent;
