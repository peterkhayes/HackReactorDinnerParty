/*
  This module returns suggestions of restaurants and topics to eat at.
*/

var restaurants = [
  'Taqueria Castillo',
  'Little Delhi',
  'The Westfield Food Court',
  'Tu Lan',
  'Show Dogs',
  'Split Pea Seduction',
  'Chipotle',
  'Miss Saigon',
  'Super Duper Burger',
  'Spicy Garden',
  "Farmer Brown's",
  'Subway',
  "Chico's Pizza",
  'Taqueria Cancún',
  'Dojima Ann',
  'King of Thai',
  'Tempest',
  'Punjab Kabab House'
];

var topics = [
  "your past life before Hack Reactor",
  "the meaning of life",
  "trends in technology",
  "why?",
  "live music",
  "recursion",
  "which superhero would win in a fight",
  "your favorite travel destinations",
  "drones",
  "Tinder",
  "a post-scarcity society",
  "fracking",
  "The Wire",
  "Doug's beard",
  "wine",
  "the neighborhoods of San Francisco",
  "programming languages",
  "Dinner Roulette",
  "Marcus and his many past careers",
  "iOS vs Android",
  "historical reenactments",
  "the most useless piece of knowledge you know",
  "some of your more intriguing classmates"
];

exports.getTopics = function(count) {
  if (count > topics.length) throw "Not enough topics.";
  count = count || 1;
  var result = [];
  while (count) {
    var topic = topics[~~(Math.random()*topics.length)];
    if (result.indexOf(topic) === -1) {
      result.push(topic);
      count--;
    }
  }
  return result;
};

exports.getRestaurants = function(count) {
  if (count > restaurants.length) throw "Not enough restaurants.";
  count = count || 1;
  var result = [];
  while (count) {
    var rest = restaurants[~~(Math.random()*restaurants.length)];
    if (result.indexOf(rest) === -1) {
      result.push(rest);
      count--;
    }
  }
  return result;
};