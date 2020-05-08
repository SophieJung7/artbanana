import React from 'react';
import Slider from 'react-slick';
import { IoIosStar, IoIosHeart } from 'react-icons/io';
import reviewContents from './reviewContents';

const CarouselSection = () => {
  return (
    <section className="p-0 small-slider">
      <Slider className="slide-1 home-slider">{renderContents()}</Slider>
    </section>
  );
};

const renderContents = () => {
  return reviewContents.map(
    (
      { review, clientName, dates, place, photographer, photo, fontColor },
      index
    ) => {
      return (
        <div key={index}>
          <div className={`home ${photo} text-left p-left`}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div className="photo-section">
                      <div
                        style={{ color: '#ffce03', fontSize: '1.5rem' }}
                        className="mb-2 text-center"
                      >
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                      </div>

                      <p className={`text-center ${fontColor}`}>{review}</p>
                      <div className="text-right">
                        <h5
                          className={`d-inline ${fontColor}`}
                          style={{ fontSize: '1.5rem' }}
                        >
                          {clientName}
                        </h5>
                        <IoIosHeart
                          className="d-inline"
                          style={{
                            fontSize: '2rem',
                            paddingBottom: '0.5rem',
                            color: '#ffce03',
                          }}
                        />
                      </div>
                      <p
                        className={`text-right ${fontColor}`}
                        style={{ marginBottom: '0.5rem' }}
                      >
                        {`${dates} In ${place}`}
                      </p>
                      <p className={`text-right ${fontColor}`}>
                        {`By 사진작가 ${photographer}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
};

export default CarouselSection;
