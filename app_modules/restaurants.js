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
  "Farmer Brown's"
];

exports.getRestaurant = function() {
  return restaurants[~~(Math.random()*restaurants.length)];
};