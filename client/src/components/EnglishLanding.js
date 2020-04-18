import React, { Component } from 'react';
import Jumbotron from './EnglishInterview/Jumbotron/Jumbotron';
import AboutUs from './EnglishInterview/AboutUs/AboutUs';
import OurService from './EnglishInterview/OurService/OurService';
import WhyUs from './EnglishInterview/WhyUs/WhyUs';
import ProList from './EnglishInterview/ProList/ProList';

class EnglishLanding extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <Jumbotron style={{ position: 'absolute' }} />
        </div>
        <div>
          <AboutUs />
        </div>
        <div id="our-service">
          <OurService />
        </div>
        <div className="d-flex justify-content-center mt-sm-5">
          <a
            href="#prolist"
            to="/"
            className="btn btn-solid mt-sm-5"
            style={{
              fontSize: '1.2rem',
              border: 'none',
              backgroundImage:
                'linear-gradient(50deg, #ff73ca 50%, transparent 50%)',
            }}
          >
            영어면접 전문가 살펴보기
          </a>
        </div>
        <div id="prolist">
          <ProList />
        </div>
        <div className="mb-5 pb-5">
          <WhyUs />
        </div>
      </div>
    );
  }
}

export default EnglishLanding;
