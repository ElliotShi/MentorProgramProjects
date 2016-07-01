// describe("Player", function() {
//   var Player = require('../../lib/jasmine_examples/Player');
//   var Song = require('../../lib/jasmine_examples/Song');
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });


describe("Unit Test", function() {
  describe("Spy", function() {
    it("Should call spied object", function(){
      //3A arrange act assert (Nunit Junit)
      //GWT give when then
      var underTest = {
        whoAmI: function() {
          console.log("I don't know");
        }
      };
      spyOn(underTest, "whoAmI");
      underTest.whoAmI();
      expect(underTest.whoAmI).toHaveBeenCalled();
    });
  });

  describe("async", function() {
    //callback ajax promise
    //XHR XML http request
    //file
    //settimeout setinterval
    //BDD superset of TDD
    var happyChildrenDay = "Happy Children's day";
    it("Promise", function(done) {
      var promise = new Promise(
        function(resolve, reject){
          setTimeout(function(){
            resolve(happyChildrenDay);
            done();
          }, 10000);
        }
      );

      promise.then(function(value){
        expect(value).toEqual(happyChildrenDay);
      })
      expect(Promise).toBeDefined();
    }, 50000)
  })
})