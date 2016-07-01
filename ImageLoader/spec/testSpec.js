import ImageLoader from '../imageLoader';
// import perImage from '../perImage';

// describe("load image", function(){
//   var perimage = new perImage();

//   beforeEach(function(){

//   })

// })


describe("Image Loader", function() {
  var imageLoader = new ImageLoader();
  var images = {
    "one": "http://orig14.deviantart.net/08db/f/2012/145/2/f/one_piece_marble_play_by_iviarker-d511vb0.jpg",
    "two": "http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/styles/large/public/2015/04/28/one-piece-universal-studios.jpg",
    "three": "https://s-media-cache-ak0.pinimg.com/736x/f4/9e/63/f49e63303cd0647ef286c4a0ef7ba0ec.jpg"
  }

  var flag = false;
  imageLoader.loader(images).then(function(){
    flag = true;
  })
  it("it should able to load the images", function(){
    expect(flag).toEqual(true);
  });

  describe("event emit", function(){
    var text = null;
    beforeEach(function() {
      imageLoader.on("test", function(data){
        text = data;
      })
    });
    it("it should able to trigger function", function(){
      imageLoader.emit("test", "Hello world");
      expect(text[0]).toEqual("Hello world");
    })
  })
})