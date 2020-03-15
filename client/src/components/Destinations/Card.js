import React from 'react';

const Card = ({ con, city, price, photoSrc }) => {
  return (
    <div className='col-sm-4 mb-5'>
      <div className='card'>
        <img src={photoSrc} className='card-img-top' alt='...' />
        <div className='card-body'>
          <p>{con}</p>
          <h3>{city}</h3>
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
