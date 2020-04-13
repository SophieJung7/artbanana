import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import { MdComputer } from 'react-icons/md';
import { FaAngellist, FaFilePdf, FaRegCheckCircle } from 'react-icons/fa';

const process = [
  {
    name: '면접관 선택',
    iconName: 'IoIosPerson',
    des1: '취업을 원하는 산업 및 직무에 있는 현업 종사자를 선택합니다.',
    des2: '원하는 면접 날짜, 시간, 종류를 선택합니다.',
  },
  {
    name: '모의면접',
    iconName: 'MdComputer',
    des1: '예약한 날짜, 시간에 맞춰 면접관과 화상 모의면접을 합니다.',
    des2:
      '인터뷰온은 예약과 동시에 미리 면접 질문지를 발송하기 때문에 모의면접을 미리 준비할 수 있습니다.',
  },
  {
    name: '면접 피드백',
    iconName: 'FaAngellist',
    des1: '면접관이 어떻게 하면 면접성공률을 높일 수 있을지 컨설팅합니다.',
    des2: '현재 중요하게 진행되는 산업 및 직무에 대한 설명을 진행합니다.',
  },
  {
    name: '면접성공전략',
    iconName: 'IoIosPerson',
    des1:
      '면접이 끝나고 24시간 이내에 면접관이 개인에 맞는 면접성공전략을 PDF로 제작해 발송해 드립니다.',
    des2: '현재 중요하게 진행되는 산업 및 직무에 대한 설명을 진행합니다.',
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
                <h2 className="title-inner1">인터뷰온은 이렇게 진행됩니다.</h2>
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
