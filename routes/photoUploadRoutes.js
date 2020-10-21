const mongoose = require('mongoose');
const User = mongoose.model('User');
const Artist = mongoose.model('Artist');
const Product = mongoose.model('Product');
const AWS = require('aws-sdk');
const { v1: uuidv1 } = require('uuid');
const { v4: uuidv4 } = require('uuid');
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

  // Add Photo Process For Single photo: Get presignedURL from S3
  app.get(
    '/api/photos/add-product-photo/:productId',
    requireLogin,
    async (req, res) => {
      try {
        const artist = await Artist.findOne({ _user: req.user.id });
        const artistId = artist._id;
        // Find s3FolderId ==> 좀 짜증나는 구조이긴 함.. 어쩔수 없었음.
        const productId = req.params.productId;
        console.log(`productId: ${productId}`);
        const product = await Product.findById(productId);
        const s3FolderId = product.productImgs[0].s3FolderId;
        let key = `products/${artistId}/${s3FolderId}/${uuidv1()}.jpeg`;
        let url = s3.getSignedUrl('putObject', {
          Bucket: 'artbanana',
          ContentType: 'jpeg',
          Key: key,
        });
        res.send({ key: key, url: url, s3FolderId: s3FolderId });
      } catch (err) {
        console.log(err);
      }
    }
  );

  // For product photos: Get presignedURL from S3
  app.get('/api/artist/products/upload', requireLogin, async (req, res) => {
    const imgFiles = [];
    const numberOfFiles = parseInt(req.query.numberOfFiles);
    const artist = await Artist.findOne({ _user: req.user.id });
    const artistId = artist._id;
    // Made ProductId to organize S3 Folders in case an artist has many products
    const s3FolderId = uuidv4();

    for (var i = 0; i < numberOfFiles; i++) {
      //******* S3 Key *******/
      let key = `products/${artistId}/${s3FolderId}/${uuidv1()}.jpeg`;
      let url = s3.getSignedUrl('putObject', {
        Bucket: 'artbanana',
        ContentType: 'jpeg',
        Key: key,
      });
      imgFiles.push({ key: key, url: url, s3FolderId: s3FolderId });
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
