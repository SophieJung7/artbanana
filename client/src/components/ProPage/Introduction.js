import React, { Component } from 'react';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import sophie from '../../assets/photos/sophie.jpg';

class Introduction extends Component {
  render() {
    return (
      <div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='mb-0'>
            <div className='avatar avatar-xl mb-3'>
              <img className='avatar-img rounded-circle' src={sophie} />
            </div>
            <h2>소피 정(Sophie Jung)</h2>
            <div className='text-secondary'>면접전문가</div>
            <div
              style={{ color: '#ffce03', fontSize: '1.5rem' }}
              className='mb-2 text-left d-inline'
            >
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
            </div>
            <div className='d-inline ml-1'>(평점 4.8, 리뷰수 22)</div>
          </div>
        </div>
        <hr className='mb-4' />
        <div className='card mb-4'>
          <div className='card-body p-0'>
            <div className='d-flex justify-content-center row no-gutters'>
              <div className='col-lg-10 pt-5'>
                <h5 className='text dark' style={{ fontSize: '1.3rem' }}>
                  "저도 당연히 여러분과 같은 취준생이었습니다. 스펙이 화려하지
                  않았기 때문에 1년간을 눈물흘리며 공부했었고요. 하지만 직접
                  실무를 해보고 깨달았습니다. 면접에 그렇게 많은 시간낭비를 할
                  필요는 없다는 것입니다. 1개월 내에 면접의 달인이 되봅시다!"
                </h5>
              </div>
            </div>
            <div className='d-flex justify-content-center mb-5'>
              <a
                href='#product'
                className='btn btn-solid mt-5'
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
