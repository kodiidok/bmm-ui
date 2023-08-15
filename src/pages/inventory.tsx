// src/pages/inventory.tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import InventoryList from '../components/InventoryList';

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stockOnHand: number;
}

interface InventoryPageProps {
  inventoryItems: InventoryItem[];
}

const InventoryPage: React.FC<InventoryPageProps> = ({ inventoryItems }) => {
  return (
    <div>
      <InventoryList inventoryItems={inventoryItems} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<InventoryPageProps> = async () => {
  // Fetch inventory items from your API and pass them as props
  const inventoryItems = await fetch('/api/inventory').then(response => response.json());
  return { props: { inventoryItems } };
};

export default InventoryPage;