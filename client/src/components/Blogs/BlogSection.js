import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    dates: '2020년 3월 15일',
    title: '런던 촬영스토리',
    writer: '에밀리',
    photoSrc: '/images/photographer.jpg',
    link: '/blog/4569'
  },
  {
    dates: '2020년 3월 10일',
    title: '허니문 스냅의 모든 것',
    writer: '에밀리',
    photoSrc: '/images/photographer.jpg',
    link: '/blog/4569'
  },
  {
    dates: '2020년 3월 3일',
    title: '우리가족 In 몰디브',
    writer: '에밀리',
    photoSrc: '/images/family.jpg',
    link: '/blog/4569'
  }
];

class BlogSection extends Component {
  renderBlogs() {
    return blogs.map(({ title, dates, writer, photoSrc, link }) => {
      return (
        <div className='col-sm-4' style={{ display: 'inline-block' }}>
          <Link to={link}>
            <div className='classic-effect'>
              <img src={photoSrc} className='img-fluid' alt='' />
              <span></span>
            </div>
          </Link>
          <div className='blog-details'>
            <h4>{dates}</h4>
            <Link to={link}>
              <p>{title}</p>
            </Link>
            <hr className='style1' />
            <h6 style={{ paddingLeft: '0' }}>{`작성자: ${writer}`}</h6>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div>{this.renderBlogs()}</div>
        </div>
      </div>
    );
  }
}

export default BlogSection;
