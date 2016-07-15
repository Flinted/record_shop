var _ = require('lodash');

var Store = function(params){
  this.name = params.name;
  this.city = params.city;
  this.balance = 0;
  this.bank = 0;
  this.movies = [];
  this.cds = [];
  this.records = [];
}

Store.prototype = {

  addStock: function(stock){
    if(stock.movies){_.forEach(stock.movies, function(movie){
      this.movies.push(movie);
    }.bind(this))};
      if(stock.cds){_.forEach(stock.cds, function(cd){
        this.cds.push(cd);
      }.bind(this))};
        if(stock.records){_.forEach(stock.records, function(record){
          this.records.push(record);
        }.bind(this))};
      },

      sellStock: function(item, customer, type){
        this.balance += customer.buyItem(item,type);
        _.remove(this[type], function(stock){
          return stock.name === item.name
        })
      },

      getStock: function(type){
        if(!type) return [this.movies, this.records, this.cds];
        return this[type]
      },

      listStock: function(type){
        var stock = this.getStock(type)
        _.forEach(stock, function(item){
          return console.log(item)
        })
      },

      stockValue: function(type){
        var stock = this.getStock(type);
        var subtotal = 0;
        _.forEach(_.flatten(stock), function(item){
          return subtotal += item.price
        })
        return subtotal;
      },

      buyBack: function(item, type){
        this[type].push(item)
        this.balance -= item.price;
        return item.price;
      },

      financials: function(){
        return {balance: this.balance, bank: this.bank, stock: this.stockValue()}
      }

    }



    module.exports = Store;