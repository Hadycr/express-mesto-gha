const BAD_REQUEST_400 = 400;
const NOT_FOUND_404 = 404;
const DEFAULT_ERROR_500 = 500;
const CONFLICT_ERROR_409 = 409;
const NOT_AUTHORIZED_ERROR_401 = 401;
const FORBIDEN_ERROR_403 = 403;
const STATUS_CREATED_201 = 201;

const URL_REGEX = /(https?:\/\/)(w{3}\.)?(((\d{1,3}\.){3}\d{1,3})|((\w-?)+\.(ru|com)))(:\d{2,5})?((\/.+)+)?\/?#?/;

module.exports = {
  BAD_REQUEST_400,
  NOT_FOUND_404,
  DEFAULT_ERROR_500,
  CONFLICT_ERROR_409,
  NOT_AUTHORIZED_ERROR_401,
  FORBIDEN_ERROR_403,
  STATUS_CREATED_201,
  URL_REGEX,
};
