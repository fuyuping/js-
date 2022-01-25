Array.prototype.myFindIndex = function (cb, thisArg) {
  cb = cb.bind(thisArg);
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return i;
    }
  }
  return -1;
};
