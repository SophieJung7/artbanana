import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/photos/5.jpeg';
import img2 from '../../assets/photos/6.jpeg';
import img3 from '../../assets/photos/7.jpg';
import img4 from '../../assets/photos/8.jpeg';
import img5 from '../../assets/photos/9.jpg';
import img6 from '../../assets/photos/10.jpg';
import img7 from '../../assets/photos/11.jpg';
import img8 from '../../assets/photos/12.jpg';

class ShowPortfolio extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='section-t-space portfolio-section portfolio-padding metro-section port-col'>
              <div className='isotopeContainer row'>
                {/* Cut here */}
                <div
                  className='col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector'
                  // key={index}
                >
                  <div className='product-box'>
                    <div className='img-wrapper'>
                      <div className='front'>
                        <Link to='/'>
                          <img src={img1} className='img-fluid' alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cut here */}
                {/* Cut here */}
                <div
                  className='col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector'
                  // key={index}
                >
                  <div className='product-box'>
                    <div className='img-wrapper'>
                      <div className='front'>
                        <Link to='/'>
                          <img src={img2} className='img-fluid' alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cut here */}
                {/* Cut here */}
                <div
                  className='col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector'
                  // key={index}
                >
                  <div className='product-box'>
                    <div className='img-wrapper'>
                      <div className='front'>
                        <Link to='/'>
                          <img src={img3} className='img-fluid' alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cut here */}
                {/* Cut here */}
                <div
                  className='col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector'
                  // key={index}
                >
                  <div className='product-box'>
                    <div className='img-wrapper'>
                      <div className='front'>
                        <Link to='/'>
                          <img src={img4} className='img-fluid' alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cut here */}
                {/* Cut here */}
                <div
                  className='col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector'
                  // key={index}
                >
                  <div className='product-box'>
                    <div className='img-wrapper'>
                      <div className='front'>
                        <Link to='/'>
                          <img src={img5} className='img-fluid' alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cut here */}
                {/* Cut here */}
                <div
                  className='col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector'
                  // key={index}
                >
                  <div className='product-box'>
                    <div className='img-wrapper'>
                      <div className='front'>
                        <Link to='/'>
                          <img src={img6} className='img-fluid' alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cut here */}
                {/* Cut here */}
                <div
                  className='col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector'
                  // key={index}
                >
                  <div className='product-box'>
                    <div className='img-wrapper'>
                      <div className='front'>
                        <Link to='/'>
                          <img src={img7} className='img-fluid' alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cut here */}
                {/* Cut here */}
                <div
                  className='col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector'
                  // key={index}
                >
                  <div className='product-box'>
                    <div className='img-wrapper'>
                      <div className='front'>
                        <Link to='/'>
                          <img src={img8} className='img-fluid' alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cut here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPortfolio;
