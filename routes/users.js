const router = require('express').Router();
const {
  getUsers, getUserById, updateUser, updateAvatar, getCurrentUsers,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.get('/me', getCurrentUsers);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
