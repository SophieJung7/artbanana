const keys = require('../../config/keys');

module.exports = user => {
  return `
  <html>
  <body>
    <div style='text-align: center'>
      <h3>2초만 주세요!</h3>
      <p>
        캣스냅 서비스의 모든 기능을 사용하기 위해서는 이메일 인증이 필요합니다.
        아래 버튼을 눌러 이메일 인증을 완료해주세요.
      </p>
      <div>
        <a href='${keys.redirectDomain}/auth/signup/thanks'>이메일주소 인증하기</a>
      </div>
      <p>감사합니다!</p>
      <p>캣스냅팀 드림</p>
    </div>
  </body>
</html>;
    `;
};
