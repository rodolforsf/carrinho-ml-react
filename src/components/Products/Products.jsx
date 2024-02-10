import React, { useState, useEffect } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProdutcts';

function Products() {

  const [products, setProducts] = useState([]);

  console.log(products);
  console.log(setProducts);
  useEffect(() => {
    fetchProducts('iphone');
  }, []);

  return(
    <section className="products container">
      teste
    </section>
  );
}

export default Products;
