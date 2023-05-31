const { NOT_AUTHORIZED_ERROR_401 } = require('../config/config');

class NotAuthorizationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_AUTHORIZED_ERROR_401;
  }
}

module.exports = NotAuthorizationError;
