const keys = require('../../config/keys');

exports.emailValidateParams = (username, id) => {
  return {
    Destination: {
      ToAddresses: [username, keys.adminEmail],
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
                <h3>5초만 주세요!</h3>
                <p>
                    아트바나나 서비스의 모든 기능을 사용하기 위해서는 이메일 인증이 필요합니다.
                    아래 버튼을 눌러 이메일 인증을 완료해주세요.
                </p>
                <div>
                    <a href="${keys.redirectDomain}/verify/email/${id}">이메일주소 인증하기</a>
                </div>
                <p>감사합니다!</p>
                <p>아트바나나팀 드림</p>
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
        Data: '이메일을 인증해주세요.',
      },
    },
  };
};
