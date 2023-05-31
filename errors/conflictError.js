const { CONFLICT_ERROR_409 } = require('../config/config');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_ERROR_409;
  }
}

module.exports = ConflictError;
