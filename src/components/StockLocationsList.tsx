// src/components/StockLocationsList.tsx

import React from 'react';

interface StockLocation {
  id: string;
  name: string;
}

interface StockLocationsListProps {
  stockLocations: StockLocation[];
}

const StockLocationsList: React.FC<StockLocationsListProps> = ({ stockLocations }) => {
  return (
    <div>
      <h2>Stock Locations List</h2>
      <ul>
        {stockLocations.map(location => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockLocationsList;