const router = require('express').Router();
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const userRouter = require('./users');
const cardRouter = require('./cards');

router.post('/signup', createUser);
router.post('/signin', login);
router.use('/*', (req, res) => {
  res.status(404).send({ message: '404 not found' });
});
router.use(auth);
router.use('/users/', userRouter);
router.use('/cards/', cardRouter);
module.exports = router;
