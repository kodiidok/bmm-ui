// src/pages/stockLocations.tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import StockLocationsList from '../components/StockLocationsList';

interface StockLocation {
  id: string;
  name: string;
}

interface StockLocationsPageProps {
  stockLocations: StockLocation[];
}

const StockLocationsPage: React.FC<StockLocationsPageProps> = ({ stockLocations }) => {
  return (
    <div>
      <h2>Stock Locations Page</h2>
      <StockLocationsList stockLocations={stockLocations} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<StockLocationsPageProps> = async () => {
  // Fetch stock locations data from your API
  const stockLocations = await fetch('/api/stock-locations').then(response => response.json());
  return { props: { stockLocations } };
};

export default StockLocationsPage;