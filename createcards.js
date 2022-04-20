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



const Odin = new Card({
  name: "Odin",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Odin.jpg?raw=true",
  attack: "Odins penetrating spear +6 attack",
  defense: "Odins wisdom +2 defense to all troops",
  paragraph:
    "The chief god, master of wisdom, magic and poetry. Armoured in gold, Blind in one eye. His ravens flew throughout the world and reported to him each night",
});

const Thor = new Card({
  name: "Thor",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Thor.jpg?raw=true",
  attack: "Thors hammer Mjolnir never misses +2 to all Norse attack",
  defense:  "Thunder shield +5 defense",
  paragraph:
    "God of Thunder, fearsome to his enemies. Thor possesed a powerful hammer Mjolnir which always struck its target and returned to his hand",
});

const Heimdall = new Card({
  name: "Heimdall's horn",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Heimdalls%20Horn.jpg?raw=true",
  attack: "Warn of Ranarok, (Summon Ragnarok from your deck)",
  defense: "Keep watch +2 defense for Norse",
  paragraph:
    "Heimdall was the watcher of the god, stationed on rainbow bridge. His trumpet announces the coming of Ragnarok.",
});
const Ragnarok = new Card({
  name: "Ragnarock",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Ragnarok.jpg?raw=true",
  attack: "Doomsday +8 attack (When summoned by Heimdall's horn)",
  defense: "Await Heimdalls horn",
  paragraph:
    "The Norse gods feared the coming of Ragnarok or doomsday. There will be a great battle between monsters and the gods. Heimdall's horn will sound before the coming of Ragnarock.",
});
const Loki = new Card({
  name: "Loki",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Loki.jpg?raw=true",
  attack: "Mischief, steal two cards from opponent",
  defense: "Shapeshift +4 defense",
  paragraph:
    "The god of mischief. Full of malice and cunning. With the ability to shapeshift He played tricks on the gods until bound in a cavern.",
});
const Baldur = new Card({
  name: "Baldur",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Baldur.jpg?raw=true",
  attack: "Invincible assault +4 attack",
  defense: "Cleanse evil remove an enemy from the field",
  paragraph:
    "The god of light, bravery, purity and joy. Possesed invincibilty except to mistletoe. A favourite of the Norse",
});
const Apple = new Card({
  name: "Apple of Idunn",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Apple%20Of%20Idun.jpg?raw=true",
  attack: "Poison apple -3 to enemy attackers",
  defense: "Apple of youth +2 defense to all norse",
  paragraph:
    "Idunn is the goddess of youth, her apples give eternal life to the gods.",
});
const Freya = new Card({
  name: "Freya",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Freya.jpg?raw=true",
  attack: "Entice warriors to battle +2 to all Norse attckers",
  defense: "Protective cloak of feathers +4 defense",
  paragraph:
    "Goddess of love and fertility, sorcery and death. She had her pick of fallen warriors who she would bring to her hall in the afterlife",
});
const Mimir = new Card({
  name: "Mimir",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Mimir.jpg?raw=true",
  attack: "Seek knowledge (view your opponents hand)",
  defense: "Knowledge of Mimir (Double Odins defensive ability)",
  paragraph:
    "Wisest of all the gods he was decpitated for fear of his knowledge. His decapitated head was preserved by Odin",
});
const Nilfheim = new Card({
  name: "Nilfheim",
  nation: "Norse",
  image: "https://github.com/JohnMormantrops/Images/blob/main/niflheim.jpg?raw=true",
  attack: "Cold Icy hell +3 attack",
  defense: "Avoid death for fear of Hell +2 defense all Norse",
  paragraph:
    "The Norse icy hell, if a warrior died a dishonourable death they would go straight to Nilfheim",
});
const Tyr = new Card({
  name: "Tyr",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Tyr.jpg?raw=true",
  attack: "Brew of the gods +2 attck all Norse",
  defense: "Sacrifice +3 defense",
  paragraph:
    "The god of warriors and heroes, he scarificed his hand to a monster to save the gods. He brews beer for the gods in the giant cauldron he stole from his father",
});
const Valhalla = new Card({
  name: "Valhalla",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Valhalla.jpg?raw=true",
  attack: "To Valhalla!! +3 to all Norse attackers",
  defense: "Move a card from defense to attack",
  paragraph:
    "Every Norse man dreams of an afterlife in the halls of Valhalla where they can drink with Odin, but only those who die in battle may travel there.",
});
const Valkyrie = new Card({
  name: "Valkyrie",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/valkyrie.jpg?raw=true",
  attack: "Charge of the Valkyrie +4 attack",
  defense: "Guiding hand +2 defense to all soldiers",
  paragraph:
    "Maidens and servents of Odin, bearing golden shields and helmets they ride to battle and guide those they deem worthy to Valhalla.",
});
const Ymir = new Card({
  name: "Ymir",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Ymir.jpg?raw=true",
  attack: "Father the gods (bring two Norse gods to join the attack)",
  defense: "Creation bring two Norse Items to the defense",
  paragraph:
    "Born of ice and fire, the first being to come into existence, the gods sprang from the legs of this hermaphroditic god.",
});
const OdinsRavens = new Card({
  name: "Odin's Ravens",
  nation: "Norse",
  image:
    "https://github.com/JohnMormantrops/Images/blob/main/Odins%20Ravens.jpg?raw=true",
  attack: "Fly over the enemy (view your enemies cards)",
  defense: "Scouting trip +3 defense all Norse",
  paragraph:
    "Huginn and Munnin the two ravens of Odin. They flew around the world each day and delivered everything they saw and heard to Odin",
});




// console.log(Anubis.attack);

// console.log(inti.nation);

console.log("Saving?");

addTheCrap();

async function addTheCrap() {
  //when you run this code the data will be saved try it with your data and see if it saves succesfully
  await Odin.save();
  await OdinsRavens.save();
  await Ragnarok.save();
  await Thor.save();
  await Tyr.save();

  await Apple.save();
  await Baldur.save();
  await Freya.save();
  await Heimdall.save();
  await Loki.save();

  await Mimir.save();
  await Nilfheim.save();
  await Valhalla.save();
  await Valkyrie.save();
  await Ymir.save();
  

  // await inti.save();
  // await matecito.save();
  //after you run this code your data should be stored on the db
}
