module.exports = (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .send({ error: '로그인을 하셔야 이용하실 수 있습니다^^!' });
  }
  next();
};
