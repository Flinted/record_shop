var _ = require('lodash');

var Movie = function(params){
  this.name = params.name;
  this.genre = params.genre;
  this.price = params.price;
  this.length = params.length;
  this.rating = 0;
  this.reviews = 0;
}

Movie.prototype = {
  depreciate: function(){
      this.price = this.price * 0.8
  },
  review: function(rating){
    this.rating = _.round(((this.rating * this.reviews) + rating)/(this.reviews + 1),2);
    this.reviews += 1;
  }
}

module.exports = Movie;