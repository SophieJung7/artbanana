import React, { Component } from 'react';
import Introduction from './Introduction';
import Resume from './Resume';
import ProductList from './ProductList';
import OurService from '../OurService/OurService';

class Professional extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section class='py-5'>
        <div class='container'>
          <Introduction />
          <Resume />
          <hr class='my-4' />
          <div id='product'>
            <ProductList />
          </div>
          <div className='mb-5'>
            <OurService />
          </div>
        </div>
      </section>
    );
  }
}

export default Professional;
