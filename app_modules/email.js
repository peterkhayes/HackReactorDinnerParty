/*
  This module writes and sends emails to all students.
*/

var nodemailer = require('nodemailer');
var suggestions = require('./suggestions');
var directory = require('./directory');

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

  // Content
  email.message = "Good evening!\r\n\r\nYour dining group for tonight is:\r\n\r\n";

  var companions = "";
  for (var i = 0; i < recipients.length; i++) {
    companions += (recipients[i] + "\r\n");
  }
  email.message += companions;

  email.message += "\r\nYou might consider dining at one of the following fine establishments:\r\n\r\n";
  var restaurants = suggestions.getRestaurants(3);
  for (var i = 0; i < restaurants.length; i++) {
    email.message += (restaurants[i] + "\r\n");
  }

  var topics = suggestions.getTopics(2);
  email.message += "\r\nPerhaps you could discuss " + topics[0] + ", or " + topics[1] + ".\r\n\r\n";

  email.message +="Sincerely,\r\nAlastair J.S., Your Butler";

  send(email);
};