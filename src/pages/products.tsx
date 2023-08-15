// src/pages/products.tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import ProductsList from '../components/ProductsList';

interface Product {
  id: string;
  name: string;
}

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  return (
    <div>
      <h2>Products Page</h2>
      <ProductsList products={products} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductsPageProps> = async () => {
  // Fetch products data from your API
  const products = await fetch('/api/products').then(response => response.json());
  return { props: { products } };
};

export default ProductsPage;
