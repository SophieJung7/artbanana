import React from 'react';
import Card from './Card';

const renderPlaces = () => {
  return places.map(({ continentName, cityName, price, photoSrc }) => {
    return (
      <Card
        con={continentName}
        city={cityName}
        price={price}
        photoSrc={photoSrc}
      />
    );
  });
};

const Destinations = () => {
  return (
    <div className='container'>
      <h5 className='landing-titles'>캣스냅 인기여행지</h5>
      <div className='row'>{renderPlaces()}</div>
    </div>
  );
};

const places = [
  {
    continentName: '아시아',
    cityName: '발리',
    price: '249,000원 ~',
    photoSrc:
      'https://images.unsplash.com/photo-1544091441-9cca7fbe8923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
  },
  {
    continentName: '아시아',
    cityName: '발리',
    price: '249,000원 ~',
    photoSrc:
      'https://images.unsplash.com/photo-1544091441-9cca7fbe8923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
  },
  {
    continentName: '아시아',
    cityName: '발리',
    price: '249,000원 ~',
    photoSrc:
      'https://images.unsplash.com/photo-1544091441-9cca7fbe8923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
  },
  {
    continentName: '아시아',
    cityName: '발리',
    price: '249,000원 ~',
    photoSrc:
      'https://images.unsplash.com/photo-1544091441-9cca7fbe8923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
  },
  {
    continentName: '아시아',
    cityName: '발리',
    price: '249,000원 ~',
    photoSrc:
      'https://images.unsplash.com/photo-1544091441-9cca7fbe8923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
  },
  {
    continentName: '아시아',
    cityName: '발리',
    price: '249,000원 ~',
    photoSrc:
      'https://images.unsplash.com/photo-1544091441-9cca7fbe8923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
  }
];

export default Destinations;
