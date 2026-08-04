import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, Modal, Form, Input, InputNumber, Select, Popconfirm, message } from 'antd';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { vehicleAPI } from '../../services/api';

const { Option } = Select;

const VehicleManagementTable = ({ onVehicleUpdate }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const res = await vehicleAPI.getAllCars();
      setVehicles(res.cars || []);
      if (onVehicleUpdate) onVehicleUpdate();
    } catch (err) {
      message.error(err.message || 'Failed to load vehicles');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAddModal = () => {
    setEditingVehicle(null);
    form.resetFields();
    setModalOpen(true);
  };

  const handleOpenEditModal = (vehicle) => {
    setEditingVehicle(vehicle);
    form.setFieldsValue({
      brand: vehicle.brand,
      model: vehicle.model,
      description: vehicle.description,
      category: vehicle.category,
      fuelType: vehicle.fuelType,
      transmission: vehicle.transmission,
      seats: vehicle.seats,
      pricePerDay: vehicle.pricePerDay,
      mileage: vehicle.mileage,
      color: vehicle.color,
      licensePlate: vehicle.licensePlate,
      status: vehicle.status,
      image: vehicle.image,
    });
    setModalOpen(true);
  };

  const handleDeleteVehicle = async (id) => {
    try {
      await vehicleAPI.deleteCar(id);
      message.success('Vehicle deleted successfully');
      fetchVehicles();
    } catch (err) {
      message.error(err.message || 'Failed to delete vehicle');
    }
  };

  const handleFormSubmit = async (values) => {
    try {
      setSubmitLoading(true);
      if (editingVehicle) {
        await vehicleAPI.updateCar(editingVehicle._id, values);
        message.success('Vehicle updated successfully');
      } else {
        await vehicleAPI.createCar(values);
        message.success('New vehicle added successfully');
      }
      setModalOpen(false);
      form.resetFields();
      fetchVehicles();
    } catch (err) {
      message.error(err.message || 'Operation failed');
    } finally {
      setSubmitLoading(false);
    }
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (img) => (
        <img 
          src={img || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"} 
          alt="car" 
          className="w-12 h-8 object-cover rounded" 
        />
      ),
    },
    {
      title: 'Vehicle',
      key: 'name',
      render: (_, record) => (
        <div>
          <span className="font-bold text-blue-900 block">{record.brand} {record.model}</span>
          <span className="text-xs text-gray-500">{record.licensePlate || 'No License'}</span>
        </div>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (cat) => <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded">{cat}</span>,
    },
    {
      title: 'Specs',
      key: 'specs',
      render: (_, record) => (
        <span className="text-xs text-gray-600">
          {record.fuelType} • {record.transmission} • {record.seats} seats
        </span>
      ),
    },
    {
      title: 'Price/Day',
      dataIndex: 'pricePerDay',
      key: 'pricePerDay',
      render: (price) => <span className="font-bold text-blue-900">${price}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'green';
        if (status === 'Rented') color = 'blue';
        if (status === 'Maintenance') color = 'orange';
        return <Tag color={color}>{status ? status.toUpperCase() : 'AVAILABLE'}</Tag>;
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Button 
            type="text" 
            icon={<Edit size={16} className="text-blue-600" />} 
            onClick={() => handleOpenEditModal(record)} 
          />
          <Popconfirm
            title="Delete Vehicle"
            description="Are you sure you want to remove this vehicle from fleet?"
            onConfirm={() => handleDeleteVehicle(record._id)}
            okText="Yes, Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <Button 
              type="text" 
              danger 
              icon={<Trash2 size={16} />} 
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="border border-gray-200 shadow-sm rounded-lg bg-white overflow-hidden mt-6">
      <div className="bg-white flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div>
          <h1 className="text-xl text-blue-900 font-bold">Fleet Management</h1>
          <p className="text-xs text-gray-500">Add, edit, or remove vehicles from the rental system</p>
        </div>
        <Button 
          type="primary" 
          icon={<Plus size={16} />} 
          onClick={handleOpenAddModal}
          className="bg-blue-900 hover:bg-blue-800"
        >
          Add New Vehicle
        </Button>
      </div>

      <Table 
        columns={columns} 
        dataSource={vehicles.map(v => ({ ...v, key: v._id }))} 
        loading={loading}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingVehicle ? "Edit Vehicle Details" : "Add New Vehicle to Fleet"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          initialValues={{
            category: "Sedan",
            fuelType: "Petrol",
            transmission: "Automatic",
            seats: 5,
            status: "Available",
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Brand" name="brand" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="e.g. Tesla, BMW" />
            </Form.Item>

            <Form.Item label="Model" name="model" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="e.g. Model 3, X5" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Form.Item label="Category" name="category" rules={[{ required: true }]}>
              <Select>
                <Option value="Sedan">Sedan</Option>
                <Option value="SUV">SUV</Option>
                <Option value="Hatchback">Hatchback</Option>
                <Option value="Coupe">Coupe</Option>
                <Option value="Convertible">Convertible</Option>
                <Option value="Pickup">Pickup</Option>
                <Option value="Van">Van</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Fuel Type" name="fuelType" rules={[{ required: true }]}>
              <Select>
                <Option value="Petrol">Petrol</Option>
                <Option value="Diesel">Diesel</Option>
                <Option value="Electric">Electric</Option>
                <Option value="Hybrid">Hybrid</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Transmission" name="transmission" rules={[{ required: true }]}>
              <Select>
                <Option value="Automatic">Automatic</Option>
                <Option value="Manual">Manual</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Form.Item label="Price ($/day)" name="pricePerDay" rules={[{ required: true }]}>
              <InputNumber min={1} className="w-full" />
            </Form.Item>

            <Form.Item label="Seats" name="seats" rules={[{ required: true }]}>
              <InputNumber min={1} max={20} className="w-full" />
            </Form.Item>

            <Form.Item label="Status" name="status">
              <Select>
                <Option value="Available">Available</Option>
                <Option value="Rented">Rented</Option>
                <Option value="Maintenance">Maintenance</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Form.Item label="License Plate" name="licensePlate">
              <Input placeholder="e.g. LUXE-101" />
            </Form.Item>

            <Form.Item label="Mileage (mi)" name="mileage">
              <InputNumber min={0} className="w-full" />
            </Form.Item>

            <Form.Item label="Color" name="color">
              <Input placeholder="e.g. Black" />
            </Form.Item>
          </div>

          <Form.Item label="Image URL" name="image">
            <Input placeholder="https://images.unsplash.com/..." />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea rows={3} placeholder="Vehicle highlights and specifications..." />
          </Form.Item>

          <div className="flex justify-end gap-3 mt-4">
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit" loading={submitLoading} className="bg-blue-900">
              {editingVehicle ? "Update Vehicle" : "Add Vehicle"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default VehicleManagementTable;
