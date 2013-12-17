var directory = require('./directory');
var email = require('./email');
var pairing = require('./pairing');

exports.students = function(req, res) {
  res.send(JSON.stringify(directory.getNameList()));
};

exports.match = function(req, res) {
  var participants = req.body;

  var groups = pairing.makeGroups(participants);

  for (var i = 0; i < groups.length; i++) {
    var group = groups[i];
    email.mailTo(group);
  }

  res.send(JSON.stringify(groups));
};