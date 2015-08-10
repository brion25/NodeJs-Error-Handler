var divide = require('./divide');

process.on('uncaughtException',function(err){
  console.log('Error!',err.message);
});

divide(5,0);