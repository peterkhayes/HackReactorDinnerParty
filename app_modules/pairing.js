var directory = require ('./directory');

var nameList = directory.getNameList();

// For each user, initialize a list of the number of times
// they have eaten with each other user.
var pairings = {};
for (var i = 0; i < nameList.length; i++) {
  var user = nameList[i];
  pairings[user] = {};
  for (var j = 0; j < nameList.length; j++) {
    var pair = nameList[j];
    if (pair !== user) {
      pairings[user][pair] = 0;
    }
  }
}

// User 1 and user 2 are going to eat together.
var pair = function(user1, user2) {
  pairings[user1][user2]++;
  pairings[user2][user1]++;
};

// For each pair of users in a batch, update the pairings list.
var makePairings = function(batch) {
  for (var i = 0; i < batch.length; i++) {
    for (var j = i+1; j < batch.length; j++) {
      pair(batch[i], batch[j]);
    }
  }
};

// Find the total number of pairings between all users in a batch.
var getPairings = function(batch) {
  var count = 0;
  for (var i = 0; i < batch.length; i++) {
    for (var j = i+1; j < batch.length; j++) {
      count += pairings[batch[i]][batch[j]];
    }
  }
  return count;
};

// Given an array of users, find a user not in the array but in participants
// such that the total pairings between all members is minimized.
var findBestAddition = function(batch, possibilities) {
  var best;
  var min = Infinity;
  for (var i = 0; i < possibilities.length; i++) {
    var possibility = possibilities[i];
    if (batch.indexOf(possibility) === -1) { // If this person is not in our list.
      var total = getPairings(batch.concat([possibility]));
      if (total < min) {
        best = possibility;
        min = total;
      }
    }
  }
  return best;
};

module.exports.makeGroups = function(participants) {
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

  // We're going to run this algorithm 50 times and pick the best result.
  // Because we can.  v8.
  var bestGrouping;
  var leastTotalPastPairings = Infinity;
  for (var i = 0; i < 50; i++) {
    var groups = [];
    var batch = [];
    var remainingParticipants = participants.slice();
    var remainingBatches = batchSizes.slice();
    while (remainingParticipants.length) {

      // If we have only one batch left, put everyone remaining in.
      if (remainingBatches.length === 1) {
        remainingBatches.shift();
        groups.push(remainingParticipants);
        batch = [];
        remainingParticipants = [];

      // If batch is empty, put a random person in the batch.
      } else if (batch.length === 0) {
        var randIdx = ~~(Math.random()*remainingParticipants.length);
        batch.push(remainingParticipants.splice(randIdx, 1)[0]);

      // If the batch is full, push it into the list of groups.
      } else if (batch.length === remainingBatches[0]) {
        remainingBatches.shift();
        groups.push(batch);
        batch = [];

      // Otherwise, add people according to minimum past pairings.
      } else {
        var toAdd = findBestAddition(batch, remainingParticipants);
        batch.push(remainingParticipants.splice(remainingParticipants.indexOf(toAdd), 1)[0]);
      }

    }
    // See if this assignment is better than any of the past ones.
    // If it is, save it.
    var totalPastPairings = 0;
    for (var j = 0; j < groups.length; j++) {
      totalPastPairings += getPairings(groups[j]);
    }
    if (totalPastPairings < leastTotalPastPairings) {
      bestGrouping = groups;
      leastTotalPastPairings = totalPastPairings;
    }
  }

  console.log("Repeated pairings:", leastTotalPastPairings);
  // Make new pairings for each group.
  for (var k = 0; k < bestGrouping.length; k++) {
    makePairings(bestGrouping[k]);
  }

  return bestGrouping;
};