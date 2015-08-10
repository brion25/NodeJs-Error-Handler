var divide = require('./divide'),
    error = require('./errorHandler');

process.on('uncaughtException',error);

setInterv(function(){
  console.log(divide(5/0));
},1000);