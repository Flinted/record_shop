var Cd = require("../cd");
var Movie = require("../movie");
var Record = require("../record");
var Store = require("../store");
var Customer = require("../customer");
var assert = require("chai").assert;

describe("Store", function(){
    
    beforeEach(function(){
      cd1 = new Cd({name: "Absolution", artist: "Muse", genre: "alternative", price: 10.00, length: 185})
      var cd2 = new Cd({name: "Bladebla", artist: "Muse", genre: "alternative", price: 10.00, length: 185})
      var cd3 = new Cd({name: "Fishsticks", artist: "Muse", genre: "alternative", price: 10.00, length: 185})
      var movie1 = new Movie({name: "It", genre: "horror", price: 15.00, length: 180})
      var movie2 = new Movie({name: "That", genre: "horror", price: 15.00, length: 180})
      var movie3 = new Movie({name: "Those", genre: "horror", price: 15.00, length: 180})
      var cds = [cd1,cd2,cd3];
      var movies = [movie1,movie2,movie3];
      var records = [];
      customer1 = new Customer({name: "John", money:500.00})
      stock = {movies: movies, cds: cds, records: records};
      store = new Store({name: "HMV", city: "Edinburgh"})

    })

    it("should create store correctly", function(){
      assert.equal("HMV", store.name);
    })

    it("should add stock", function(){
      store.addStock(stock);
      assert.equal(3, store.movies.length);
      assert.equal(3, store.cds.length);
      assert.equal(0, store.records.length);
    })

    it("should sell stock", function(){
      store.addStock(stock);
      store.sellStock(cd1,customer1,"cds")
      assert.equal(1, customer1.cds.length);
      assert.equal(10.00, store.balance);
      assert.equal(2, store.cds.length);
    })

    it("should get stock by type", function(){
      store.addStock(stock);
      assert.equal(3, store.getStock("cds").length)
    })

    it("should get all stock", function(){
      store.addStock(stock);
      assert.equal(3, store.getStock().length)
    })

    it("should get total value by type", function(){
      store.addStock(stock);
      assert.equal(30.00, store.stockValue("cds"))
    })

    it("should get total value of all stock", function(){
      store.addStock(stock);
      assert.equal(75.00, store.stockValue())
    })

    it("should buy back stock", function(){
      assert.equal(10.00, store.buyBack(cd1, "cds"))
    })

    it("should give financials", function(){
      store.addStock(stock);
      assert.equal(75.00, store.financials().stock)
    })
  })