import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Inventory from './components/Inventory';
import CameraView from './components/CameraView';
import './App.css';

function App() {
  const [showCamera, setShowCamera] = useState(false);
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    if (productName.trim() !== '') {
      setProducts([...products, { name: productName, quantity: 0 }]);
      setProductName('');
    }
  };

  const handleTakePhoto = async (camera) => {
    if (camera.current) {
      const photo = camera.current.takePhoto();
      const allProducts = products.map(product => product.name).join(', ');
      await sendImageToAPI(photo, allProducts);
    }
  };

  const sendImageToAPI = async (photoDataUrl, allProducts) => {
    try {
      const response = await fetch(photoDataUrl);
      const blob = await response.blob();
  
      const formData = new FormData();
      formData.append('products', allProducts);
      formData.append('file', blob, 'photo.jpg');
  
      const apiResponse = await fetch('http://127.0.0.1:8000/process_image/', {
        method: 'POST',
        body: formData,
      });
  
      if (!apiResponse.ok) {
        throw new Error(`HTTP error! status: ${apiResponse.status}`);
      }
  
      const data = await apiResponse.json();
      const detectedProducts = data.result.trim().split(', ');
      updateQuantities(detectedProducts);
    } catch (error) {
      console.error('Error sending image to API:', error);
    }
  };

  const updateQuantities = (detectedProducts) => {
    const updatedProducts = products.map(product => {
      if (detectedProducts.map(p => p.toLowerCase()).includes(product.name.toLowerCase())) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <h1 className="text-3xl font-bold text-center mb-4">Pantry Tracker</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
          className="border border-gray-300 p-2 rounded mr-2"
        />
        <button onClick={handleAddProduct} className="bg-[#2eb1b6] text-white px-4 py-2 rounded">+Add Product</button>
      </div>
      <h1 className="text-xl py-4">Pantry Inventory</h1>
      <Inventory products={products} />
      <CameraView showCamera={showCamera} handleTakePhoto={handleTakePhoto} setShowCamera={setShowCamera} />
      <Footer />
    </div>
  );
}

export default App;





