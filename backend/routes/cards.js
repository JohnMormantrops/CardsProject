const express = require('express');
const { Card, Deck } = require('../storage/card');
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
router.get('/', async function (req, res, next) {
    const cards = await Card.find({});
    res.send(cards);
});

/**
 * @openapi
 * /card/deck:
 *   get:
 *     description: Get all the decks' information.
 *     tags: [Deck Management]
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
 *         description: Return the decks' information.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
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
router.get('/deck', async function (req, res, next) {
    const decks = await Deck.findOne({ userId: req.user.id });
    if (decks) {
        res.send(decks);
    } else {
        res.send([]);
    }
});

/**
 * @openapi
 * /card/deck:
 *   put:
 *     description: Store the selected decks.
 *     tags: [Deck Management]
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
 *             type: array
 *             items:
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The hero name.
 *                 nation:
 *                   type: string
 *                   description: The country the hero belongs to.
 *                 image:
 *                   type: string
 *                   description: The card image url.
 *                 attack:
 *                   type: string
 *                   description: The hero's attack magic.
 *                 defense:
 *                   type: string
 *                   description: The hero's defense magic.
 *
 *     responses:
 *       200:
 *         description: Successful storage.
 */
router.put('/deck', async function (req, res, next) {
    await Deck.findOneAndUpdate({ userId: req.user.id }, {
        userId: req.user.id,
        decks: req.body
    }, { upsert: true, new: true, setDefaultsOnInsert: true });
    res.send();
});


module.exports = router;
