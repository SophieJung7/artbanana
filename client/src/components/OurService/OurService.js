import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';
import { MdComputer } from 'react-icons/md';
import { FaAngellist, FaFilePdf } from 'react-icons/fa';

const OurService = () => {
  return (
    <div className='container'>
      <section
        className='blog blog-2 section-b-space ratio3_2'
        style={{ paddingBottom: '0' }}
      >
        <div className='container'>
          <div className='row mt-5'>
            <div className='col'>
              <div className='title1'>
                <h4>How It Works</h4>
                <h2 className='title-inner1'>인터뷰온은 이렇게 진행됩니다.</h2>
                <hr role='tournament6' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='bg-white py-10'>
        <div class='container'>
          <div class='row text-center'>
            <div class='col-lg-3 mb-5 mb-lg-0'>
              <div class='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                <IoIosPerson
                  style={{ color: 'black', height: '2rem', width: '2rem' }}
                />
              </div>
              <h3 className='text-dark'>면접관 선택</h3>
              <p class='mb-2' style={{ textAlign: 'left', lineHeight: '1.2' }}>
                > 취업을 원하는 산업 및 직무에 있는 현업 종사자를 선택합니다.
              </p>
              <p class='mb-2' style={{ textAlign: 'left', lineHeight: '1.2' }}>
                > 원하는 면접 날짜, 시간, 종류를 선택합니다.
              </p>
            </div>
            <div class='col-lg-3 mb-5 mb-lg-0'>
              <div class='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                <MdComputer
                  style={{ color: 'black', height: '2rem', width: '2rem' }}
                />
              </div>
              <h3 className='text-dark'>모의면접</h3>
              <p class='mb-2' style={{ textAlign: 'left', lineHeight: '1.2' }}>
                > 예약한 날짜, 시간에 맞춰 면접관과 화상 모의면접을 합니다.{' '}
              </p>
              <p class='mb-2' style={{ textAlign: 'left', lineHeight: '1.2' }}>
                > 인터뷰온은 예약과 동시에 미리 면접 질문지를 발송하기 때문에
                모의면접을 미리 준비할 수 있습니다.
              </p>
            </div>
            <div class='col-lg-3'>
              <div class='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                <FaAngellist
                  style={{ color: 'black', height: '2rem', width: '2rem' }}
                />
              </div>
              <h3 className='text-dark'>면접 피드백</h3>
              <p class='mb-2' style={{ textAlign: 'left', lineHeight: '1.2' }}>
                > 면접관이 어떻게 하면 면접성공률을 높일 수 있을지 컨설팅합니다.
              </p>
              <p class='mb-2' style={{ textAlign: 'left', lineHeight: '1.2' }}>
                > 현재 중요하게 진행되는 산업 및 직무에 대한 설명을 진행합니다.
              </p>
            </div>
            <div class='col-lg-3'>
              <div class='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                <FaFilePdf
                  style={{ color: 'black', height: '2rem', width: '2rem' }}
                />
              </div>
              <h3 className='text-dark'>면접성공전략 기획</h3>
              <p class='mb-2' style={{ textAlign: 'left', lineHeight: '1.2' }}>
                > 면접이 끝나고 24시간 이내에 면접관이 개인에 맞는
                면접성공전략을 PDF로 제작해 발송해 드립니다.
              </p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <a
            href='#prolist'
            to='/'
            className='btn btn-solid mt-5'
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
      </section>
      <div class='svg-border-rounded text-light'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 144.54 17.34'
          preserveAspectRatio='none'
          fill='currentColor'
        >
          <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0'></path>
        </svg>
      </div>
    </div>
  );
};

export default OurService;
