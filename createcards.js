//const Card = require('./cards/Card')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//db uri is our key to the mongo atlasd database use the below code to connect to the database
const dbURI = "mongodb+srv://TeamRowan:ipOzz8isdphk79RL@cluster0.tggfz.mongodb.net/TeamRowan?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log("connected"))
    .catch((err) => console.log(err));


//mogose requires a schema to upload the following is my scheam for a hero in the game
const cardSchema = new mongoose.Schema({
    name: String,
    nation: String,
    image: String,
    attack: String,
    defense: String,
	paragraph: String
});//make a schema


//a model of the schema herp this makes a new collection of heros in the database
//because the "hero" in the brackets
const Card = mongoose.model('Card', cardSchema);

//add new heros by filling in the details here
//const thor = new Card({ name: "Thor", nation: "norse", image: "https://github.com/JohnMormantrops/Images/blob/main/thor.jpg?raw=true",attack: "lightning +5 damage",  defense:"morale boost +1 for all defensive troops", paragraph:"This is Thor. He is really strong"});
//const inti = new Card ({ name: "Inti", nation: "southamerican", image:"https://github.com/JohnMormantrops/Images/blob/main/inti.jpg?raw=true", attack: "sun burn +5 damage", defense:"blinding rays +5 defense", paragraph: "This is Inti, the ancient sun god in Mayan culture."});
//const matecito = new Card({name: "Matecito", nation: "southamerican", image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/matecito.jpg?raw=true", attack: "'Accidental' spill +1 damage", defense:"Replenishing drink +1 defense", paragraph: "Mate is a popular drink in countries where the Guarani natives once lived."});


console.log(thor.attack);

console.log(inti.nation);

console.log("Saving?");



addTheCrap()


async function addTheCrap() {
    //when you run this code the data will be saved try it with your data and see if it saves succesfully
    await thor.save();
    await inti.save();
	await matecito.save();
    //after you run this code your data should be stored on the db

  }
