var Record = function(params){
  this.name = params.name;
  this.genre = params.genre;
  this.price = params.price;
  this.length = params.length;
}

Record.prototype = {
  depreciate: function(){
    
  }

}

module.exports = Record;