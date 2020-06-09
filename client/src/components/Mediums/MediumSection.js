import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const mediums = [
  {
    english: 'Colored Pencil Drawing',
    medium: '색연필/마커드로잉',
    price: '125,000원 ~',
    photoSrc: '/images/mediums/colorpen.jpg',
    link: '/sorry/pencil',
  },
  {
    english: 'Pencil Drawing',
    medium: '연필드로잉',
    price: '95,000원 ~',
    photoSrc: '/images/mediums/pencil.jpg',
    link: '/sorry/pencil',
  },
  {
    english: 'Watercolor Painting',
    medium: '수채화페인팅',
    price: '155,000원 ~',
    photoSrc: '/images/mediums/water_color.jpg',
    link: '/sorry/pencil',
  },
  {
    english: 'Acrylic Painting',
    medium: '아크릴/유화페인팅',
    price: '355,000원 ~',
    photoSrc: '/images/mediums/acryl.jpg',
    link: '/sorry/pencil',
  },
  {
    english: 'Pastel Painting',
    medium: '파스텔페인팅',
    price: '155,000원 ~',
    photoSrc: '/images/mediums/pastel.jpg',
    link: '/sorry/pencil',
  },
  {
    english: 'Mixed Medium',
    medium: '혼합페인팅',
    price: '255,000원 ~',
    photoSrc: '/images/mediums/mixed.jpg',
    link: '/sorry/pencil',
  },
];

class MediumSection extends Component {
  renderMediums() {
    return mediums.map(({ english, medium, price, photoSrc, link }) => {
      return (
        <div
          key={english}
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
            <h4>{english}</h4>
            <Link to={link}>
              <p>{medium}</p>
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
          <div>{this.renderMediums()}</div>
        </div>
      </div>
    );
  }
}

export default MediumSection;
