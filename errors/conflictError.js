const { CONFLICT_ERROR_409 } = require('./errors');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_ERROR_409;
  }
}

module.exports = ConflictError;
