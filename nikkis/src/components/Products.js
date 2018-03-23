import React from 'react';
import Header from './Header';
import '../css/products.css';

class Products extends React.Component {

  render( ) {
    return (
      <div>
        <Header headline="'Cool Products Page'" subheadline="-Michael Scott" />
        <h1 className="products-headline">This is the products page!</h1>
      </div>
    );
  }
}

export default Products;
