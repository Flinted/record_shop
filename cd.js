var Cd = function(params){
  this.name = params.name;
  this.genre = params.genre;
  this.price = params.price;
  this.length = params.length;
}

Cd.prototype = {
  depreciate: function(){
    
  }

}

module.exports = Cd;