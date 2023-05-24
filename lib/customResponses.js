function customResponses(req, res, next) {
  res.notFound = function notFound(){
    const err = new Error('Not Found');
    err.status = 404;

    throw err;
  };

  res.badRequest = function badRequest(errors){
    const err = new Error('Bad Rquest');
    err.status = 400;
    err.errors = errors;

    throw err;
  };

  res.unauthorized = function unauthorized(){
    const err = new Error('unauthorized');
    err.status = 401;

    throw err;
  };

  next();
}

module.exports = customResponses;
