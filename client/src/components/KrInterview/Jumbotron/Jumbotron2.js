import React from 'react';

const Jumbotron2 = () => {
  return (
    <header className="masthead-2 d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {/* <div className="col-4 d-none d-sm-block"></div> */}
          <div className="col-10 intro-text d-none d-sm-block">
            <div className="intro-text-bg" style={{ fontFamily: '궁서체' }}>
              "당신이 망설였던 그 시간에
              <div style={{ fontFamily: '900' }}>
                누군가는 이미 취업에 성공했습니다."
              </div>
            </div>
          </div>
          <div className="col-11 intro-text d-block d-sm-none">
            <div className="intro-text-bg" style={{ fontFamily: '궁서체' }}>
              "당신이 망설였던 그 시간에
              <div style={{ fontFamily: '900' }}>
                누군가는 이미 취업에 성공했습니다."
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron2;
