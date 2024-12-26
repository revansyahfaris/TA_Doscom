const express = require('express');
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

const validateUser = require('../middlewares/validateUser');
router.post('/', validateUser, createUser);
router.put('/:id', validateUser, updateUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *       500:
 *         description: Internal server error
 */
router.get('/', getUsers);


