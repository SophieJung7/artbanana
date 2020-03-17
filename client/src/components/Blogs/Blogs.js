import React from 'react';
import BlogSection from './BlogSection';

const Blogs = () => {
  return (
    <section className='blog blog-2 section-b-space ratio3_2'>
      <div className='container '>
        <div className='row'>
          <div className='col'>
            <div className='title1'>
              <h4>CatSnap Storys</h4>
              <h2 className='title-inner1'>금주의 캣스냅스토리</h2>
              <hr role='tournament6' />
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
    </section>
  );
};

export default Blogs;
