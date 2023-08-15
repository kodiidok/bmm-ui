// src/components/RolesList.tsx

import React from 'react';
import '../app/page.module.css';

interface Role {
  id: string;
  name: string;
}

interface RolesListProps {
  roles: Role[];
}

const RolesList: React.FC<RolesListProps> = ({ roles }) => {
  return (
    <div>
      <ul>
        {roles.map(role => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RolesList;
