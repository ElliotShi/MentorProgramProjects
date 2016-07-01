class perImage {

  getImage(src) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = src;
      img.onload = () => {
        resolve(img);
      }
      img.onerror = () => {
        reject();
      }
    })
  };

}

export default perImage;