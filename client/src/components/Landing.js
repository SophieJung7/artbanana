import React, { Component } from 'react';
import Jumbotron from './KrInterview/Jumbotron/Jumbotron';
import Jumbotron2 from './KrInterview/Jumbotron/Jumbotron2';
import AboutUs from './KrInterview/AboutUs/AboutUs';
import Products from './KrInterview/Products/Products';
import JobEx from './KrInterview/WhyUs/JobEx';
import WhyUs from './KrInterview/WhyUs/WhyUs';
import ProList from './KrInterview/ProList/ProList';
import Review from './KrInterview/Review/Review';
// import MessengerChatbot from './MessengerChatbot/MessengerChatbot';
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
        <div style={{ position: 'relative' }}>
          <Jumbotron2 style={{ position: 'absolute' }} />
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
        {/* <div id="resume-service">
          <ResumeService />
        </div>
        <div id="interview-service">
          <InterviewService />
        </div> */}
        {/* <div id="productlist">
          <Products />
        </div> */}
        <div className="my-5">
          <Review />
        </div>
        {/* <MessengerChatbot /> */}
      </div>
    );
  }
}

export default Landing;
