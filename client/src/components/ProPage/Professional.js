import React, { Component } from 'react';
import Introduction from './Introduction';
import Resume from './Resume';
import ProductList from './ProductList';
import OurService from '../OurService/OurService';
const pros = require('../ProList/professionals');

class Professional extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const id = this.props.match.params.id;
    const {
      name,
      photoName,
      reviewScore,
      numberOfReviews,
      introduction,
      experiences,
      educations,
      skills,
      reviews,
    } = pros[id];

    return (
      <section className="py-5">
        <div className="container">
          <Introduction
            name={name}
            photoName={photoName}
            reviewScore={reviewScore}
            numberOfReviews={numberOfReviews}
            introduction={introduction}
          />
          <Resume
            experiences={experiences}
            educations={educations}
            skills={skills}
            reviews={reviews}
            reviewScore={reviewScore}
            numberOfReviews={numberOfReviews}
          />
          <hr className="my-4" />
          <div id="product">
            <ProductList />
          </div>
          <div className="mb-5">
            <OurService />
          </div>
        </div>
      </section>
    );
  }
}

export default Professional;
