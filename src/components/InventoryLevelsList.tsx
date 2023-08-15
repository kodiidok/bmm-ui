// src/components/InventoryLevelsList.tsx

import React from 'react';

interface InventoryLevel {
  id: string;
  quantity: number;
}

interface InventoryLevelsListProps {
  inventoryLevels: InventoryLevel[];
}

const InventoryLevelsList: React.FC<InventoryLevelsListProps> = ({ inventoryLevels }) => {
  return (
    <div>
      <h2>Inventory Levels List</h2>
      <ul>
        {inventoryLevels.map(level => (
          <li key={level.id}>{level.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryLevelsList;