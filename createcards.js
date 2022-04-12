//const Card = require('./cards/Card')
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

//db uri is our key to the mongo atlasd database use the below code to connect to the database
const dbURI =
  "mongodb+srv://TeamRowan:ipOzz8isdphk79RL@cluster0.tggfz.mongodb.net/TeamRowan?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected"))
  .catch((err) => console.log(err));

//mogose requires a schema to upload the following is my scheam for a hero in the game
const cardSchema = new mongoose.Schema({
  name: String,
  nation: String,
  image: String,
  attack: String,
  defense: String,
  paragraph: String,
}); //make a schema

//a model of the schema herp this makes a new collection of heros in the database
//because the "hero" in the brackets
const Card = mongoose.model("Card", cardSchema);

//add new heros by filling in the details here
//const thor = new Card({ name: "Thor", nation: "norse", image: "https://github.com/JohnMormantrops/Images/blob/main/thor.jpg?raw=true",attack: "lightning +5 damage",  defense:"morale boost +1 for all defensive troops", paragraph:"This is Thor. He is really strong"});
//const inti = new Card ({ name: "Inti", nation: "southamerican", image:"https://github.com/JohnMormantrops/Images/blob/main/inti.jpg?raw=true", attack: "sun burn +5 damage", defense:"blinding rays +5 defense", paragraph: "This is Inti, the ancient sun god in Mayan culture."});
//const matecito = new Card({name: "Matecito", nation: "southamerican", image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/matecito.jpg?raw=true", attack: "'Accidental' spill +1 damage", defense:"Replenishing drink +1 defense", paragraph: "Mate is a popular drink in countries where the Guarani natives once lived."});

const Sarcophagus = new Card({
  name: "Sarcophagus",
  nation: "Egyptian",
  image:
    "https://github.com/lcroker/Card-Images/blob/main/Sarcophagus.jpg?raw=true",
  attack: "Envelopment +4 damage",
  defense: "Safe Passage +4 defense",
  paragraph:
    "Surrounds enemy opponent while also provideing safe passage to user.",
});

const ScarabBeetle = new Card({
  name: "Scarab Beetle",
  nation: "Egyptian",
  image:
    "https://github.com/lcroker/Card-Images/blob/main/Scarab%20Beetle.jpg?raw=true",
  attack: "Hard Shell +5 damage",
  defense: "Ressurection +6 defense",
  paragraph:
    "The Scarab Beetle attacks with a flying assault using its hard shell, while boosting owners health with Ressurection.",
});

const Sphinx = new Card({
  name: "Sphinx",
  nation: "Egyptian",
  image: "https://github.com/lcroker/Card-Images/blob/main/Sphinx.jpg?raw=true",
  attack: "Riddle Me This +5 damage",
  defense: "Tomb Protection +5 defense",
  paragraph:
    "The sphinx is an evil and cruel creature that asks riddles and those who cannot answer it have suffered the fate of being killed and eaten",
});

const TheMummy = new Card({
  name: "The Mummy",
  nation: "Egyptian",
  image:
    "https://github.com/lcroker/Card-Images/blob/main/The%20Mummy.jpg?raw=true",
  attack: "Life Force Drain +8 damage",
  defense: "Immunity +10 defense",
  paragraph:
    "Immunity to all forms of attack and draining the life force of mortals, The Mummy has some of the strongest powers",
});

const UraeusTheCobra = new Card({
  name: "Uraeus The Cobra",
  nation: "Egyptian",
  image:
    "https://github.com/lcroker/Card-Images/blob/main/Uraeus%20the%20Cobra.jpg?raw=true",
  attack: "Poison Strike +4 damage",
  defense: "Wall of Flames +6 defense",
  paragraph:
    "Ureas The Cobra is a serpant goddess who wields fierce powers as she can use not only poison but flames against the enemies of the pharaoh.",
});

// console.log(Anubis.attack);

// console.log(inti.nation);

console.log("Saving?");

addTheCrap();

async function addTheCrap() {
  //when you run this code the data will be saved try it with your data and see if it saves succesfully
  await Sarcophagus.save();
  await ScarabBeetle.save();
  await Sphinx.save();
  await TheMummy.save();
  await UraeusTheCobra.save();

  // await inti.save();
  // await matecito.save();
  //after you run this code your data should be stored on the db
}
