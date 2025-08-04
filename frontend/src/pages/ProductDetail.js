import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Product Details</h1>
      <div className="card p-6">
        <p className="text-center text-gray-600 mb-4">
          Product detail page for ID: {id}
        </p>
        <p className="text-center">
          Product details, images, and purchase option.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail; 