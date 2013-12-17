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

exports.getTopic = function() {
  return topics[~~(Math.random()*topics.length)];
};