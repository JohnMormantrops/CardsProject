function cardClass(nation, name, image, attack, defense) {
  this.name = name;
  this.nation = nation;
  this.image = image;
  this.attack = attack;
  this.defense = defense;
}

var card1 = new cardClass(
  "norse",
  "Thor",
  "https://github.com/JohnMormantrops/Images/blob/main/thor.jpg?raw=true",
  "Lightning Attack \n 5 damage",
  "Morale Boost +1 defense for all troops"
);
var card2 = new cardClass(
  "china",
  "Thief",
  "https://github.com/JohnMormantrops/Images/blob/main/thief.jpg?raw=true",
  "Steal \n draw two from opponents deck",
  "Sneak away \n +3 defense"
);
var card3 = new cardClass(
  "southamerican",
  "Inti",
  "https://github.com/JohnMormantrops/Images/blob/main/inti.jpg?raw=true",
  "Sun blast \n +4 damage",
  "Blinding rays\n +5 defense"
);
//var card4 = newClass();

let cardArray = [
  card1,
  card2,
  card3,
  card1,
  card2,
  card3,
  card1,
  card2,
  card3,
  card1,
  card2,
  card3,
  card1,
  card2,
  card3,
  card1,
  card2,
  card3,
  card1,
  card2
];

console.log("making cards array");
console.log(cardArray);

export default cardArray;
