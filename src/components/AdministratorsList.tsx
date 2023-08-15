// src/components/AdministratorsList.tsx

import React from 'react';
import '../app/page.module.css';

interface Administrator {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AdministratorsListProps {
  administrators: Administrator[];
}

const AdministratorsList: React.FC<AdministratorsListProps> = ({ administrators }) => {
  return (
    <div>
      <ul>
        {administrators.map(administrator => (
          <li key={administrator.id}>
            {administrator.firstName} {administrator.lastName} - {administrator.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdministratorsList;