const captcha = require('./captcha');

module.exports = options => {
  return async (req, res, next) => {
    const png = await captcha(options);
    await next();
    res.end(png);
  };
};
