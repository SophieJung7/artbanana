import React, { Component } from 'react';
import img1 from '../../../src/assets/photos/1.jpg';
import img2 from '../../../src/assets/photos/2.jpg';
import img3 from '../../../src/assets/photos/3.jpg';
import img4 from '../../../src/assets/photos/4.jpg';

class ShowProducts extends Component {
  render() {
    return (
      <div>
        {/*Collection section*/}
        <section className='collection section-b-space'>
          <div className='container'>
            <div className='row partition-collection'>
              <div className='col-lg-3 col-md-6'>
                <div className='collection-block'>
                  <img src={img1} className='img-fluid' alt='' />
                  <div className='collection-content'>
                    <h4>(20 products)</h4>
                    <h3>fashion</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry....
                    </p>
                    <a href='category-page.html' className='btn btn-outline'>
                      shop now !
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='collection-block'>
                  <img src={img2} className='img-fluid' alt='' />
                  <div className='collection-content'>
                    <h4>(20 products)</h4>
                    <h3>fashion</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry....
                    </p>
                    <a href='category-page.html' className='btn btn-outline'>
                      shop now !
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='collection-block'>
                  <img src={img3} className='img-fluid' alt='' />
                  <div className='collection-content'>
                    <h4>(20 products)</h4>
                    <h3>fashion</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry....
                    </p>
                    <a href='category-page.html' className='btn btn-outline'>
                      shop now !
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='collection-block'>
                  <img src={img4} className='img-fluid' alt='' />
                  <div className='collection-content'>
                    <h4>(20 products)</h4>
                    <h3>fashion</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry....
                    </p>
                    <a href='category-page.html' className='btn btn-outline'>
                      shop now !
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ShowProducts;
