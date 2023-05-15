import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import axios from 'axios';

function Homee() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/suppliers')
      .then(res => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error:', err);
        setLoading(false);
      });
  }, []);

  const handleDelete = id => {
    // Make a DELETE request to the API to delete the category with the given ID
    axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
      .then(res => {
        // Remove the deleted category from the state
        setCategories(categories.filter(category => category.id !== id));
      })
      .catch(err => {
        console.log('Error:', err);
      });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
      key: 'contactName',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure you want to delete this category?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger">Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={categories}
        columns={columns}
        loading={loading}
        rowKey="id"
      />
    </div>
  );
}

export default Home;
