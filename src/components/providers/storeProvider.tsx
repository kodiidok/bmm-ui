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
  activeOrder: any;
  setActiveCustomer: Dispatch<SetStateAction<any>>;
  setActiveOrder: Dispatch<SetStateAction<any>>;
}

// Context
const StoreContext = createContext<ContextProps>({
  activeCustomer: null,
  activeOrder: null,
  setActiveCustomer: (): any => null,
  setActiveOrder: (): any => null,
});

// Custom hook to use
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within an StoreProvider');
  }
  return context;
};

// Provider component
export const StoreProvider = ({ children }: Props) => {
  const [activeCustomer, setActiveCustomer] = useState<any>(null);
  const [activeOrder, setActiveOrder] = useState<any>(null);

  const activeCustomerData = useQuery(ACTIVE_CUSTOMER, { client });
  const activeorderData = useQuery(ACTIVE_CUSTOMER, { client });

  useEffect(() => {
    if (activeCustomerData.data?.activeCustomer) {
      const customer = activeCustomerData.data.activeCustomer;
      setActiveCustomer(customer);
    }
  }, [activeCustomerData.data]);

  useEffect(() => {
    console.log(activeCustomer);
  }, [activeCustomer]);

  useEffect(() => {
    if (activeorderData.data?.activeCustomer) {
      const order = activeorderData.data.activeOrder;
      setActiveOrder(order);
    }
  }, [activeorderData.data]);

  useEffect(() => {
    console.log(activeOrder);
  }, [activeOrder]);

  return (
    <StoreContext.Provider value={{ activeCustomer, activeOrder, setActiveCustomer, setActiveOrder }}>
      {children}
    </StoreContext.Provider>
  );
};
