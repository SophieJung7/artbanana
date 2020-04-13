import React, { Component } from 'react';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import sophie from '../../assets/photos/sophie.jpg';

class Introduction extends Component {
  render() {
    const { name, photoName, introduction } = this.props;

    return (
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="mb-0">
            <div className="avatar avatar-xl mb-3">
              <img
                className="avatar-img rounded-circle"
                src={`/images/pros/${photoName}.jpg`}
                alt="Sophie"
              />
            </div>
            <h2>{name}</h2>
            <div className="text-secondary">면접전문가</div>
            <div
              style={{ color: '#ffce03', fontSize: '1.5rem' }}
              className="mb-2 text-left d-inline"
            >
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
            </div>
            <div className="d-inline ml-1">(평점 4.8, 리뷰수 22)</div>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="card mb-4">
          <div className="card-body p-0">
            <div className="d-flex justify-content-center row no-gutters">
              <div className="col-lg-10 pt-5 px-5">
                <h5 className="text dark" style={{ fontSize: '1.3rem' }}>
                  {introduction}
                </h5>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-5">
              <a
                href="#product"
                className="btn btn-solid mt-5"
                style={{
                  fontSize: '1.2rem',
                  border: 'none',
                  backgroundImage:
                    'linear-gradient(50deg, #ff73ca 50%, transparent 50%)',
                }}
              >
                선생님 예약하기
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
