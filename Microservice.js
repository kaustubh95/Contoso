var express = require('express');
var app = express();

var userController=function (req, res) {
  var user=[
            {FName:'Ajay',LName:'kale',age:43,Utype:'Employee'},
            {FName:'Vikas',LName:'Sharma',age:36,Utype:'Employee'},
            {FName:'Kabir',LName:'Singh',age:28,Utype:'Customer'},
            {FName:'Azad',LName:'Ahmed',age:25,Utype:'Employee'},
            {FName:'Umang',LName:'Tripathi',age:23,Utype:'Customer'}
			];
  res.send(user);
};

app.get('/user',userController );
var server = app.listen(8001);
console.log("Listening At Port 8001");