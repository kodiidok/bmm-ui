// src/components/Inventory.tsx
import React from 'react';

const Inventory: React.FC = () => {
  const products = [
    { id: 1, image: 'image1.jpg', name: 'Product 1', slug: 'product-1', enabled: true, variants: 1 },
    // Add more product data here
  ];

  return (
    <div>
      <h2>Inventory</h2>
      <div style={{ display: 'flex' }} className="sections">
        <div className="section">Products</div>
        <div className="section">Product variants</div>
        <div className="section">Stock locations</div>
      </div>
      <button style={{ float: 'right', background: 'blue', color: 'white' }} className="new-product-button">
        + New Product
      </button>
      <button style={{ float: 'right', background: 'lightgray' }} className="refresh-button">
        Refresh
      </button>
      <div className="table">
        <div className="table-header">
          <input type="checkbox" className="select-all" />
          <span>IMAGE</span>
          <span>NAME</span>
          <span>SLUG</span>
          <span>ENABLED</span>
          <span># VARIANTS</span>
        </div>
        <div className="table-rows">
          {products.map(product => (
            <div className="table-row" key={product.id}>
              <input type="checkbox" />
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
              <span>{product.slug}</span>
              <span className={product.enabled ? 'green-box' : 'red-box'}>
                {product.enabled ? 'Enabled' : 'Disabled'}
              </span>
              <span>{product.variants} variant{product.variants > 1 ? 's' : ''}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;