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
        attack: "Mjolnir never misses +2 to all Norse",
        defense: "Thunder shield +5 defense",
        paragraph:
          "God of Thunder, fearsome to his enemies. Thor possesed a powerful hammer Mjolnir which always struck its target and returned to his hand",
      }),
      new Card({
        name: "Heimdall's horn",
        nation: "Norse",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Heimdalls%20Horn.jpg?raw=true",
        attack: "Warn of Ranarok, (Summon Ragnarok)",
        defense: "Keep watch +2 defense for Norse",
        paragraph:
          "Heimdall was the watcher of the god, stationed on rainbow bridge. His trumpet announces the coming of Ragnarok.",
      }),
      new Card({
        name: "Ragnarock",
        nation: "Norse",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Ragnarok.jpg?raw=true",
        attack: "Doomsday +8 (Summoned by Heimdall's horn)",
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
        defense: "Knowledge of Mimir Double Odins defense",
        paragraph:
          "Wisest of all the gods he was decpitated for fear of his knowledge. His decapitated head was preserved by Odin",
      }),
      new Card({
        name: "Nilfheim",
        nation: "Norse",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/niflheim.jpg?raw=true",
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
        attack: "Bring two Norse gods to join the attack",
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
        paragraph: "The king of the dragons, being responsible for raining.",
      }),
      new Card({
        name: "Big Thief",
        nation: "Chinese",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/thief.jpg?raw=true",
        attack: "Steal draw two from opponents deck",
        defense: "Sneak away +3 defense",
        paragraph:
          "The most famous thief in Chinese history, could steal everything he wants.",
      }),
      new Card({
        name: "Bagua",
        nation: "Chinese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/bagua.png?raw=true",
        attack:
          "Add a buff: ignore defense.",
        defense: "Invalidate one attack",
        paragraph: "Legendary defence tool and strategy in Daoism.",
      }),
      new Card({
        name: "Mars",
        nation: "Chinese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/mars.png?raw=true",
        attack: "dragon ride +2.",
        defense: "block +2",
        paragraph: "The symbol of mars in ancient China.",
      }),
      new Card({
        name: "Fire Boy",
        nation: "Chinese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/fireBoy.png?raw=true",
        attack: "Spit fire +4",
        defense: "fire shield protect a chinese card from attack +6",
        paragraph: "Born from a gourd with 6 brothers. Can control fire.",
      }),
      new Card({
        name: "Somersault Cloud",
        nation: "Chinese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/somersaultCloud.png?raw=true",
        attack: "50/50 chance of getting one more turn",
        defense: "skip enemy turn",
        paragraph: "Special cloud, only kind people can take.",
      }),
      new Card({
        name: "Treasure Bowl",
        nation: "Chinese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/treasureBowl.png?raw=true",
        attack: "Get two new cards from the deck.",
        defense: "Prevent a rival from getting cards for one turn",
        paragraph:
          "A legendary bowl full of wealth. Anybody who found it would be the richest person in the world.",
      }),
      new Card({
        name: "Kitchen Knife",
        nation: "Chinese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/kitchenKnife.png?raw=true",
        attack:
          "damage proporational to the attack of an enemy.",
        defense: "Scare away +2 ",
        paragraph:
          "The most powerful weapon in the world. Even if you are a master in Wusu, you would submit yourself to the legendary weapon.",
      }),
      new Card({
        name: "Taoist Priest",
        nation: "Chinese",
        image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/taoistPriest.png?raw=true",
        attack: "Ignore the defense on one attack.",
        defense: "ignore One attack.",
        paragraph: "The priests in Taoism. In Chinese legendary stories, they can wind, fire, flash and raining."
      }),
      new Card({
        name: "The Great Wall",
        nation: "Chinese",
        image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/theGreatWall.png?raw=true",
        attack: "Archer volley +5",
        defense: "Ignore all physical attack in the next round and +5.",
        paragraph: "The defense of the ancient China. Never works."
      }),
      new Card({
        name: "The Flash Controller",
        nation: "Chinese",
        image: "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/flashController.png?raw=true",
        attack: "Summon flash stun enemy and +5",
        defense: "Avoid one attack using flash speed.",
        paragraph: "Created by a great thunderstorm, born to control flash."
      }),
      //9 Japanese cards
      new Card({
        name: "Bone",
        nation: "Japanese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_bone.png?raw=true",
        attack: "Attack guided by the lantern +8",
        defense: "hide oneself +2",
        paragraph:
          "Bone Woman is a pretty ghost that arose from the dead and kills bad guys in Japanese legends. She carried a traditional lantern to guide her.",
      }),
      new Card({
        name: "Fan",
        nation: "Japanese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_fan.jpg?raw=true",
        attack: "blow strong wind +4",
        defense: "defend from attack +1",
        paragraph: "A traditional asian folded fan belongs to a swordsman.",
      }),
      new Card({
        name: "Lantern",
        nation: "Japanese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_lamp.jpeg?raw=true",
        attack: "light up the sky and find the hidden enemy +4",
        defense: "See attack +3",
        paragraph: "A lamp brings you light and warmth.",
      }),
      new Card({
        name: "Maple",
        nation: "Japanese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_maple.jpg?raw=true",
        attack: "poison the enemy with 1 damage per turn",
        defense: "Hide beneath the maple tree +2",
        paragraph: "Japan is cover by falling maples in autumn.",
      }),
      new Card({
        name: "Mirror",
        nation: "Japanese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_mirror.jpg?raw=true",
        attack: "reflect the enemy with its damage",
        defense: "Copy an enemy defense",
        paragraph: "Geisha put on makeup in front of the mirror.",
      }),
      new Card({
        name: "Sakura",
        nation: "Japanese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_sakura.jpeg?raw=true",
        attack: "poison the enemy with 2 damage per turn",
        defense: "Transcience of life revive one card",
        paragraph: "Spring arrived when the sakura were blooming they represent renewal and optimism, blossoms also symbolize the transience of life, a major theme in Buddhism.",
      }),
      new Card({
        name: "Shrine",
        nation: "Japanese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_temple.png?raw=true",
        attack: "make offering swap card from hand with any from deck",
        defense: "Inner peace +3",
        paragraph: "Make an offering and you can find inner peace in a shrine",
      }),
      new Card({
        name: "Umbrella",
        nation: "Japanese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_umbrella.jpg?raw=true",
        attack: "block the view of enememy they miss one attack",
        defense: "Ward of spirits +5",
        paragraph: "In traditional Japanese weddings, the matron of honor would cover the bride with a red oil-paper umbrella upon arrival to ward off evil spirits",
      }),
      new Card({
        name: "Wave",
        nation: "Japanese",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/card_wave.jpg?raw=true",
        attack: "Tsunmai +7",
        defense: "Water wall +5",
        paragraph:
          "There's waves that are coming and you can't stop them from coming.",
      }),
      new Card({
        name: "Bald Eagle",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Eagle.jpg?raw=true",
        attack: "Swoop attack +5 attack",
        defense: "Fly away +4 defense",
        paragraph:
          "The founding fathers chose the bald eagle as an emblem of the nation symbolizing the strength and freedom of America.",
      }),
      new Card({
        name: "Fast Food",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Fast%20Food.jpg?raw=true",
        attack: "Heart Attack stop enemys turn",
        defense: "Quick meal energy boost +4",
        paragraph:
          "America has an obsession with fast food eating over $50 billion annually. Leading to high rates of obesity and heart attacks.",
      }),
      new Card({
        name: "Football",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Football.jpg?raw=true",
        attack: "High tackle +3",
        defense: "Scrimmage +2",
        paragraph:
          "For some people their sports team is their religion and 18 million americans attend games every year.",
      }),
      new Card({
        name: "Thomas Jefferson",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Jefferson.jpg?raw=true",
        attack: "Gather slaves. take opponents card",
        defense: "Declare independence +3",
        paragraph:
          "Thomas Jefferson is best known for signing the declaration of independence and also for his love of slaves.",
      }),
      new Card({
        name: "Jesus",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Jesus.png?raw=true",
        attack: "Rise again retrieve American card from dead.",
        defense: "Peace and love stop enemy attack",
        paragraph: "Jesus loves freedom, guns and America.",
      }),
      new Card({
        name: "Law Enforcement",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Law%20enforcement.png?raw=true",
        attack: "Shoot opponent + 2",
        defense: "Send opponents card to jail",
        paragraph:
          "Over 1000 people are killed by law-enforcement each year in America and around 10 million are sent to jail",
      }),
      new Card({
        name: "Manitou",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Manitou.jpg?raw=true",
        attack: "Call spirits +4",
        defense: "Shaman ceremony +5",
        paragraph:
          "The creator of all things and defeater of evil spirits, shamans called on him to do their bidding.",
      }),
      new Card({
        name: "Statue of liberty",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Statue%20of%20liberty.jpg?raw=true",
        attack: "Fight for liberty +1 all Americans",
        defense: "Symbol of freedom +2 all Americans",
        paragraph:
          "The statue of liberty is a symbol of American freedon gifted to them from France it represents a Roman Goddess.",
      }),
      new Card({
        name: "The dollar",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/The%20dollar.png?raw=true",
        attack: "Buy a unit. bring any card to the field",
        defense: "bribe the enemy stop an attack.",
        paragraph: "Everything revolves around the dollar in the modern world",
      }),
      new Card({
        name: "The Donald",
        nation: "America",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/Trump.png?raw=true",
        attack: "Cause division. enemy powers blocked",
        defense: "M.A.G.A +1 all gunholders",
        paragraph:
          "Elected in 2016 many Americans believe Donald is still the president of U.S",
      }),
      new Card({
        name: "Nagual",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/nagual.jpg?raw=true",
        attack: "Talon attack +3 damage",
        defense: "Quick escape by flight +3 defense",
        paragraph:
          "From Aztec mythology, this creature can shapeshift into any animal as long as he possesses their pelt",
      }),
      new Card({
        name: "Football",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/football.jpg?raw=true",
        attack: "Messi freekick to opponent's head +5",
        defense: "Team boost +1 attack to all SA cards in play",
        paragraph:
          "Football is Latin America's most popular sport. Do not underestimate its power.",
      }),
      new Card({
        name: "Encantado",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/encantado.jpg?raw=true",
        attack: "Charms opponent and bites +4 damage",
        defense: "Water damage resistant +4 defense",
        paragraph:
          "Tribes believed that dolphins turned into handsome men and emerged from the water during a full moon",
      }),
      new Card({
        name: "Curupira",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/curupira.jpg?raw=true",
        attack: "Surprise arrow attack +6 damage",
        defense: "Master of deception, escapes serious damage +7",
        paragraph:
          "This creature is famous for his backwards feet and he is a master of deception",
      }),
      new Card({
        name: "Boitata",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/boitata.jpg?raw=true",
        attack: "Blinding stare +8 damage",
        defense: "Resistant to fire attacks +10 defense",
        paragraph:
          "This fire breathing snake has its origins in Brazilian folklore. He is known for protecting nature and blinding people",
      }),
      new Card({
        name: "Iara",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/iara.jpg?raw=true",
        attack: "Tsunami +7 damage",
        defense: "Water shield +5 defense",
        paragraph:
          "Iara is a mermaid whose name translates to water queen. She lives in the Amazon River and kills fishermen who venture out alone",
      }),
      new Card({
        name: "Headless mule",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/headlessmule.jpg?raw=true",
        attack: "Fire +6 damage",
        defense: "Protects teammate +4 defense",
        paragraph:
          "Originally a woman, she was turned into a fire-spewing headless mule by god after sinning with a priest. This myth was brought to Brazil by Spanish colonizers",
      }),
      new Card({
        name: "Boi bumba",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/boibumba.jpg?raw=true",
        attack: "Ox ram attack +5 damage",
        defense: "Invincible +10 defense",
        paragraph:
          "This brazilian ox was resurrected from dead as he was his owner's favourite animal. The ox forgave his killers and Brazil celebrate the story of the ox every year",
      }),
      new Card({
        name: "One-legged woman",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/la-patosa-colombia-leyenda.jpg?raw=true",
        attack:
          "Counter-attack. Return Opponents attack",
        defense: "Animals unite to defend +2 defense",
        paragraph:
          "Like la Tunda, the one-legged woman roams the forests of Colombia in search of hunters. She is very protective of her territory and wants to protect animals from humans",
      }),
      new Card({
        name: "Headless priest",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/sacerdotesincabeza.jpg?raw=true",
        attack: "Divine powers from above +3 damage",
        defense: "Protected by a higher power +3 defense",
        paragraph:
          "After multiple apparitions in Ecuador, locals started reporting seeing a mysterious priest wandering the streets at night. It was revealed that a local priest used to sneak out after mass and visit various women in the village",
      }),
      new Card({
        name: "La tunda",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/latunda.jpg?raw=true",
        attack: "Scream +1 damage",
        defense: "Kidnap rival. Rival's attack has no effect",
        paragraph:
          "This Colombian demon shapeshifts to take the form of his victims' loved ones and traps them, keeping them in a forest",
      }),
      new Card({
        name: "Nightelf",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/elpombero.jpg?raw=true",
        attack: "Scare into submission +1 damage",
        defense: "Guardian +2 defense",
        paragraph:
          "Known locally as el pombero, this creature is supposed to have haunted Argentina and Paraguay's woodlands",
      }),
      new Card({
        name: "Puchman",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/ahPuchdemonofdeath.png?raw=true",
        attack: "Jump scare +1 damage",
        defense: "Draw one more card from deck",
        paragraph:
          "A Mayan death god who is associated with darkness and disaster but also childbirth and beginnings",
      }),
      new Card({
        name: "The crying woman",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/la-llorona.jpg?raw=true",
        attack: "Hysterical crying +2 damage",
        defense: "Steal one card",
        paragraph:
          "More commonly known as la llorona, this grieving mother roams the land in search of children to steal, after she killed her own.",
      }),
      new Card({
        name: "Goat man",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/huaychivo.jpg?raw=true",
        attack: "Ram +2 damage",
        defense: "Reduce opponent's attack by 1 damage",
        paragraph:
          "Half-man, half-beast, this Mayan creature is known to be very agressive.",
      }),
      new Card({
        name: "Matecito",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/matecito.jpg?raw=true",
        attack: "'Accidental' spill +1 damage",
        defense: "Replenishing drink +1 defense",
        paragraph:
          "Mate is a popular drink in countries where the Guarani natives once lived.",
      }),
      new Card({
        name: "Inti",
        nation: "SouthAmerican",
        image:
          "https://github.com/JohnMormantrops/Images/blob/main/inti.jpg?raw=true",
        attack: "sun burn +5 damage",
        defense: "blinding rays +5 defense",
        paragraph: "This is Inti, the ancient sun god in Mayan culture.",
      }),
      new Card({
        name: "Pan flute",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/peruvianpanflute.jpg?raw=true",
        attack: "Music disorientates opponent +1 attack",
        defense: "Music distracts opponent +3 defense",
        paragraph:
          "Traditional Peruvian musical instrument. It is easy to become mesmerized by its sound.",
      }),
      new Card({
        name: "Arepa",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/arepa.jpg?raw=true",
        attack: "Poison enemy +6 damage",
        defense: "Replenishing snack +6 defense",
        paragraph:
          "Arepas are a popular street food in Colombia and Venezuela.",
      }),
      new Card({
        name: "Mexican mural wall",
        nation: "SouthAmerican",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/Diego-Rivera-La-historia-de-M%C3%A9xico-de-la-conquista-al-futuro-1929-1935.-Mural-at-Palacio-Nacional-Ciudad-de-M%C3%A9xico.jpg?raw=true",
        attack: "No attack + 0 attack",
        defense: "Massive wall keeps enemies away + 9 defense",
        paragraph:
          "Muralism became very popular in Mexico during the 20th century. You can find beautiful murals painted on walls all over the country",
      }),
      new Card({
        name: "Trojan horse",
        nation: "Greek",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/trojanhorse.jpg?raw=true",
        attack: "Sneak attack +4 damage",
        defense: " Structure provides cover +4 defense",
        paragraph:
          "The Trojan horse was presented as a gift from the Greeks who hid soldiers inside in order to infiltrate the city of Troy.",
      }),
      new Card({
        name: "Hera",
        nation: "Greek",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/hera.jpg?raw=true",
        attack: "Extra damage against female enemies +4 damage (x2)",
        defense: "Order cows to defend +4 defense",
        paragraph:
          "Hera is the goddess of marriage and one of Zeus' wives. She is known to be very jealous of other women. Cows were sacred to Hera",
      }),
      new Card({
        name: "Zeus",
        nation: "Greek",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/zeus.jpg?raw=true",
        attack: "Lighting attack +10 damage",
        defense: " Natural body armour +10 defense",
        paragraph:
          "The god of all gods, Zeus is the most powerful Greek Deity.",
      }),
      new Card({
        name: "Apollo",
        nation: "Greek",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/apollo.jpg?raw=true",
        attack: "Lightning attck +6 damage",
        defense: " Immune to fire damage +4 defense",
        paragraph:
          "Son of Zeus and Leto, he is the god of light and is feared by everyone except his parents.",
      }),
      new Card({
        name: "Metis",
        nation: "Greek",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/metis.jpg?raw=true",
        attack: "Lure enemy into trap +5 damage",
        defense: "Makes a smart escape +5 defense",
        paragraph: "Zeus' first wife, Metis is the deity of wisdom.",
      }),
      new Card({
        name: "Athena",
        nation: "Greek",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/athena.jpg?raw=true",
        attack: "War chariot attack +4 damage",
        defense: " Sail away +2 defense",
        paragraph:
          "Known to be good at war strategy, Athena is often associated with inventing the ship and the chariot. A great asset for any team.",
      }),
      new Card({
        name: "Artemis",
        nation: "Greek",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/artemis.jpg?raw=true",
        attack: "Bow and arrow attack +7 damage",
        defense: "Healing hand +7 defense",
        paragraph:
          "Artemis is an excellent hunter and possesses the ability to heal allies.",
      }),
      new Card({
        name: "Dionysus",
        nation: "Greek",
        image:
          "https://raw.githubusercontent.com/Emma-martin1/CS353c-Rowan/main/folderCardImages/dionysus.jpg?raw=true",
        attack: "Lion attack +9 damage",
        defense: "Grows vine to impede enemy advance +8",
        paragraph:
          "Dionysus is an immortal and powerful god who can shapeshift and make wine.",
      }),
      new Card({
        name: "Ares",
        nation: "Greek",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/ares.jpg?raw=true",
        attack: "Spear attack +8 damage",
        defense: "Shield +8 defense",
        paragraph:
          "Ares is the god of war and son of Zeus and Hera. He represents the darker and violent side of war.",
      }),
      new Card({
        name: "Poseidon",
        nation: "Greek",
        image:
          "https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/poseidon.jpg?raw=true",
        attack: "Earthquake +5 damage",
        defense: "Immune to water damage +4 defense",
        paragraph:
          "God of the sea, Poseidon is powerful but can also be moody and unpredictable. He can cause earthquakes and control the waves.",
      }),
        new Card({
                name:"Demeter",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/demeter.jpg?raw=true",
                attack: "Poison rival's crops +3 damage",
                defense: "Harvest boost +2 defense for all Greeks",
                paragraph: "Known as the godess of agriculture, bread and grain, Demeter protects farming and vegetation. She is associated with fertility of the Earth."
            }),

 new Card({
                name:"Hades",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/hades.jpg?raw=true",
                attack: "Unexpected attack due to invisibility +5 damage",
                defense: "Immortality boost +4 defense for all Greeks",
                paragraph: "Hades, more commonly known today by his Roman name Pluto, is god of the underworld. He is a brother of Zeus and Poseidon and the 3 of them are the most powerful Greek gods."
            }),


new Card({
                name:"Persephone",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/persephone.jpg?raw=true",
                attack: "Summon the dead +2 damage",
                defense: "Disease resistant +2 defense",
                paragraph: "Persephone is the daughter of Zeus and Demeter, and wife of Hades."
            }),
new Card({
                name:"Hermes",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/hermes.jpg?raw=true",
                attack: "Steal an enemy's card",
                defense: "Distract enemy with music +2 defense",
                paragraph: "Credited with inventing the lyre, Hermes is the god of luck, fortune and thieves. He is considered to be the cleverest of the Olympian gods."
            }),
new Card({
                name:"Acropolis",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/acropolis.jpg?raw=true",
                attack: "Play another card",
                defense: "Safe refuge for Greeks +4 defense.",
                paragraph: "Acropolis is a combination of the Greek words for highest point and city and they are found all over Greece.The Acropolis of Athens is one of ancient Greece's most famous ruins. "
            }),

new Card({
                name:"Achilles",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/achilles.jpg?raw=true",
                attack: "Spear attack +7 damage",
                defense: "Protect his heal +7 defense",
                paragraph: "Achilles is a brave and handsome warrior most known for his heroic battle against the Trojans. His story appears in Homer's Iliad."
            }),
new Card({
                name:"Medusa",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/medusa.jpg?raw=true",
                attack: "Snake attack +3 damage",
                defense: "Scare off enemy +6 defense",
                paragraph: "Medusa is a monster who looks evil but is actually used to repel evil. Athena placed Medusa's severed head on her shield to protect her."
            }),
new Card({
                name:"Helios' chariot",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/helios.jpg?raw=true",
                attack: "Fire attack +6 damage",
                defense: "Escape danger +3 defense to all Greeks",
                paragraph: "This chariot belonged to Helio, the god of the sun. It crossed the sky from east to west each day."
            }),
new Card({
                name:"Pegasus",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/pegasus.jpg?raw=true",
                attack: "Hoof attack +8 damage",
                defense: "Fly away from attack +4 defense",
                paragraph: "Pegasus is the offspring of Medusa and was born as Medusa was being decapitated. He is very strong."
            }),
new Card({
                name:"Oedipus",
                nation: "Greek",
                image:"https://github.com/Emma-martin1/CS353c-Rowan/blob/main/folderCardImages/oedipus.jpg?raw=true",
                attack: "A strong ruler +1 attack to all greeks",
                defense: "Will not accept doomed destiny +4 defense",
                paragraph: "Oedipus is king of Thebes and he is the subject of a famous play that deals with destiny and free will."
            }),
      new Card({
        name: "Sarcophagus",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Sarcophagus.jpg?raw=true",
        attack: "Envelopment +4 damage",
        defense: "Safe Passage +4 defense",
        paragraph:
          "Surrounds enemy opponent while also provideing safe passage to user.",
      }),

      new Card({
        name: "Scarab Beetle",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Scarab%20Beetle.jpg?raw=true",
        attack: "Hard Shell +5 damage",
        defense: "Ressurection return 2 from dead",
        paragraph:
          "The Scarab Beetle attacks with a flying assault using its hard shell, while boosting owners health with Ressurection.",
      }),

      new Card({
        name: "Sphinx",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Sphinx.jpg?raw=true",
        attack: "Riddle Me This +5 damage",
        defense: "Tomb Protection +5 defense",
        paragraph:
          "The sphinx is an evil and cruel creature that asks riddles and those who cannot answer it have suffered the fate of being killed and eaten",
      }),

      new Card({
        name: "The Mummy",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/The%20Mummy.jpg?raw=true",
        attack: "Life Force Drain +12 damage",
        defense: "Immunity +10 defense",
        paragraph:
          "Immunity to all forms of attack and draining the life force of mortals, The Mummy has some of the strongest powers, combine the pharoah and the sarcophagus to summon",
      }),

      new Card({
        name: "Uraeus The Cobra",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Uraeus%20the%20Cobra.jpg?raw=true",
        attack: "Poison Strike +2 damage per turn",
        defense: "Wall of Flames +6 defense",
        paragraph:
          "Ureas The Cobra is a serpant goddess who wields fierce powers as she can use not only poison but flames against the enemies of the pharaoh.",
      }),

      new Card({
        name: "Pharaoh",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Pharaoh.jpg?raw=true",
        attack: "Wage War +7 damage",
        defense: "Starvation +5 defense",
        paragraph:
          "Pharaoh is the preserver of the god-given order, called maat, maintains order at home while waging war on opponents",
      }),

      new Card({
        name: "Anubis",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Anubis.jpg?raw=true",
        attack: "Rising Dead return two cards from the dead",
        defense: "Speed Dodge +3 defense",
        paragraph:
          "Anubis, son of Ra and Hesat, God of the dead, he posesses super strength and speed.",
      }),

      new Card({
        name: "Bastet",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Bastet.jpg?raw=true",
        attack: "Lethargy +3 damage",
        defense: "Shield +7 defense",
        paragraph:
          "Bastet, Goddess of protection, protects domain from spirits and disease",
      }),

      new Card({
        name: "Cleopatra",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Cleopatra.jpg?raw=true",
        attack: "Enchantment turn enemy card against them",
        defense: "Cunning +6 defense",
        paragraph:
          "Cleopatra, Queen of Egypt, charming, inteligent and ruthless.",
      }),

      new Card({
        name: "Eye of Horus",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Eye%20of%20Horus.jpg?raw=true",
        attack: "Health Drain +5 damage",
        defense: "Health Restore +5 defense",
        paragraph: "Protects and Restores health by taking opponents",
      }),

      new Card({
        name: "Ammit",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Ammit.jpg?raw=true",
        attack: "Time of Judgment +8 damage",
        defense: "Balance Attack +10",
        paragraph: "Ammit The Devourer of The Dead.",
      }),

      new Card({
        name: "Ankh",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Ankh.jpg?raw=true",
        attack: "Lifeforce Drain +2 damage",
        defense: "Restoration +10 defense",
        paragraph:
          "Ankh symbolises the key to life, boosts Egyptian cards health by +3",
      }),

      new Card({
        name: "Ba",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Ba.jpg?raw=true",
        attack: "Fight +5 damage",
        defense: "Flight +5 defense",
        paragraph:
          "Ba represents character, boosts an Egyptian cards attack by +2",
      }),

      new Card({
        name: "Ka",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Ka.jpeg?raw=true",
        attack: "+0 damage",
        defense: "+0 defense",
        paragraph:
          "Ka is the spirit, a universal force, and combined with with the Pharoah card boosts his attack to +10",
      }),

      new Card({
        name: "The Pharoahs Chariot",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Pharoahs%20Chariot.jpg?raw=true",
        attack: "+0 damage",
        defense: "+0 defense",
        paragraph:
          "The chariot of the Pharoah, when used by any Egyptian card, it will boost their defense to +8",
      }),

      new Card({
        name: "Nefertiti",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Queen.jpg?raw=true",
        attack: "Charm +8 damage",
        defense: "Hathors Crown +5 defense",
        paragraph: "One of the most powerful Queens to ever rule Egypt",
      }),

      new Card({
        name: "Sa",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Sa.jpg?raw=true",
        attack: "+0 damage",
        defense: "+0 defense",
        paragraph:
          "Sa the protector card, combined with any Egyptian card will add +5 to their defense",
      }),

      new Card({
        name: "The Nile",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/The%20Nile.jpg?raw=true",
        attack: "Flood +6 damage",
        defense: "Flood +6 defense",
        paragraph:
          "The Nile river will flood to protect advancement from enemies, while keeping the Egyptain cards mobile with their boats.",
      }),

      new Card({
        name: "The Great Pyramid",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/Pyramid.jpg?raw=true",
        attack: "Stiring +6 damage",
        defense: "Imposing +4 defense",
        paragraph:
          "The Great Pyramid of Giza, holds great power and is a symbol to the people of inspiration, and a warning to enemies",
      }),

      new Card({
        name: "People of Egypt",
        nation: "Egyptian",
        image:
          "https://github.com/lcroker/Card-Images/blob/main/People%20of%20Egypt.jpg?raw=true",
        attack: "Barage +6 damage",
        defense: "Shields +5 defense",
        paragraph:
          "The people of Egypt are cunning, dept, and can make a massive difference on the field",
      }),
    ];

    await Card.deleteMany({});
    await Card.insertMany(cards);

    console.log(`${cards.length} cards updated!`);
    await mongoose.connection.close();
  })
  .catch(function (err) {
    console.log("db connection error!");
    console.log(err);
  });
