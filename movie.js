var Movie = function(params){
  this.name = params.name;
  this.genre = params.genre;
  this.price = params.price;
  this.length = params.length;
}

Movie.prototype = {
  depreciate: function(){
    
  }

}

module.exports = Movie;