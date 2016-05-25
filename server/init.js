Meteor.startup(function() {

});

// Meteor.methods({
//     sendEmail: function (to, from, subject, text) {
//         check([to, from, subject, text], [String]);
//
//         this.unblock();
//
//         Email.send({
//             to: 'alphacoredesign@gmail.com',
//             from: 'contact@myClientProject.com',
//             subject: 'New message from contact form',
//             text: text
//         });
//     }
// });
//
//
// Template.contactFormTemplate.events({
//     'submit form#contactForm':function(e){
//         var contactForm = $(e.currentTarget),
//         fname = contactForm.find('#firstName').val(),
//         lname = contactForm.find('#lastName').val(),
//         email = contactForm.find('#email').val(),
//         phone = contactForm.find('#phone').val(),
//         message = contactForm.find("#message").val();
//
//         if(isFilled(fname) && isFilled(lname) && isFilled(email)
//         && isFilled(phone) && isFilled(message) && isEmail(email)){
//             var dataText = "Message from: " + fname + " " + lname +
//             "\rEmail: " + email + "\rPhone: " + "\rContent:" + message;
//
//             Meteor.call('sendEmail', dataText);
//
//             throwAlert('Email send.', 'success');
//         }else {
//             throwAlert('An error occurred. Sorry', 'error');
//             return false;
//         }
//     }
// });
