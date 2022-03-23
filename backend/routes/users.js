const express = require('express');
const { User } = require('../storage/user');
const { encryptPassword, comparePassword, jwtSign } = require('../tools/encryption');
const router = express.Router();

/**
 * @openapi
 * /user/register:
 *   post:
 *     description: Register a user.
 *     tags: [User]
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address.
 *               password:
 *                 type: string
 *                 description: The password.
 *
 *     responses:
 *       200:
 *         description: Return the user information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID.
 *                 email:
 *                   type: string
 *                   description: The email address.
 *                 jwtToken:
 *                   type: string
 *                   description: The identity token.
 *
 *       400:
 *         description: The specified email already registered.
 */
router.post('/register', async function (req, res, next) {
  const { email, password } = req.body;
  const oldUser = await User.findOne({ email: email })
  if (oldUser) {
    return res.status(400).send({
      err: 'Email already registered!'
    });
  }
  const newUser = await User.create({ email: email, password: encryptPassword(password) });
  return res.send({ id: newUser.id, email: newUser.email, jwtToken: jwtSign({ id: newUser.id, email: newUser.email }) });
});

/**
 * @openapi
 * /user/login:
 *   post:
 *     description: User logs in.
 *     tags: [User]
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address.
 *               password:
 *                 type: string
 *                 description: The password.
 *
 *     responses:
 *       200:
 *         description: Return the user information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID.
 *                 email:
 *                   type: string
 *                   description: The email address.
 *                 jwtToken:
 *                   type: string
 *                   description: The identity token.
 *
 *       400:
 *         description: User does not exist.
 */
router.post('/login', async function (req, res, next) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).send({
      err: 'User not exist!'
    });
  }
  const valid = comparePassword(password, user.password);
  if (!valid) {
    return res.status(400).send({ err: 'Incorrect password!' });
  }
  return res.send({ id: user.id, email: user.email, jwtToken: jwtSign({ id: user.id, email: user.email }) });
});

module.exports = router;
