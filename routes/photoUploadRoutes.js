const AWS = require('aws-sdk');
const { v1: uuidv1 } = require('uuid');
const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');

//Create presigned URL
const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  region: 'ap-northeast-2',
});

module.exports = (app) => {
  app.get('/api/upload', requireLogin, (req, res) => {
    // Generate User ID folder and generate random filename.
    const key = `${req.user.id}/profile/${uuidv1()}.jpeg`;

    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'catsnap-photographer',
        ContentType: 'jpeg',
        Key: key,
      },
      (err, url) => res.send({ key, url })
    );
  });
};
