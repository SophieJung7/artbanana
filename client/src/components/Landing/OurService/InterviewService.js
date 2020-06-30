import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import { MdComputer } from 'react-icons/md';
import { FaAngellist, FaFilePdf, FaRegCheckCircle } from 'react-icons/fa';

const process = [
  {
    name: '취업전문가 선택',
    iconName: 'IoIosPerson',
    des1: '본인이 원하는 취업전문가를 선택합니다.',
    des2: '원하는 수업 날짜, 시간을 선택합니다.',
  },
  {
    name: '면접준비',
    iconName: 'MdComputer',
    des1: '취업전문가를 예약함과 동시에 취업전문가가 면접 질문지를 발송합니다.',
    des2: '질문에 대한 답변을 써서 준비합니다.',
  },
  {
    name: '모의면접',
    iconName: 'FaAngellist',
    des1: '취업전문가가 30분간 모의면접을 진행합니다.',
    des2: '실전처럼 복장을 갖춰입고 진지하게 모의면접에 임합니다.',
  },
  {
    name: '면접속성과외',
    iconName: 'IoIosPerson',
    des1:
      '면접이 끝나고 취업전문가가 본인의 강점과 보완해야 할 사항에 대해 설명합니다.',
    des2: '취업전문가가 개인에 맞는 취업전략을 컨설팅합니다.',
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
        <ul className='fa-ul pricing-list my-4' style={{ color: '#b5dccd' }}>
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
    case 'MdComputer':
      return (
        <MdComputer style={{ color: 'black', height: '2rem', width: '2rem' }} />
      );
    case 'FaAngellist':
      return (
        <FaAngellist
          style={{ color: 'black', height: '2rem', width: '2rem' }}
        />
      );
    default:
      return (
        <IoIosPerson
          style={{ color: 'black', height: '2rem', width: '2rem' }}
        />
      );
  }
};

const InterviewService = () => {
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
                <h2 className='title-inner1'>면접속성과외란?</h2>
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
              'linear-gradient(50deg, #ff73ca 50%, transparent 50%)',
          }}
        >
          면접전문가 살펴보기
        </a>
      </div>
    </div>
  );
};

export default InterviewService;
