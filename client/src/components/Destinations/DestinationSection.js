import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const places = [
  {
    continentName: '아시아',
    cityName: '발리',
    price: '182,000원 ~',
    photoSrc: '/images/destinations/bali.jpg',
    link: '/sorry/bali',
  },
  {
    continentName: '아시아',
    cityName: '방콕',
    price: '152,000원 ~',
    photoSrc: '/images/destinations/bangkok.jpg',
    link: '/sorry/bangkok',
  },
  {
    continentName: '유럽',
    cityName: '베른',
    price: '365,000원 ~',
    photoSrc: '/images/destinations/bern.jpg',
    link: '/sorry/bern',
  },
  {
    continentName: '남아메리카',
    cityName: '칸쿤',
    price: '198,000원 ~',
    photoSrc: '/images/destinations/cancun.jpg',
    link: '/sorry/cancun',
  },
  {
    continentName: '유럽',
    cityName: '런던',
    price: '352,000원 ~',
    photoSrc: '/images/destinations/london.jpg',
    link: '/sorry/london',
  },
  {
    continentName: '남아시아',
    cityName: '몰디브',
    price: '252,000원 ~',
    photoSrc: '/images/destinations/maldives.jpg',
    link: '/sorry/maldives',
  },
];

class DestinationSection extends Component {
  renderPlaces() {
    return places.map(({ continentName, cityName, price, photoSrc, link }) => {
      return (
        <div
          key={cityName}
          className="col-sm-4"
          style={{ display: 'inline-block' }}
        >
          <Link to={link}>
            <div className="classic-effect">
              <img src={photoSrc} className="img-fluid" alt="" />
              <span />
            </div>
          </Link>
          <div className="blog-details">
            <h4>{continentName}</h4>
            <Link to={link}>
              <p>{cityName}</p>
            </Link>
            <hr className="style1" />
            <h6>{price}</h6>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>{this.renderPlaces()}</div>
        </div>
      </div>
    );
  }
}

export default DestinationSection;
