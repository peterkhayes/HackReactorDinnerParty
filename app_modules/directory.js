/*
  This module is a directory of students.  The format is name:email.

  TODO: update this to use a database or API, instead of this janky object.
*/

var directory = {
  'Student 1':'email@imaginaryemailserver.com',
  'Student 2':'email@imaginaryemailserver.com',
  'Student 3':'email@imaginaryemailserver.com',
  'Student 4':'email@imaginaryemailserver.com',
  'Student 5':'email@imaginaryemailserver.com',
  'Student 6':'email@imaginaryemailserver.com',
  'Student 7':'email@imaginaryemailserver.com',
  'Student 8':'email@imaginaryemailserver.com',
  'Student 9':'email@imaginaryemailserver.com',
  'Student 10':'email@imaginaryemailserver.com',
  'Student 11':'email@imaginaryemailserver.com',
  'Student 12':'email@imaginaryemailserver.com',
  'Student 13':'email@imaginaryemailserver.com',
  'Student 14':'email@imaginaryemailserver.com',
  'Student 15':'email@imaginaryemailserver.com',
  'Student 16':'email@imaginaryemailserver.com',
  'Student 17':'email@imaginaryemailserver.com',
  'Student 18':'email@imaginaryemailserver.com',
  'Student 19':'email@imaginaryemailserver.com',
  'Student 20':'email@imaginaryemailserver.com',
  'Student 21':'email@imaginaryemailserver.com',
  'Student 22':'email@imaginaryemailserver.com',
  'Student 23':'email@imaginaryemailserver.com',
  'Student 24':'email@imaginaryemailserver.com',
  'Student 25':'email@imaginaryemailserver.com',
  'Student 26':'email@imaginaryemailserver.com',
  'Student 27':'email@imaginaryemailserver.com',
  'Student 28':'email@imaginaryemailserver.com',
  'Student 29':'email@imaginaryemailserver.com',
  'Student 30':'email@imaginaryemailserver.com',
  'Student 31':'email@imaginaryemailserver.com',
  'Student 32':'email@imaginaryemailserver.com',
  'Student 33':'email@imaginaryemailserver.com',
  'Student 34':'email@imaginaryemailserver.com',
  'Student 35':'email@imaginaryemailserver.com',
  'Student 36':'email@imaginaryemailserver.com',
  'Student 37':'email@imaginaryemailserver.com',
  'Student 38':'email@imaginaryemailserver.com',
  'Student 39':'email@imaginaryemailserver.com',
  'Student 40':'email@imaginaryemailserver.com',
  'Student 41':'email@imaginaryemailserver.com',
  'Student 42':'email@imaginaryemailserver.com',
  'Student 43':'email@imaginaryemailserver.com',
  'Student 44':'email@imaginaryemailserver.com',
  'Student 45':'email@imaginaryemailserver.com',
  'Student 46':'email@imaginaryemailserver.com',
  'Student 47':'email@imaginaryemailserver.com',
  'Student 48':'email@imaginaryemailserver.com',
  'Student 49':'email@imaginaryemailserver.com',
  'Student 50':'email@imaginaryemailserver.com',
  'Student 51':'email@imaginaryemailserver.com',
  'Student 52':'email@imaginaryemailserver.com',
  'Student 53':'email@imaginaryemailserver.com',
  'Student 54':'email@imaginaryemailserver.com',
  'Student 55':'email@imaginaryemailserver.com',
  'Student 56':'email@imaginaryemailserver.com',
  'Student 57':'email@imaginaryemailserver.com',
  'Student 58':'email@imaginaryemailserver.com',
  'Student 59':'email@imaginaryemailserver.com',
  'Student 60':'email@imaginaryemailserver.com',
  'Student 61':'email@imaginaryemailserver.com',
  'Student 62':'email@imaginaryemailserver.com',
  'Student 63':'email@imaginaryemailserver.com',
  'Student 64':'email@imaginaryemailserver.com',
  'Student 65':'email@imaginaryemailserver.com',
  'Student 66':'email@imaginaryemailserver.com'
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