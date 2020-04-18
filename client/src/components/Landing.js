import React, { Component } from 'react';
import Jumbotron from './KrInterview/Jumbotron/Jumbotron';
import AboutUs from './KrInterview/AboutUs/AboutUs';
import ResumeService from './KrInterview/OurService/ResumeService';
import InterviewService from './KrInterview/OurService/InterviewService';
import Products from './KrInterview/Products/Products';
import JobEx from './KrInterview/WhyUs/JobEx';
import WhyUs from './KrInterview/WhyUs/WhyUs';
import ProList from './KrInterview/ProList/ProList';
import Review from './KrInterview/Review/Review';
class Landing extends Component {
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
          <JobEx />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="prolist">
          <ProList />
        </div>
        <div className="mb-5">
          <WhyUs />
        </div>
        <div id="resume-service">
          <ResumeService />
        </div>
        <div id="interview-service">
          <InterviewService />
        </div>
        {/* <div id="productlist">
          <Products />
        </div> */}
        <div className="my-5">
          <Review />
        </div>
      </div>
    );
  }
}

export default Landing;
