const keys = require('../../config/keys');

exports.pwResetParams = (username, token) => {
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
                <p>
                    비밀번호 재설정을 위해 아래 링크를 클릭해주세요. 
                </p>
                <div>
                    <a href="${keys.redirectDomain}/pw-reset/${token}">비밀번호 재설정하기</a>
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
        Data: '비밀번호를 재설정해주세요.',
      },
    },
  };
};
