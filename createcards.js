const mongoose = require("mongoose");


//db uri is our key to the mongo atlasd database use the below code to connect to the database
const dbURI =
    "mongodb+srv://TeamRowan:ipOzz8isdphk79RL@cluster0.tggfz.mongodb.net/TeamRowan?retryWrites=true&w=majority";

mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async function (result) {
        console.log("db connected");

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


        const cards = [
            new Card({
                name: "Odin",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Odin.jpg?raw=true",
                attack: "Odins penetrating spear +6 attack",
                defense: "Odins wisdom +2 defense to all troops",
                paragraph:
                    "The chief god, master of wisdom, magic and poetry. Armoured in gold, Blind in one eye. His ravens flew throughout the world and reported to him each night",
            }),
            new Card({
                name: "Thor",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Thor.jpg?raw=true",
                attack: "Thors hammer Mjolnir never misses +2 to all Norse attack",
                defense: "Thunder shield +5 defense",
                paragraph:
                    "God of Thunder, fearsome to his enemies. Thor possesed a powerful hammer Mjolnir which always struck its target and returned to his hand",
            }),
            new Card({
                name: "Heimdall's horn",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Heimdalls%20Horn.jpg?raw=true",
                attack: "Warn of Ranarok, (Summon Ragnarok from your deck)",
                defense: "Keep watch +2 defense for Norse",
                paragraph:
                    "Heimdall was the watcher of the god, stationed on rainbow bridge. His trumpet announces the coming of Ragnarok.",
            }),
            new Card({
                name: "Ragnarock",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Ragnarok.jpg?raw=true",
                attack: "Doomsday +8 attack (When summoned by Heimdall's horn)",
                defense: "Await Heimdalls horn",
                paragraph:
                    "The Norse gods feared the coming of Ragnarok or doomsday. There will be a great battle between monsters and the gods. Heimdall's horn will sound before the coming of Ragnarock.",
            }),
            new Card({
                name: "Loki",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Loki.jpg?raw=true",
                attack: "Mischief, steal two cards from opponent",
                defense: "Shapeshift +4 defense",
                paragraph:
                    "The god of mischief. Full of malice and cunning. With the ability to shapeshift He played tricks on the gods until bound in a cavern.",
            }),
            new Card({
                name: "Baldur",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Baldur.jpg?raw=true",
                attack: "Invincible assault +4 attack",
                defense: "Cleanse evil remove an enemy from the field",
                paragraph:
                    "The god of light, bravery, purity and joy. Possesed invincibilty except to mistletoe. A favourite of the Norse",
            }),
            new Card({
                name: "Apple of Idunn",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Apple%20Of%20Idun.jpg?raw=true",
                attack: "Poison apple -3 to enemy attackers",
                defense: "Apple of youth +2 defense to all norse",
                paragraph:
                    "Idunn is the goddess of youth, her apples give eternal life to the gods.",
            }),
            new Card({
                name: "Freya",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Freya.jpg?raw=true",
                attack: "Entice warriors to battle +2 to all Norse attckers",
                defense: "Protective cloak of feathers +4 defense",
                paragraph:
                    "Goddess of love and fertility, sorcery and death. She had her pick of fallen warriors who she would bring to her hall in the afterlife",
            }),
            new Card({
                name: "Mimir",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Mimir.jpg?raw=true",
                attack: "Seek knowledge (view your opponents hand)",
                defense: "Knowledge of Mimir (Double Odins defensive ability)",
                paragraph:
                    "Wisest of all the gods he was decpitated for fear of his knowledge. His decapitated head was preserved by Odin",
            }),
            new Card({
                name: "Nilfheim",
                nation: "Norse",
                image: "https://github.com/JohnMormantrops/Images/blob/main/niflheim.jpg?raw=true",
                attack: "Cold Icy hell +3 attack",
                defense: "Avoid death for fear of Hell +2 defense all Norse",
                paragraph:
                    "The Norse icy hell, if a warrior died a dishonourable death they would go straight to Nilfheim",
            }),
            new Card({
                name: "Tyr",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Tyr.jpg?raw=true",
                attack: "Brew of the gods +2 attck all Norse",
                defense: "Sacrifice +3 defense",
                paragraph:
                    "The god of warriors and heroes, he scarificed his hand to a monster to save the gods. He brews beer for the gods in the giant cauldron he stole from his father",
            }),
            new Card({
                name: "Valhalla",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Valhalla.jpg?raw=true",
                attack: "To Valhalla!! +3 to all Norse attackers",
                defense: "Move a card from defense to attack",
                paragraph:
                    "Every Norse man dreams of an afterlife in the halls of Valhalla where they can drink with Odin, but only those who die in battle may travel there.",
            }),
            new Card({
                name: "Valkyrie",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/valkyrie.jpg?raw=true",
                attack: "Charge of the Valkyrie +4 attack",
                defense: "Guiding hand +2 defense to all soldiers",
                paragraph:
                    "Maidens and servents of Odin, bearing golden shields and helmets they ride to battle and guide those they deem worthy to Valhalla.",
            }),
            new Card({
                name: "Ymir",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Ymir.jpg?raw=true",
                attack: "Father the gods (bring two Norse gods to join the attack)",
                defense: "Creation bring two Norse Items to the defense",
                paragraph:
                    "Born of ice and fire, the first being to come into existence, the gods sprang from the legs of this hermaphroditic god.",
            }),
            new Card({
                name: "Odin's Ravens",
                nation: "Norse",
                image:
                    "https://github.com/JohnMormantrops/Images/blob/main/Odins%20Ravens.jpg?raw=true",
                attack: "Fly over the enemy (view your enemies cards)",
                defense: "Scouting trip +3 defense all Norse",
                paragraph:
                    "Huginn and Munnin the two ravens of Odin. They flew around the world each day and delivered everything they saw and heard to Odin",
            }),
            new Card({
                name: "Dragon King",
                nation: "Chinese",
                image:
                    "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/dragonKingOfTheEasternSea.jpg?raw=true",
                attack: "Flooding the earth(inflict water property damage)",
                defense: "Invalidate water property damage",
                paragraph:
                    "The king of the dragons, being responsible for raining.",
            }),
            new Card({
                name: "Big Thief",
                nation: "Chinese",
                image: "https://github.com/JohnMormantrops/Images/blob/main/thief.jpg?raw=true",
                attack: "Steal draw two from opponents deck",
                defense: "Sneak away +3 defense",
                paragraph: "The most famous thief in Chinese history, could steal everything he wants."
            }),
            new Card({
                name: "Bagua",
                nation: "Chinese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/bagua.png?raw=true",
                attack: "Add a buff to the attacker once: ignore the defender's defense.",
                defense: "Invalidate one attack",
                paragraph: "Legendary defence tool and strategy in Daoism."
            }),
            new Card({
                name: "Mars",
                nation: "Chinese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/mars.png?raw=true",
                attack: "At least 2 damages.",
                defense: "Invalidate at least 2 damages",
                paragraph: "The symbol of mars in ancient China."
            })
        ]

        await Card.deleteMany({});
        await Card.insertMany(cards);

        console.log(`${cards.length} cards updated!`);
        await mongoose.connection.close();
    })
    .catch(function (err) {
        console.log("db connection error!");
        console.log(err);
    });

