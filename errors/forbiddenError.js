const { FORBIDEN_ERROR_403 } = require('./errors');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDEN_ERROR_403;
  }
}

module.exports = ForbiddenError;
