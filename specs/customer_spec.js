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


      it("should create customer", function(){
        assert.equal("John", customer1.name)
      })

      it("should create customer", function(){
        assert.equal("John", customer1.name)
      })
    })
})