/*
  In this module, we're going to keep track of who has eaten with who.

  Modeling the situation as a graph problem, we will attempt to match
  students with students they have not eaten with before.

  The algorithm as follows:
  First, we determine batch sizes.  For a total number of students, we
  want most to eat in groups of 4.  However, this is not always
  possible without some students eating alone.  So we make the minimum
  number of groups of 3.  This is done with a little modular arithmetic.

  Then, to make a batch, we first pick someone at random.  We then pick
  the person who he/she has eaten with least.  Then we pick the third person
  for whom the sum of the times they have eaten with person 1 and the times
  they have eaten with person 2 is minimized.  A fourth person is picked
  similarly, if required.

  Finally, we run step 2 another 49 times and pick the result with the least
  total number of repeated pairings.

  This seems to minimize the number of repeated meals very well.  With a
  size of 55 people, it takes 4-5 meals before any repeats occur.
*/


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
// Let's remember that for later.
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

// Partition a total number of participants into batches of 3 or 4.
var makeBatches = function(total) {
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
  return batchSizes;
};

module.exports.makeGroups = function(participants) {
  // Set up batch sizes so everyone is in groups of 3 or 4.
  var total = participants.length;
  var batchSizes = makeBatches(total);

  // We're going to run this algorithm 50 times and pick the best result.
  // Because we can.  #v8
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

  // Make new pairings for each group.
  for (var k = 0; k < bestGrouping.length; k++) {
    makePairings(bestGrouping[k]);
  }

  return bestGrouping;
};