'use client';

import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ACTIVE_CUSTOMER } from '@/gql/query';
import client from '../../../graphql-client/graphql-shop-client';

interface Props {
  children: any;
}

interface ContextProps {
  activeCustomer: any;
  setActiveCustomer: Dispatch<SetStateAction<any>>
}

// Create a context
const ActiveCustomerContext = createContext<ContextProps>({
  activeCustomer: null,
  setActiveCustomer: (): any => null,
});

// Create a custom hook to use the active customer context
export const useActiveCustomer = () => {
  const context = useContext(ActiveCustomerContext);
  if (!context) {
    throw new Error('useActiveCustomer must be used within an ActiveCustomerProvider');
  }
  return context;
};

// Create the provider component
export const ActiveCustomerProvider = ({ children }: Props) => {
  const [activeCustomer, setActiveCustomer] = useState<any>(null);

  const { loading, error, data } = useQuery(ACTIVE_CUSTOMER, { client });

  useEffect(() => {
    if (data?.activeCustomer) {
      const customer = data.activeCustomer;
      setActiveCustomer(customer);
    }
  }, [data]);

  useEffect(() => {
    console.log(activeCustomer);
  }, [activeCustomer]);

  return (
    <ActiveCustomerContext.Provider value={{activeCustomer, setActiveCustomer}}>
      {children}
    </ActiveCustomerContext.Provider>
  );
};
