import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, Popconfirm, message } from 'antd';
import { rentalAPI } from '../../services/api';

const TableComponent = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserBookings();
  }, []);

  const fetchUserBookings = async () => {
    try {
      setLoading(true);
      const res = await rentalAPI.getUserBookings();
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
      message.success('Booking cancelled successfully');
      fetchUserBookings();
    } catch (err) {
      message.error(err.message || 'Failed to cancel booking');
    }
  };

  const columns = [
    {
      title: 'Car Model',
      dataIndex: 'vehicle',
      key: 'vehicle',
      render: (vehicle) => (
        <span className="font-semibold text-blue-900">
          {vehicle ? `${vehicle.brand} ${vehicle.model}` : 'Vehicle Details'}
        </span>
      ),
    },
    {
      title: 'Pickup Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Return Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price ? price.toFixed(2) : '0.00'}`,
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
            title="Cancel Booking"
            description="Are you sure you want to cancel this booking?"
            onConfirm={() => handleCancelBooking(record._id)}
            okText="Yes, Cancel"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            <Button type="link" danger size="small">
              Cancel Booking
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
    startDate: item.startDate,
    endDate: item.endDate,
    price: item.price,
    status: item.status,
  }));

  return (
    <div className='table border border-gray-200 shadow-sm rounded-lg bg-white overflow-hidden mt-6'>
      <div className='bg-white flex items-center justify-between px-6 py-4 border-b border-gray-100'>
        <h1 className='text-xl text-blue-900 font-bold'>My Reservations</h1>
        <button onClick={fetchUserBookings} className='text-sm text-blue-700 hover:underline font-medium'>
          Refresh
        </button>
      </div>
      <Table 
        columns={columns} 
        dataSource={dataSource} 
        loading={loading}
        pagination={{ pageSize: 5 }}
        locale={{ emptyText: 'No rental reservations found.' }}
      />
    </div>
  );
};

export default TableComponent;
