import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams();

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Order Details</h1>
      <div className="card p-6">
        <p className="text-center text-gray-600 mb-4">
          Order details for ID: {id}
        </p>
        <p className="text-center">
          Order information, items, and tracking.
        </p>
      </div>
    </div>
  );
};

export default OrderDetail; 