const router = require('express').Router();
// eslint-disable-next-line import/no-extraneous-dependencies
const { celebrate, Joi } = require('celebrate');

const {
  getCards, createCard, deleteCard, addLike, deleteLike,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(/(https?:\/\/)(w{3}\.)?(((\d{1,3}\.){3}\d{1,3})|((\w-?)+\.(ru|com)))(:\d{2,5})?((\/.+)+)?\/?#?/),
  }),
}), createCard);

router.delete('/:cardId', celebrate({
  body: Joi.object().keys({
    userId: Joi.string().required().length(24),
  }),
}), deleteCard);

router.put('/:cardId/likes', celebrate({
  body: Joi.object().keys({
    userId: Joi.string().required().length(24),
  }),
}), addLike);

router.delete('/:cardId/likes', celebrate({
  body: Joi.object().keys({
    userId: Joi.string().required().length(24),
  }),
}), deleteLike);

module.exports = router;
