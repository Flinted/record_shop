var _ = require('lodash');

var Cd = function(params){
  this.name = params.name;
  this.artist = params.artist;
  this.genre = params.genre;
  this.price = params.price;
  this.length = params.length;
  this.rating = 0;
  this.reviews = 0;
}

Cd.prototype = {
  depreciate: function(){
      this.price = this.price * 0.9
  },
  
  review: function(rating){
    this.rating = _.round(((this.rating * this.reviews) + rating)/(this.reviews + 1),2);
    this.reviews += 1;
  }
}

module.exports = Cd;