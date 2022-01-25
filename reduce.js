Array.prototype.myReduce = function (cb, initVal) {
  const len = this.length;
  if (len) {
    const currentIndex = initVal ? 0 : 1;
    let accumulator = initVal || this[0];
    for (let i = currentIndex; i < len; i++) {
      accumulator = cb(accumulator, this[i], i, this);
    }
    return accumulator;
  }
};
