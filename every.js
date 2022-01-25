Array.prototype.myEvery = function (cb, thisArg) {
  cb = cb.bind(thisArg);
  const len = this.length;
  if (len === 0) return true;
  for (let i = 0; i < len; i++) {
    if (!cb(this[i])) {
      return false;
    }
  }
  return true;
};
