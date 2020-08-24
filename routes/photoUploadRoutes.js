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
  // For profile photo: Get presignedURL from S3
  app.get('/api/artist/profile/upload', requireLogin, (req, res) => {
    let key = `artists/${req.user.id}/profile/${uuidv1()}.jpeg`;
    let url = s3.getSignedUrl('putObject', {
      Bucket: 'artbanana',
      ContentType: 'jpeg',
      Key: key,
    });
    res.send({ key: key, url: url });
  });

  // For product photos: Get presignedURL from S3
  app.get('/api/artist/products/upload', requireLogin, (req, res) => {
    const imgFiles = [];
    const numberOfFiles = parseInt(req.query.numberOfFiles);

    for (var i = 0; i < numberOfFiles; i++) {
      let key = `products/${req.user.id}/${uuidv1()}.jpeg`;
      let url = s3.getSignedUrl('putObject', {
        Bucket: 'artbanana',
        ContentType: 'jpeg',
        Key: key,
      });
      imgFiles.push({ key: key, url: url });
    }
    res.send(imgFiles);
  });
  // For portfolio photos: Get presignedURL from S3
  app.get('/api/artist/portfolio/upload', requireLogin, (req, res) => {
    const imgFiles = [];
    const numberOfFiles = parseInt(req.query.numberOfFiles);

    for (var i = 0; i < numberOfFiles; i++) {
      let key = `artists/${req.user.id}/portfolio/${uuidv1()}.jpeg`;
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
