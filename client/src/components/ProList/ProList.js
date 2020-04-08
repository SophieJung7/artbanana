import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamation } from 'react-icons/fa';
import Sophie from '../../assets/photos/sophie.jpg';
import Chris from '../../assets/photos/chris.jpg';
import Paul from '../../assets/photos/paul.jpg';
import Jong from '../../assets/photos/jong.jpg';

const professionals = require('./professionals');

const renderPros = () => {
  return professionals.map(
    ({ name, photoName, job, specialty, ex1, ex2, ex3, ex4 }) => {
      return (
        <div className='col-3'>
          <div className='category-wrapper px-3'>
            <div>
              <img
                src={require(`../../assets/photos/${photoName}.jpg`)}
                className='img-fluid blur-up lazyload bg-img'
                alt=''
              />
            </div>

            <h4>{name}</h4>
            <h4
              style={{
                padding: '0',
                lineHeight: '1.3',
                textAlign: 'left',
              }}
            >
              직무 >>
            </h4>
            <p
              style={{
                lineHeight: '1.5',
                fontSize: '0.95rem',
                textAlign: 'left',
              }}
            >
              {job}
            </p>
            <h4
              className='mt-3'
              style={{
                padding: '0',
                lineHeight: '1.3',
                textAlign: 'left',
              }}
            >
              전문분야 >>
            </h4>
            <p
              style={{
                lineHeight: '1.5',
                fontSize: '0.95rem',
                textAlign: 'left',
              }}
            >
              {specialty}
            </p>
            <ul className='category-link' style={{ textAlign: 'left' }}>
              <li>
                <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>{ex1}</p>
              </li>
              <li>
                <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>{ex2}</p>
              </li>
              <li>
                <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>{ex3}</p>
              </li>
              <li>
                <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>{ex4}</p>
              </li>
            </ul>

            <Link to='/' className='btn btn-outline'>
              더 자세히보기
            </Link>
          </div>
        </div>
      );
    }
  );
};

const ProList = () => {
  return (
    <section className='blog blog-2 section-b-space ratio3_2'>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col'>
            <div className='title1'>
              <h4>InterviewOn Professionals</h4>
              <h2 className='title-inner1'>
                인터뷰온의 현업프로들을 소개합니다.
              </h2>
              <hr role='tournament6' />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div>
          <FaExclamation />
          <p className='d-inline' style={{ color: 'black' }}>
            '현업프로'란 현업에 종사하는 인터뷰온의 모의면접관을 뜻합니다.
          </p>
        </div>
        <div>
          <FaExclamation />
          <p className='d-inline' style={{ color: 'black' }}>
            인터뷰온에서는 경력증빙을 통해 동 업무에서 5년이상 근무한
            전문가들만을 현업프로로 선정합니다.
          </p>
        </div>
        <div>
          <FaExclamation />
          <p className='d-inline' style={{ color: 'black' }}>
            인터뷰온에서는 현업프로의 현직장 이해관계 및 프라이버시를 위해
            현직장은 공개하지 않습니다.
          </p>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row slide-4 category-m no-arrow'>{renderPros()}</div>
      </div>
    </section>
  );
};

export default ProList;
