var divide = require('./divide'),
    cluster = require('cluster'),
    domain = require('domain');

if(cluster.isMaster){
  console.log('I\'m the main Thread!');
  
  cluster.fork();
  
  cluster.on('disconnect',function(){
    console.error('Something happen, but I\'m resuming...');
    cluster.fork();
  })
}else{
  
  console.log('I\'m a worker...');
  
  var d = domain.create();
  
  d.on('error',function(err){
    console.log('Error!',err.message);
    
    cluster.worker.disconnect();
  });
  
  d.run(function(){
    setInterval(function(){
      var y = parseInt(Math.random() * 5);
    
      console.log(divide(5,y));
    },1000);
  });
}