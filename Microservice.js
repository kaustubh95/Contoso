var express = require('express');
var app = express();

var ContosoController=function (req, res) {
  var User=[
            {FName:'Ajay',LName:'kale',age:43,Utype:'Employee'},
            {FName:'Vikas',LName:'Sharma',age:36,Utype:'Employee'},
            {FName:'Kabir',LName:'Singh',age:28,Utype:'Client'},
            {FName:'Azad',LName:'Ahmed',age:25,Utype:'Employee'},
            {FName:'Umang',LName:'Tripathi',age:23,Utype:'Client'}
      ];
  res.send(User);
};

app.get('/User',ContosoController );
var server = app.listen(8000);