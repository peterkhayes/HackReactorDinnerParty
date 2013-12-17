/*
  This module writes and sends emails to all students.
*/

var nodemailer = require('nodemailer');
var suggestions = require('./suggestions');
var directory = require('./directory');
var handlebars = require('handlebars');
var fs = require('fs');
var path = require('path');

// create reusable transport method (opens pool of SMTP connections)
var emailSender = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
});

var send = function(email) {
  // console.log("Sending the following email:", email);
  email.from = email.from || "Dinner Roulette <"+process.env.GMAIL_USERNAME+"@gmail.com>";
  emailSender.sendMail(email, function(error, response){
    if(error){
      console.log(error);
    } else{
      console.log("Message sent: " + response.message);
    }
  });
};


exports.mailTo = function(recipients) {
  // console.log("Sending a group email to", recipients);
  if (!Array.isArray(recipients)) recipients = [recipients];
  var email = {};

  // Recipients.
  var addresses = [];
  for (var i = 0; i < recipients.length; i++) {
    addresses[i] = directory.getEmail(recipients[i]);
  }
  email.to = addresses.join(", ");

  // Subject.
  email.subject = "Your Dinner Roulette group for " + ((new Date()).getMonth() + 1) + "/" + (new Date()).getDate();

  var data = {
    recipients: recipients,
    restaurants: suggestions.getRestaurants(2),
    topics: suggestions.getTopics(2)
  };
  var template = fs.readFileSync(path.join(__dirname, "../templates/email.html"), {encoding:"utf8"});
  email.html = handlebars.compile(template)(data);

  send(email);
};