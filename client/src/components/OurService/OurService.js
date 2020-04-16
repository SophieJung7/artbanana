import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import { MdComputer } from 'react-icons/md';
import { FaAngellist, FaFilePdf, FaRegCheckCircle } from 'react-icons/fa';

const process = [
  {
    name: '영어면접쌤 선택',
    iconName: 'IoIosPerson',
    des1: '원어민 수준의 영어면접 전문가를 선택합니다.',
    des2: '원하는 수업 날짜, 시간, 종류를 선택합니다.',
  },
  {
    name: '영어면접 준비',
    iconName: 'MdComputer',
    des1: '영어면접쌤을 예약함과 동시에 영어면접쌤이 면접 질문지를 발송합니다.',
    des2: '질문에 대한 답변을 한국말이나 영어로 써서 준비합니다.',
  },
  {
    name: '모의 영어면접',
    iconName: 'FaAngellist',
    des1: '영어면접쌤이 30분간 모의 영어면접을 진행합니다.',
    des2:
      '본인이 할 수 있는 한도 내에서 최대한 영어로 답변을 해봅니다. 너무 힘들 경우 한국어로 대답합니다.',
  },
  {
    name: '면접속성과외',
    iconName: 'IoIosPerson',
    des1:
      '면접이 끝나고 영어면접쌤이 본인이 했던 영어의 올바른 표현을 지도합니다.',
    des2:
      '올바른 표현이 자연스럽게 나올 수 있도록 논리적 설명뿐 아니라 암기방법에 대해서도 지도합니다.',
  },
];

const renderProcess = () => {
  return process.map(({ name, iconName, des1, des2 }, index) => {
    return (
      <div key={index} className="col-lg-3 mb-5 mb-lg-0">
        <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
          {renderIcon(iconName)}
        </div>
        <h3 className="text-dark">{name}</h3>
        <ul className="fa-ul pricing-list my-4" style={{ color: '#1cdffe' }}>
          <li className="pricing-list-item" style={{ textAlign: 'left' }}>
            <span className="fa-li">
              <FaRegCheckCircle />
            </span>
            <span className="text-dark" style={{ fontSize: '1.1rem' }}>
              {des1}
            </span>
          </li>
          <li className="pricing-list-item mt-3" style={{ textAlign: 'left' }}>
            <span className="fa-li">
              <FaRegCheckCircle />
            </span>
            <span className="text-dark" style={{ fontSize: '1.1rem' }}>
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

const OurService = () => {
  return (
    <div className="container">
      <section
        className="blog blog-2 section-b-space ratio3_2"
        style={{ paddingBottom: '0' }}
      >
        <div className="container">
          <div className="row mt-sm-5">
            <div className="col">
              <div className="title1">
                <h4>How It Works</h4>
                <h2 className="title-inner1">인터뷰온 영어면접 속성과외란?</h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="container">
          <div className="row text-center">{renderProcess()}</div>
        </div>
      </section>
    </div>
  );
};

export default OurService;
