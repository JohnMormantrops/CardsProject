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
            }),
            new Card({
                name: "Fire Boy",
                nation: "Chinese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/fireBoy.png?raw=true",
                attack: "Spit out fire(fire property damage)",
                defense: "Invalidate fire property damage",
                paragraph: "Born from gourd with 6 brothers. Can control fire."
            }),
            new Card({
                name: "Somersault Cloud",
                nation: "Chinese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/somersaultCloud.png?raw=true",
                attack: "Have a chance of getting one more turn in the same round",
                defense: "Have a chance of skipping the turn",
                paragraph: "Special cloud, only kind people can take."
            }),
            new Card({
                name: "Treasure Bowl",
                nation: "Chinese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/treasureBowl.png?raw=true",
                attack: "Get two new cards from the deck.",
                defense: "Prevent a rival from getting cards for one turn",
                paragraph: "A legendary bowl full of wealth. Anybody who found it would be the richest person in the world."
            }),
            new Card({
                name: "Kitchen Knife",
                nation: "Chinese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/kitchenKnife.png?raw=true",
                attack: "Incur damages that are proporational to the attack of the character.",
                defense: "Never defense.",
                paragraph: "The most powerful weapon in the world. Even if you are a master in Wusu, you would submit yourself to the legendary weapon."
            }),
            //9 Japanese cards
            new Card({
                name: "Bone",
                nation: "Japanese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_bone.png?raw=true",
                attack: "attack plants with 3 damages",
                defense: "hide oneself and invalidate 2 damage",
                paragraph: "Bone Woman is a pretty ghost that kills bad guys in Japanese legends."
            }),
            new Card({
                name: "Fan",
                nation: "Japanese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_fan.jpg?raw=true",
                attack: "blow strong wind to put out fire with 2 damage ",
                defense: "defend from shot and invalidate 1 damage",
                paragraph: "A traditional asian folded fan belongs to a swordsman."
            }),
            new Card({
                name: "Lamp",
                nation: "Japanese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_lamp.jpeg?raw=true",
                attack: "light up the sky and find the hidden enermy with 1 attack",
                defense: "invalidate 1 damage from wind",
                paragraph: "A lamp brings you light and warmth."
            }),
            new Card({
                name: "Maple",
                nation: "Japanese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_maple.jpg?raw=true",
                attack: "poison the enermy with 1 damage",
                defense: "invalidate 1 damage from bone",
                paragraph: "Falling maples in autumn."
            }),
            new Card({
                name: "Mirror",
                nation: "Japanese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_mirror.jpg?raw=true",
                attack: "reflect the enermy with its damage",
                defense: "invalidate 2 damage from anyone",
                paragraph: "Geisha put on makeup in front of the mirror."
            }),
            new Card({
                name: "Sakura",
                nation: "Japanese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_sakura.jpeg?raw=true",
                attack: "poison the enermy with 2 damage",
                defense: "invalidate 1 damage from bone",
                paragraph: "Spring arrived when the sakura were blooming"
            }),
            new Card({
                name: "Shrine",
                nation: "Japanese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_temple.png?raw=true",
                attack: "make everyting static with 1 damage",
                defense: "invalidate 1 damage from poison or wind",
                paragraph: "You can find inner peace in a shrine"
            }),
            new Card({
                name: "Umbrella",
                nation: "Japanese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_umbrella.jpg?raw=true",
                attack: "block the view of enermy with 1 damage",
                defense: "invalidate 1 damage from water",
                paragraph: "An umbrella shelters you from the rain."
            }),
            new Card({
                name: "Wave",
                nation: "Japanese",
                image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_wave.jpg?raw=true",
                attack: "put out fire with 3 damage",
                defense: "invalidate 1 damage from temple",
                paragraph: "There's waves that are coming and you can't stop them from coming."
            }),
            new Card({
                name: "Bald Eagle",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/Eagle.jpg?raw=true",
                attack: "Swoop attack +5 attack",
                defense: "Fly away +4 defense",
                paragraph: "The founding fathers chose the bald eagle as an emblem of the nation symbolizing the strength and freedom of America.",
            }), new Card({
                name: "Fast Food",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/Fast%20Food.jpg?raw=true",
                attack: "Heart Attack +3",
                defense: "Quick meal energy boost +4",
                paragraph: "America has an obsession with fast food eating over $50 billion annually. Leading to high rates of obesity and heart attacks.",
            }),
            new Card({
                name: "Football",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/Football.jpg?raw=true",
                attack: "High tackle +3",
                defense: "Scrimmage +2",
                paragraph: "For some people their sports team is their religion and 18 million americans attend games every year.",
            }),
            new Card({
                name: "Thomas Jefferson",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/Jefferson.jpg?raw=true",
                attack: "Gather slaves. take opponents card",
                defense: "Declare independence +3",
                paragraph: "Thomas Jefferson is best known for signing the declaration of independence and also for his love of slaves.",
            }),
            new Card({
                name: "Jesus",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/Jesus.png?raw=true",
                attack: "Rise again. retrieve a card from the dead.",
                defense: "Peace and love stop enemy attack",
                paragraph: "Jesus loves freedom, guns and America.",
            }),
            new Card({
                name: "Law Enforcement",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/Law%20enforcement.png?raw=true",
                attack: "Shoot opponent + 2",
                defense: "Send opponents card to jail",
                paragraph: "Over 1000 people are killed by law-enforcement each year in America and around 10 million are sent to jail",
            }),
            new Card({
                name: "Manitou",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/Manitou.jpg?raw=true",
                attack: "Call spirits +4",
                defense: "Shaman ceremony +5",
                paragraph: "The creator of all things and defeater of evil spirits, shamans called on him to do their bidding.",
            }),
            new Card({
                name: "Statue of liberty",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/Statue%20of%20liberty.jpg?raw=true",
                attack: "Fight for liberty +3",
                defense: "Symbol of freedom +2",
                paragraph: "The statue of liberty is a symbol of American freedon gifted to them from France it represents a Roman Goddess.",
            }),
            new Card({
                name: "The dollar",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/The%20dollar.png?raw=true",
                attack: "Buy a unit. bring any card to the field",
                defense: "bribe the enemy stop an attack.",
                paragraph: "Everything revolves around the dollar in the modern world",
            }),
            new Card({
                name: "The Donald",
                nation: "America",
                image: "https://github.com/JohnMormantrops/Images/blob/main/Trump.png?raw=true",
                attack: "Cause division. enemy powers blocked",
                defense: "M.A.G.A +1",
                paragraph: "Elected in 2016 many Americans believe Donald is still the president of U.S",
            }),

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

