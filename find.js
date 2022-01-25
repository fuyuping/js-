Array.prototype.myFind = function (cb, thisArg) {
  cb = cb.bind(thisArg);
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return this[i];
    }
  }
};
