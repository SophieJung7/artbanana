import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import {
  FaPencilAlt,
  FaFilePdf,
  FaRegCheckCircle,
  FaPhone,
} from 'react-icons/fa';

const process = [
  {
    name: '취업전문가 선택',
    iconName: 'IoIosPerson',
    des1: '본인이 원하는 취업전문가를 선택합니다.',
    des2: '본인이 원하는 산업, 직종, 회사명을 취업전문가에게 설명합니다.',
  },
  {
    name: '이력서, 자소서 준비',
    iconName: 'FaPencilAlt',
    des1:
      '취업전문가를 예약함과 동시에 전문가가 이력서 및 자소서 양식을 발송합니다',
    des2:
      '전문가가 보낸 양식 혹은 본인이 가진 양식에 따라 이력서, 자소서를 준비해 취업전문가에게 발송합니다.',
  },
  {
    name: '이력서, 자소서 컨설팅',
    iconName: 'FaPhone',
    des1: '24시간 이내에 취업전문가와 전화 컨설팅 날짜, 시간을 결정합니다.',
    des2: '취업전문가가 1시간동안 컨설팅을 하며 취준생의 강점을 파악합니다.',
  },
  {
    name: '이력서, 자소서 발송',
    iconName: 'FaFilePdf',
    des1:
      '취업전문가가 취준생의 강점에 맞게 이력서, 자소서를 작성해 발송합니다.',
    des2: '이력서, 자소서가 마음에 들지 않을 경우 수정을 의뢰합니다.',
  },
];

const renderProcess = () => {
  return process.map(({ name, iconName, des1, des2 }, index) => {
    return (
      <div key={index} className='col-lg-3 mb-5 mb-lg-0'>
        <div className='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
          {renderIcon(iconName)}
        </div>
        <h3 className='text-dark'>{name}</h3>
        <ul className='fa-ul pricing-list my-4' style={{ color: '#ffe256' }}>
          <li className='pricing-list-item' style={{ textAlign: 'left' }}>
            <span className='fa-li'>
              <FaRegCheckCircle />
            </span>
            <span className='text-dark' style={{ fontSize: '1.1rem' }}>
              {des1}
            </span>
          </li>
          <li className='pricing-list-item mt-3' style={{ textAlign: 'left' }}>
            <span className='fa-li'>
              <FaRegCheckCircle />
            </span>
            <span className='text-dark' style={{ fontSize: '1.1rem' }}>
              {des2}
            </span>
          </li>
        </ul>
      </div>
    );
  });
};

const renderIcon = (iconName) => {
  switch (iconName) {
    case 'FaFilePdf':
      return (
        <FaFilePdf style={{ color: 'black', height: '2rem', width: '2rem' }} />
      );
    case 'FaPencilAlt':
      return (
        <FaPencilAlt
          style={{ color: 'black', height: '2rem', width: '2rem' }}
        />
      );
    case 'FaPhone':
      return (
        <FaPhone style={{ color: 'black', height: '2rem', width: '2rem' }} />
      );
    default:
      return (
        <IoIosPerson
          style={{ color: 'black', height: '2rem', width: '2rem' }}
        />
      );
  }
};

const ResumeService = () => {
  return (
    <div className='container'>
      <section
        className='blog blog-2 section-b-space ratio3_2'
        style={{ paddingBottom: '0' }}
      >
        <div className='container'>
          <div className='row mt-sm-5'>
            <div className='col'>
              <div className='title1'>
                <h4>How It Works</h4>
                <h2 className='title-inner1'>이력서, 자소서 첨삭</h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white py-10'>
        <div className='container'>
          <div className='row text-center'>{renderProcess()}</div>
        </div>
      </section>
      <div className='d-flex justify-content-center'>
        <a
          href='#prolist'
          className='btn btn-solid mt-5'
          style={{
            fontSize: '1.2rem',
            border: 'none',
            backgroundImage:
              'linear-gradient(50deg, #4df6c0 50%, transparent 50%)',
          }}
        >
          이력서, 자소서 첨삭받기
        </a>
      </div>
    </div>
  );
};

export default ResumeService;
