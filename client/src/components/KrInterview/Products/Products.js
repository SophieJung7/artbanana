import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaFont } from 'react-icons/fa';
import { IoIosPerson } from 'react-icons/io';
import TitleTemp from '../TitleTemp';

const Products = () => {
  return (
    <div>
      <TitleTemp bigTitle="인터뷰온 서비스" subTitle="Our Services" />
      <section class="py-10">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <FaFilePdf
                  style={{ color: 'black', height: '2rem', width: '2rem' }}
                />
              </div>
              <h3>이력서, 자소서 첨삭</h3>
              <p
                class="mb-0 mt-5"
                style={{ textAlign: 'left', lineHeight: '1.3' }}
              >
                본인이 원하는 취업전문가를 선택해서 이력서, 자소서를 첨삭받을 수
                있습니다. 취업전문가가 본인의 강점을 살려 이력서, 자소서를 수정
                및 보완해드립니다.
              </p>
              <a href="/#resume-service">
                <button className="btn btn-solid mt-5">자세히 알아보기</button>
              </a>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <IoIosPerson
                  style={{ color: 'black', height: '2rem', width: '2rem' }}
                />
              </div>
              <h3>면접속성과외</h3>
              <p
                class="mb-0 mt-4"
                style={{ textAlign: 'left', lineHeight: '1.3' }}
              >
                본인이 원하는 취업전문가를 선택해서 면접속성과외를 받을 수
                있습니다. 인터뷰온은 200건이 넘는 취업성공케이스들을 바탕으로
                가장 빠르게 면접에 성공할 수 있는 면접속성과외를 구성했습니다.
              </p>
              <a href="/#interview-service">
                <button className="btn btn-solid mt-5">자세히 알아보기</button>
              </a>
            </div>
            <div class="col-lg-4">
              <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <FaFont
                  style={{ color: 'black', height: '2rem', width: '2rem' }}
                />
              </div>
              <h3>영어면접 속성과외</h3>
              <p
                class="mb-0 mt-4"
                style={{ textAlign: 'left', lineHeight: '1.3' }}
              >
                영어면접도 인터뷰온입니다. 인터뷰온의 영어면접전문가들은
                영어권국가에서 5년 이상 근무경력이 있는 영어 및
                취업전문가입니다. 빠르고 쉽게 영어면접에 합격하는 방법을
                알려드립니다.
              </p>
              <Link to="/english">
                <button className="btn btn-solid mt-5">자세히 알아보기</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
