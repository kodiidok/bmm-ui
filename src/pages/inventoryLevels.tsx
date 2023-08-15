// src/pages/inventoryLevels.tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import InventoryLevelsList from '../components/InventoryLevelsList';

interface InventoryLevel {
  id: string;
  quantity: number;
}

interface InventoryLevelsPageProps {
  inventoryLevels: InventoryLevel[];
}

const InventoryLevelsPage: React.FC<InventoryLevelsPageProps> = ({ inventoryLevels }) => {
  return (
    <div>
      <h2>Inventory Levels Page</h2>
      <InventoryLevelsList inventoryLevels={inventoryLevels} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<InventoryLevelsPageProps> = async () => {
  // Fetch inventory levels data from your API
  const inventoryLevels = await fetch('/api/inventory-levels').then(response => response.json());
  return { props: { inventoryLevels } };
};

export default InventoryLevelsPage;