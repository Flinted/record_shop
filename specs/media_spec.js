var Cd = require("../cd");
var Movie = require("../movie");
var Record = require("../record");
var assert = require("chai").assert;


describe("CD", function(){
    
    beforeEach(function(){
      cd1 = new Cd({name: "Absolution", artist: "Muse", genre: "alternative", price: 10.00, length: 185})
    })

    it("should create a cd", function(){
      assert.deepEqual("Muse", cd1.artist)
    })

    it("should depreciate", function(){
      cd1.depreciate()
      assert.deepEqual(9.00, cd1.price)
    })

})


describe("Movie", function(){
    
    beforeEach(function(){
      movie1 = new Movie({name: "It", genre: "horror", price: 15.00, length: 180})
    })

    it("should create a Movie", function(){
      assert.deepEqual("It", movie1.name)
    })

    it("should depreciate", function(){
      movie1.depreciate()
      assert.deepEqual(12.00, movie1.price)
    })

    it("should be reviewable", function(){
      movie1.review(4);
      movie1.review(3);
      movie1.review(5);
      assert.deepEqual(4, movie1.rating);
      assert.deepEqual(3, movie1.reviews);
    })
})


describe("Record", function(){
    
    beforeEach(function(){
      record1 = new Record({name: "Absolution", artist: "Muse", genre: "alternative", price: 10.00, length: 185})
    })

    it("should create a record", function(){
      assert.deepEqual("Muse", record1.artist)
    })

    it("should appreciate", function(){
      record1.appreciate()
      assert.deepEqual(11.00, record1.price)
    })

})