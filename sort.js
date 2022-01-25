Array.prototype.mySort = function (cb) {
  const len = this.length;
  if (len <= 1) return this;
  if (cb === undefined) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        [this[j], this[j + 1]] =
          String(this[j]) > String(this[j + 1])
            ? [this[j + 1], this[j]]
            : [this[j], this[j + 1]];
      }
    }
  } else if (cb instanceof Function) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        [this[j], this[j + 1]] = cb(this[j], this[j + 1])
          ? [this[j + 1], this[j]]
          : [this[j], this[j + 1]];
      }
    }
  }
  return this;
};
