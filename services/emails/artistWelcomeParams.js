const keys = require('../../config/keys');

exports.artistWelcomeParams = (email) => {
  return {
    Destination: {
      ToAddresses: [email, keys.adminEmail],
    },
    Source: keys.emailFrom,
    ReplyToAddresses: [keys.emailFrom],
    ReturnPath: keys.adminEmail,
    Message: {
      Body: {
        /* required */
        Html: {
          Charset: 'UTF-8',
          Data: `
            <html>
            <h3>아트바나나 아티스트가입을 환영합니다!</h3>
            <p>자동 가입승인이 되었습니다. 아티스트페이지(홈페이지 상단 오른쪽 클릭)에서 팔고자하는 제품 정보들을 입력해주세요. 이 밖에 궁금하신 사항이 있으시면 언제든 이 메일로 답장주시기 바랍니다!<p/>
            <p>감사합니다! ^^</p>
            <p>아트바나나 정혜정 드림</p>
            <a href="https://www.artbanana.co.kr"><h3>아트바나나 바로가기!</h3> <a/>
            </html>
              `,
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'TEXT_FORMAT_BODY',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: '아티스트 가입을 환영합니다^^',
      },
    },
  };
};
