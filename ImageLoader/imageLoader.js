import perImage from './perImage';

class ImageLoader{
  constructor(){
    this._events = new Map(); //to store event listener
    this._store = [] //to store loaded image
  }

  on(event, action){
    this._events.set(event, []);
    this._events.get(event).push(action);
  };

  emit(event, ...args){
    let listeners = this._events.get(event);
    if(listeners && listeners.length){
      listeners.forEach((listener) => {
        listener(args);
      })
    }
  }

  loader(images){
    let imageArr = Object.getOwnPropertyNames(images);
    let totalNo = imageArr.length;
    let loaded = 0;
    let failed = 0;
    let perimage = new perImage();
    imageArr.forEach((key) => {
      let url = images[key];
      perimage.getImage(url).then(
        (data) => {
          loaded++;
          this._store.push(data);
          this.emit('loaded', loaded, totalNo);
        },
        () => {
          failed++;
          this.emit('fail', failed);
        }
      )
    })
  }
}

export default ImageLoader;