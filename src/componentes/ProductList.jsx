import React from 'react';
import ProductItem from './ProductItem';

const products = [
  {
    id: 1,
    name: 'Roupinha de Bebê',
    description: 'Conjunto de roupas para bebê, em bom estado. Ideal para recém-nascidos.',
    category: 'Roupas',
    imgSrc: 'img/roupa-bebe.jpg',
  },
  {
    id: 2,
    name: 'Brinquedo de Bebê',
    description: 'Brinquedo educativo, em excelente estado.',
    category: 'Brinquedos',
    imgSrc: 'img/brinquedo.jpg',
  },
  {
    id: 3,
    name: 'Alimentos',
    description: 'Alimentos não perecíveis para gestantes.',
    category: 'Alimentos',
    imgSrc: 'img/alimento.jpg',
  }
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
