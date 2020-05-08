import React from 'react';

const TitleTemp = ({ bigTitle, subTitle }) => {
  return (
    <div>
      <section
        className="blog blog-2 section-b-space ratio3_2"
        style={{ paddingBottom: '0' }}
      >
        <div className="container">
          <div className="row mt-sm-5">
            <div className="col">
              <div className="title1">
                <h4>{subTitle}</h4>
                <h2 className="title-inner1">{bigTitle}</h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TitleTemp;
