/*
  This module is a directory of students.  The format is name:email.

  TODO: update this to use a database or API, instead of this janky object.
*/

var directory = {
  'Peter Hayes':'peter.k.hayes@gmail.com',
  'Peter Other Hayes':'citydreams@gmail.com',
  'Peter Yahoo Hayes':'peterkhayes@yahoo.com'
};

// var directory = {
//   'Daniel Liebeskind':'daniel.liebeskind@gmail.com',
//   'Will Keleher':'will.keleher@gmail.com',
//   'Peter Hayes':'peter.k.hayes@gmail.com',
//   'David Hall':'david.ryan.hall@gmail.com',
//   'Bradford Cook':'bradfordh@gmail.com',
//   'Ian Hinsdale':'ihinsdale@gmail.com',
//   'Rick Cerf':'rickcerf@gmail.com',
//   'Adam Witzel':'adam.witzel@gmail.com',
//   'Collen Jones':'collenjones@gmail.com',
//   'Joey Yang':'joey.yang@gmail.com',
//   'Stephen Grider':'ste.grider@gmail.com',
//   'Emma Tang':'yiqiaotang@gmail.com',
//   'George Bonner':'g.e.bonner@gmail.com',
//   'Leighton Kaina':'leighton.kaina@gmail.com',
//   'Keunhaeng (Ken) Huh':'ballaholicken@gmail.com',
//   'Woon Ket Wong':'woonketwong@hotmail.com',
//   'Pieter de Jong':'pieter.a.dejong@gmail.com',
//   'Gavin Shriver':'gavin.shriver@gmail.com',
//   'Ryan Roxas-Chua':'ryanaroxas@gmail.com',
//   'Rich Parrish':'tradename@gmail.com',
//   'Alex Prokop':'alex.prokop@gmail.com',
//   'Jeff Lee':'leejeffc@gmail.com',
//   'Ben Martin':'ben@martinben.com',
//   'Shanshan Zhu':'sszhupku@gmail.com',
//   'Michael Munson':'michaelmunson1@gmail.com',
//   'Hongxu Liu':'djshu.us@gmail.com',
//   'Kate Jenkins':'catherine.ann.jenkins@gmail.com',
//   'Patrick Stanger':'pstanger@gmail.com',
//   'David Gonzalez':'gonzalez.dalex@gmail.com',
//   'Andre Evangelesta':'andre.evangelesta@gmail.com',
//   'Kevin Moore':'k.james.moore@gmail.com',
//   'Tyler McGinnis':'tylermcginnis33@gmail.com',
//   'Lindsay Hertz':'lindsay.hertz@gmail.com',
//   'Kristina Garfinkel':'kristina.garfinkel@gmail.com',
//   'Aysegul Yonet':'aysegulyonet@gmail.com',
//   'Matt Silverstein':'matt@mattsilverstein.com',
//   'Matthew Goo':'mattgoo@gmail.com',
//   'Will Ngo':'wngo87@gmail.com',
//   'Brett Hoyer':'jbretthoyer@gmail.com',
//   'Douglas Kong':'kongdouglas@gmail.com',
//   "Michael O'brien":'michael.obrien.a@gmail.com',
//   'Daniel Miller':'danielmiller@alum.calarts.edu',
//   'Brian Weidenbaum':'brianweiden@gmail.com',
//   'Blake West':'bwest87@gmail.com',
//   'Jess MacQueen':'jessmacqueen@gmail.com',
//   'Ryan Stellar':'rstellar@gmail.com',
//   'Ruben Abergel':'ruben.abergel@gmail.com',
//   'Curtis Mitchell':'curtis.l.mitchell@gmail.com',
//   'Rupa Sharma':'rupasharma86@gmail.com',
//   'Andrew Delikat':'andrewdelikat@gmail.com',
//   'Peter Schroedl':'peter_schroedl@me.com',
//   'Elie Kiwan':'elie.kiwan@gmail.com',
//   'Martin Henry-Castaneda':'emailnitram@gmail.com',
//   'Tae Jo':'taehwanjo@gmail.com',
//   'Michael Nason':'michael@nason.us',
//   'Ed Hsieh':'eddyfh@gmail.com'
// };

exports.getNameList = function() {
  var result = [];
  for (var name in directory) {
    result.push(name);
  }
  return result;
};

exports.getEmail = function(name) {
  return directory[name];
};