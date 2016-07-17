var Customer = function(params){
  this.name = params.name;
  this.money = params.money;
  this.records = [];
  this.cds = [];
  this.movies = [];
}

Customer.prototype = {
  buyItem: function(item,type){
    this[type].push(item);
    this.money -= item.price;
    return item.price;
  },
  getMoney: function(amount){
    this.money += 100.00
  },
  sellItem: function(item, store, type){
    this.balance += store.buyBack(item,type);
    _.remove(this[type], function(stock){
      return stock.name === item.name
    })
  },

  review: function(item, rating){
    item.review(rating);
  }
}



module.exports = Customer;