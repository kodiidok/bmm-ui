import React from 'react';
import '../app/page.module.css';
import { GetServerSideProps } from 'next';
import RolesList from './RolesList';

interface Role {
  id: string;
  name: string;
}

interface RolesPageProps {
  roles: Role[];
}

const RolesPage: React.FC<RolesPageProps> = ({ roles }) => {
  return (
    <div>
      <h2>Roles List</h2>
      <RolesList roles={roles} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<RolesPageProps> = async () => {
  // Fetch roles from your API and pass them as props
  const roles = await fetch('/api/roles').then(response => response.json());
  return { props: { roles } };
};

export default RolesPage;
