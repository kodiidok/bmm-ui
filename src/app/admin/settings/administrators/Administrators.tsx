import React from 'react';
import '../app/page.module.css';
import { GetServerSideProps } from 'next';
import AdministratorsList from './AdministratorsList';

interface Administrator {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AdministratorsProps {
  administrators: Administrator[];
}

const Administrators: React.FC<AdministratorsProps> = ({ administrators }) => {
  return (
    <div>
      <h2>Administrators List</h2>
      <AdministratorsList administrators={administrators} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<AdministratorsProps> = async () => {
  // Fetch administrators from your API and pass them as props
  const administrators = await fetch('/api/administrators').then(response => response.json());
  return { props: { administrators } };
};

export default Administrators;