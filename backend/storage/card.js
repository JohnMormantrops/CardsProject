const mongoose = require('./db');

const cardSchema = new mongoose.Schema({
    name: String,
    nation: String,
    image: String,
    attack: String,
    defense: String
})
const Card = mongoose.model('Card', cardSchema);

const deckSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    decks: []
}, { strict: false });
const Deck = mongoose.model('Deck', deckSchema);

module.exports = { Card: Card, Deck: Deck }
