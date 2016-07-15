var _ = require('lodash');

var Record = function(params){
  this.name = params.name;
  this.genre = params.genre;
  this.price = params.price;
  this.artist = params.artist;
  this.length = params.length;
  this.rating = 0;
  this.reviews = 0;
}

Record.prototype = {
  appreciate: function(){
      this.price = this.price * 1.1
  },

  review: function(rating){
   this.rating = _.round(((this.rating * this.reviews) + rating)/(this.reviews + 1),2);
    this.reviews += 1;
  }

}

module.exports = Record;