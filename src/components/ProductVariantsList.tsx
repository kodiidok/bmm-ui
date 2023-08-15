// src/components/ProductVariantsList.tsx

import React from 'react';

interface ProductVariant {
  id: string;
  name: string;
  sku: string;
}

interface ProductVariantsListProps {
  variants: ProductVariant[];
}

const ProductVariantsList: React.FC<ProductVariantsListProps> = ({ variants }) => {
  return (
    <div>
      <h2>Product Variants List</h2>
      <ul>
        {variants.map(variant => (
          <li key={variant.id}>{variant.name} - {variant.sku}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductVariantsList;
