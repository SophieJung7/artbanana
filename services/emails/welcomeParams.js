const keys = require('../../config/keys');

exports.welcomeParams = (username, id) => {
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
                <h3>아트바나나 가입을 환영합니다^^</h3>
                <p>
                    아트바나나에서 즐거운 아트경험을 해보세요!
                </p>
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
        Data: '아트바나나 가입을 환영합니다^^',
      },
    },
  };
};
