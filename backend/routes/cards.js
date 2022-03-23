const express = require('express');
const { Card } = require('../storage/card');
const { jwtVerify } = require('../tools/encryption');
const router = express.Router();

router.use((req, res, next) => {
    const jwtToken = req.get('jwtToken');
    try {
        const user = jwtVerify(jwtToken);
        req.user = user;
        next();
    } catch (err) {
        res.status(400).send({ err: 'Invalid user identity!' })
    }
})


/**
 * @openapi
 * /card:
 *   get:
 *     description: Get all cards information.
 *     tags: [Card]
 *
 *     parameters:
 *       - in: header
 *         name: jwtToken
 *         schema:
 *           type: string
 *           description: The user identity token.
 *         required: true
 *
 *     responses:
 *       200:
 *         description: Return all the cards' information.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The card ID.
 *                   name:
 *                     type: string
 *                     description: The hero name.
 *                   nation:
 *                     type: string
 *                     description: The country the hero belongs to.
 *                   image:
 *                     type: string
 *                     description: The card image url.
 *                   attack:
 *                     type: string
 *                     description: The hero's attack magic.
 *                   defense:
 *                     type: string
 *                     description: The hero's defense magic.
 */
router.get('/', function (req, res, next) {
    Card.find({}, function (err, cards) {
        res.send(cards);
    })
});

/**
 * @openapi
 * /card/management:
 *   get:
 *     description: Get all the selected cards information.
 *     tags: [Card Management]
 *
 *     parameters:
 *       - in: header
 *         name: jwtToken
 *         schema:
 *           type: string
 *           description: The user identity token.
 *         required: true
 *
 *     responses:
 *       200:
 *         description: Return the selected cards' information.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The card ID.
 *                   name:
 *                     type: string
 *                     description: The hero name.
 *                   nation:
 *                     type: string
 *                     description: The country the hero belongs to.
 *                   image:
 *                     type: string
 *                     description: The card image url.
 *                   attack:
 *                     type: string
 *                     description: The hero's attack magic.
 *                   defense:
 *                     type: string
 *                     description: The hero's defense magic.
 */
router.get('/management', function (req, res, next) {
    //todo not implemented
});

/**
 * @openapi
 * /card/management:
 *   post:
 *     description: Add a selected card.
 *     tags: [Card Management]
 *
 *     parameters:
 *       - in: header
 *         name: jwtToken
 *         schema:
 *           type: string
 *           description: The user identity token.
 *         required: true
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: The card ID.
 *
 *     responses:
 *       200:
 *         description: Addition succeeded.
 *       400:
 *         description: Card does not exist.
 */
router.post('/management', function (req, res, next) {
    //todo not implemented
});

/**
 * @openapi
 * /card/management/{cardID}:
 *   delete:
 *     description: Delete a selected card.
 *     tags: [Card Management]
 *
 *     parameters:
 *       - in: header
 *         name: jwtToken
 *         schema:
 *           type: string
 *           description: The user identity token.
 *         required: true
 *
 *     responses:
 *       200:
 *         description: Deletion succeeded.
 */
router.delete('/management/:cardID', function (req, res, next) {
    //todo not implemented
    res.send("cardID is set to " + req.params.cardID);
});

module.exports = router;
