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
  app.get('/api/artist/upload', requireLogin, (req, res) => {
    const imgFiles = [];
    const numberOfFiles = parseInt(req.query.numberOfFiles);

    for (var i = 0; i < numberOfFiles; i++) {
      let key = `${req.user.id}/products/${uuidv1()}.jpeg`;
      let url = s3.getSignedUrl('putObject', {
        Bucket: 'artbanana',
        ContentType: 'jpeg',
        Key: key,
      });
      imgFiles.push({ key: key, url: url });
    }
    res.send(imgFiles);
  });
};
