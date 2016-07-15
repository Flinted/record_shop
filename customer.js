var Customer = function(params){
  this.name = params.name;
  this.money = params.money;
  this.records = [];
  this.cds = [];
  this.movies = [];
}

Customer.prototype = {
  buyItem: function(item){

  },
  getMoney: function(amount){

  },
  sellItem: function(item){
    
  }
}


module.exports = Customer;