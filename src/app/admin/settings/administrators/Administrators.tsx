import React from 'react';
import '@/styles/page.module.css';
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

const mockdata = [
  {
    id: '1',
    firstName: 'admin1',
    lastName: 'last1',
    email: 'email@1'
  },
  {
    id: '2',
    firstName: 'admin2',
    lastName: 'last2',
    email: 'email@2'
  },
  {
    id: '3',
    firstName: 'admin3',
    lastName: 'last3',
    email: 'email@3'
  },
  {
    id: '4',
    firstName: 'admin4',
    lastName: 'last4',
    email: 'email@4'
  }
]

const Administrators: React.FC<AdministratorsProps> = ({ administrators }) => {
  return (
    <div>
      <h2>Administrators List</h2>
      {/* <AdministratorsList administrators={administrators} /> */}
      <AdministratorsList administrators={mockdata} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<AdministratorsProps> = async () => {
  // Fetch administrators from your API and pass them as props
  const administrators = await fetch('/api/administrators').then(response => response.json());
  return { props: { administrators } };
};

export default Administrators;