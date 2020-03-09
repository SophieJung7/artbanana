const keys = require('../../config/keys');

module.exports = user => {
  return `
  <html>
  <body>
    <div style='text-align: center'>
      <h3>캣스냅에 오신 것을 환영합니다!</h3>
      <p>
        안녕하세요? 
      </p>
      <p>캣스냅의 회원이 되어 주셔서 감사드립니다.</p>
      <p>전세계의 전문 포토그래퍼들이 여러분의 소중한 순간을 사진으로 담아드리겠습니다. 궁금하신 사항이 있으시다면 언제든지 query@catsnap.co.kr로 메일주시기 바랍니다.</p>
      <p>감사합니다!</p>
    </div>
  </body>
</html>;
    `;
};
