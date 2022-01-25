Array.prototype.mySome = function (cb, thisArg) {
  cb = cb.bind(thisArg);
  const len = this.length;
  for (let i = 0; i < len; i++) {
    if (cb(this[i])) {
      return true;
    }
  }
  return false;
};
