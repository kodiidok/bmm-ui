// src/components/InventoryList.tsx

import React from 'react';

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stockOnHand: number;
}

interface InventoryListProps {
  inventoryItems: InventoryItem[];
}

const InventoryList: React.FC<InventoryListProps> = ({ inventoryItems }) => {
  return (
    <div>
      <h2>Inventory List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Stock On Hand</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.sku}</td>
              <td>{item.stockOnHand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;