const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// Route to create a new user
router.route('/signup').post(createUser);

// Route to log in a user
router.route('/login').post(login);

// Route to get the logged-in user's information
router.route('/me').get(authMiddleware, getSingleUser);

// Route to save a book to a user's profile
router.route('/books').put(authMiddleware, saveBook);

// Route to remove a book from a user's profile
router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;

