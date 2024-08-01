import React from 'react';

const Inventory = ({ products }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-700">Product Name</th>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-700">Quantity</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">{product.name}</td>
                <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
