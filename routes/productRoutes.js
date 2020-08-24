const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  // Create an product
  app.post('/api/products/:id', async (req, res) => {
    const artistId = req.params.id;
    const {
      productCategory,
      name,
      medium,
      description,
      year,
      quantity,
      size,
      price,
      productImgs,
    } = req.body;

    //   Make MongoDB data
    let product = new Product({
      artistId: artistId,
      productCategory,
      name,
      medium,
      description,
      year,
      quantity,
      size,
      price,
      productImgs: productImgs.map((img) => ({ key: img.key })),
      dateRegistered: Date.now(),
    });
    try {
      // Save at MongoDB
      await product.save();
      res.send(product);
    } catch (err) {
      res.status(422).send({
        error: '제품등록에 실패했습니다. 다시한번 시도해주세요.',
      });
    }
  });

  //  Fetch One Artist Products
  app.get('/api/products/artist/:id', async (req, res) => {
    const artistId = req.params.id;
    try {
      const products = await Product.find({
        artistId,
      });
      res.send(products);
    } catch (err) {
      res.status(422).send({
        error: '제품 불러오기에 실패했습니다. 고객센터로 연락해주세요!',
      });
    }
  });

  // Fetch A Product
  app.get('/api/products/:id', async (req, res) => {
    try {
      const product = await Product.findById({ _id: req.params.id });
      res.send(product);
    } catch (err) {
      res.status(422).send({ error: 'Failed to fetch a product' });
    }
  });

  // Edit a product
  app.put('/api/edit-product/:id', (req, res) => {
    const productId = req.params.id;
    const editedProduct = req.body;

    Product.findByIdAndUpdate(productId, editedProduct)
      .then(() => Product.findById({ _id: productId }))
      .then((product) => res.send(product))
      .catch((err) =>
        res.send(422, {
          error: '제품수정에 실패했습니다. 고객센터로 연락해주세요 ㅠㅠ!',
        })
      );
  });

  // Delete a product
  app.delete('/api/delete-product/:id', (req, res) => {
    const productId = req.params.id;

    Product.findByIdAndRemove(productId)
      .then((product) => res.status(204).send(product))
      .catch((err) =>
        res.send(422, {
          error: '제품삭제에 실패했습니다. 고객센터로 연락해주세요 ㅠㅠ!',
        })
      );
  });
};
