var divide = require('./divide'),
    error = require('./errorHandler');

process.on('uncaughtException',error);

setInterval(function(){
  console.log(divide(5/0));
},1000);