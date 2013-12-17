var directory = require('./directory');
var email = require('./email');

exports.students = function(req, res) {
  res.send(JSON.stringify(directory.getNameList()));
};

exports.go = function(req, res) {
  var participants = req.body;

  console.log("Participants:", participants);

  // Set up batch sizes so everyone is in groups of 3 or 4.
  var total = participants.length;
  var batchSizes = [];
  if (total > 5) {
    var breakPoint = 0; // The number under which we need to switch to groups of 3.
    if (total % 4 === 1) { // Numbers like 9, 13, or 17 will require 3 groups of 3.
      breakPoint = 9;
    } else if (total % 4 === 2) { // Numbers like 6, 10, or 14 require 2 groups of 3.
      breakPoint = 6;
    } else if (total % 4 === 3) { // Numbers like 7, 11, or 15 require 1 group of 3.
      breakPoint = 3;
    } // Notice that if total is a multiple of 4, everyone goes in groups of 4.
    while (total > breakPoint) {
      batchSizes.push(4);
      total -= 4;
    }
    while (total > 0) {
      batchSizes.push(3);
      total -= 3;
    }
  } else { // If we have 5 or fewer people, put everyone in one group.
    batchSizes = [total];
  }

  var groups = [];
  var batch = [];
  while (participants.length) {
    var randIdx = ~~(Math.random()*participants.length);
    batch.push(participants.splice(randIdx, 1)[0]); // Put a random person in the batch.
    if (batch.length === batchSizes[0]) { // Send off an email if we have a full batch.
      batchSizes.shift();
      email.mailTo(batch);
      groups.push(batch);
      batch = [];
    }
  }
  res.send(JSON.stringify(groups));
};