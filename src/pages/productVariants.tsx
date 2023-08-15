// src/pages/productVariants.tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import ProductVariantsList from '../components/ProductVariantsList';

interface ProductVariant {
  id: string;
  name: string;
  sku: string;
}

interface ProductVariantsPageProps {
  variants: ProductVariant[];
}

const ProductVariantsPage: React.FC<ProductVariantsPageProps> = ({ variants }) => {
  return (
    <div>
      <h2>Product Variants Page</h2>
      <ProductVariantsList variants={variants} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductVariantsPageProps> = async () => {
  // Fetch product variants data from your API
  const variants = await fetch('/api/product-variants').then(response => response.json());
  return { props: { variants } };
};

export default ProductVariantsPage;
