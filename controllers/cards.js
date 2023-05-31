const Card = require('../models/card');

const BadRequestError = require('../errors/badRequestError');
const NotFoundError = require('../errors/notFoundError');
const ForbiddenError = require('../errors/notFoundError');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  console.log(req.body);
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.send(card))
    .catch(next);
  // .catch((err) => next(err));
  // .catch((err) => {
  //   if (err.name === 'ValidationError') {
  //     return res.status(BAD_REQUEST).send({ message: 'Данные не корректны' });
  //   }
  //   return res.status(DEFAULT_ERROR).send({ message: 'Произошла ошибка' });
  // });
};

module.exports.deleteCard = (req, res, next) => {
  // const { cardId } = req.params;
  // console.log(req.params.cardId);
  Card.findByIdAndRemove(req.params.cardId)
    .orFail(new NotFoundError('Данные не найдены'))
    .then((card) => {
      console.log(card.owner);
      if (card.owner.toString() !== req.user._id) {
        throw new ForbiddenError('Вы не можете удалить карточку другого пользователя');
      }
      // else {
      //   return card.remove();
      // }
      res.send(card);
    })
    // .then(() => res.send({ message: 'удалено' }))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Данные не корректны'));
      }
      next(err);
    });
};

module.exports.addLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      throw new NotFoundError('Данные не найдены');
    })
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Данные не корректны'));
      } else {
        next(err);
      }
    });
};

module.exports.deleteLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      throw new NotFoundError('Данные не найдены');
    })
    .then((card) => {
      if (req.user._id !== card.owner._id.toString()) {
        throw new ForbiddenError('Доступ запрещен');
      }
    })
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Данные не корректны'));
      } else {
        next(err);
      }
    });
};
