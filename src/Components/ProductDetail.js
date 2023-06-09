import React from 'react';

const ProductDetail = ({ product, onAddToCart }) => {
  const { image, price, name } = product;

  return (
    <div className="product-detail">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

