
module.exports.disableWithToken = (req, res, next) => {
  if(req.headers.Authorization || req.headers.authorization) {
    return res.status(400)({
      generalMessage: 'Authorization problem',
      messages: [`You can't access this route with access token`]
    });
  }
  return next();
 }
