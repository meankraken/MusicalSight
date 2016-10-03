$(document).ready(function() {
   $('#introText').on('click', function() {
	  window.location = '/'; 
	   
   });
	
   $('#loginForm').submit(function(e) {
	   $('.alert').remove();
	   $('.loginFailed').remove();
       var user = $("#loginInput");
       var pass = $("#loginPass");
       if (user.val().length>15 || user.val().length<2) {
           user.val("");
           $("<p class='alert' style='color:white'>*Please select a username between 2-15 characters long</p>").insertAfter($('#loginInput'));
           e.preventDefault();
       } 
       else if (pass.val().length<8) {
           pass.val("");
           $("<p class='alert' style='color:white'>*Please select a password greater than 8 characters long.</p>").insertAfter($('#loginPass'));
           e.preventDefault();
       } 
       else {
          
       }
       
   }) ;
   
   $('#registerForm').submit(function(e) {
	   $('.alert').remove();
       var user = $("#regInput");
       var pass = $("#regPass");
       if (user.val().length>15 || user.val().length<2) {
           user.val("");
           $("<p class='alert' style='color:white'>*Please select a username between 2-15 characters long</p>").insertAfter($('#regInput'));
           e.preventDefault();
       } 
       else if (pass.val().length<8) {
           pass.val("");
           $("<p class='alert' style='color:white'>*Please select a password greater than 8 characters long.</p>").insertAfter($('#regPass'));
           e.preventDefault();
       } 
       else {
          
       }
       
   }) ;
   
   var url = window.location.toString();
   if (url.match(/failed/i)) {
	   $("<p class='loginFailed' style='color:white'>Username or password invalid. Please retry.</p>").insertAfter($('#loginBox'));
   }
   
});