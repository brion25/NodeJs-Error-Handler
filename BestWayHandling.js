var divide = require('./divide'),
    error = require('./errorHandler'),
    d = require('domain').create();

d.on('error',error);

d.run(function(){
  setInterval(function(){
    var y = parseInt(Math.random() * 5);
    
    console.log(divide(5,y));
  },1000);
});