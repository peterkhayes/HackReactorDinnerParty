/*
  This module is a directory of students.  The format is name:email.

  TODO: update this to use a database or API, instead of this janky object.
*/

var directory = {
  'John':'email@imaginaryemailserver.com',
  'Kate':'email@imaginaryemailserver.com',
  'Peter':'email@imaginaryemailserver.com',
  'Alex':'email@imaginaryemailserver.com',
  'Alvin':'email@imaginaryemailserver.com',
  'Kevin':'email@imaginaryemailserver.com',
  'Stewie':'email@imaginaryemailserver.com',
  'Steve':'email@imaginaryemailserver.com',
  'Jason':'email@imaginaryemailserver.com',
  'Kyle':'email@imaginaryemailserver.com',
  'Matt':'email@imaginaryemailserver.com',
  'Roger':'email@imaginaryemailserver.com',
  'Sara':'email@imaginaryemailserver.com',
  'Jennie':'email@imaginaryemailserver.com',
  'Zara':'email@imaginaryemailserver.com',
  'Wing':'email@imaginaryemailserver.com',
  'Cat Prince':'email@imaginaryemailserver.com',
  'Watermelon':'email@imaginaryemailserver.com',
  'Appleby':'email@imaginaryemailserver.com',
  'Weatherby':'email@imaginaryemailserver.com',
  'Madison':'email@imaginaryemailserver.com',
  'Alabama':'email@imaginaryemailserver.com',
  'Kara':'email@imaginaryemailserver.com',
  'Keenan':'email@imaginaryemailserver.com',
  'Jack':'email@imaginaryemailserver.com',
  'Imogen':'email@imaginaryemailserver.com',
  'Bob':'email@imaginaryemailserver.com',
  'Aardvark':'email@imaginaryemailserver.com',
  'Molinere':'email@imaginaryemailserver.com',
  'Prometheus':'email@imaginaryemailserver.com'
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