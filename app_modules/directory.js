var directory = {
  'Daniel Liebeskind':'daniel.liebeskind@gmail.com',
  'Will Keleher':'will.keleher@gmail.com',
  'Peter Hayes':'peter.k.hayes@gmail.com',
  'David Hall':'david.ryan.hall@gmail.com',
  'Bradford Cook':'bradfordh@gmail.com',
  'Ian Hinsdale':'ihinsdale@gmail.com',
  'Rick Cerf':'rickcerf@gmail.com',
  'Adam Witzel':'adam.witzel@gmail.com',
  'Collen Jones':'collenjones@gmail.com',
  'Joey Yang':'joey.yang@gmail.com',
  'Stephen Grider':'ste.grider@gmail.com',
  'Emma Tang':'yiqiaotang@gmail.com',
  'George Bonner':'g.e.bonner@gmail.com',
  'Leighton Kaina':'leighton.kaina@gmail.com',
  'Keunhaeng (Ken) Huh':'ballaholicken@gmail.com',
  'Woon Ket Wong':'woonketwong@hotmail.com',
  'Pieter de Jong':'pieter.a.dejong@gmail.com',
  'Gavin Shriver':'gavin.shriver@gmail.com',
  'Ryan Roxas-Chua':'ryanaroxas@gmail.com',
  'Rich Parrish':'tradename@gmail.com',
  'Alex Prokop':'alex.prokop@gmail.com',
  'Jeff Lee':'leejeffc@gmail.com',
  'Ben Martin':'ben@martinben.com',
  'Shanshan Zhu':'sszhupku@gmail.com',
  'Michael Munson':'michaelmunson1@gmail.com',
  'Hongxu Liu':'djshu.us@gmail.com',
  'Kate Jenkins':'catherine.ann.jenkins@gmail.com',
  'Patrick Stanger':'pstanger@gmail.com'
};

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