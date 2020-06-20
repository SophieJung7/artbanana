import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

import img1 from '../../assets/photos/5.jpeg';

class ShowPortfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      columns: 4,
    };
  }

  //   selectImage = (index, type) => {
  //     this.setState({
  //       photoIndex: index,
  //       isOpen: true,
  //     });
  //   };

  render() {
    const { columns } = this.state;

    return (
      <div>
        <section class='portfolio-section portfolio-padding pt-0 port-col zoom-gallery'>
          <div class='container'>
            <div class='isotopeContainer row'>
              <Masonry
                breakpointCols='4'
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
              >
                {/* Cut HERE */}
                <div className='isotopeSelector fashion'>
                  <div className='overlay'>
                    <div className='border-portfolio'>
                      <div
                        className='overlay-background'
                        // onClick={() => this.selectImage(index, 'fashion')}
                      >
                        <i className='fa fa-plus' aria-hidden='true'></i>
                      </div>
                      <img
                        src={img1}
                        className='img-fluid blur-up lazyload bg-img'
                      />
                    </div>
                  </div>
                </div>
                {/* Cut HERE */}
              </Masonry>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ShowPortfolio;
