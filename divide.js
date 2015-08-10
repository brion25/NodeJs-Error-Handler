module.exports = function(x,y){
  if(y === 0) throw Error('Imposible divide by zero!');
  
  return x/y;
}