Array.prototype.myIndexOf = function (param, start = 0) {
  const len = this.length;
  if (start >= len) return -1;
  if (start < 0) {
    start = start + len < 0 ? 0 : start + len;
  }
  for (let i = start; i < len; i++) {
    if (this[i] === param) return i;
  }
  return -1;
};
