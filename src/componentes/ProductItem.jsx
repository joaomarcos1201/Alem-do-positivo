import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.imgSrc} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Categoria:</strong> {product.category}</p>
      <button className="adopt-btn">Quero Receber</button>
    </div>
  );
}

export default ProductItem;
