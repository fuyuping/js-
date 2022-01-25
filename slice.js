Array.prototype.mySlice = function (start = 0, end = this.length) {
  const arr = [],
    len = this.length;
  if (start >= len) return [];
  start = start < 0 ? (len + start < 0 ? 0 : start + len) : start;
  end = end < 0 ? (len + end < 0 ? 0 : end + len) : end;
  for (let i = start; i < end; i++) {
    arr.push(this[i]);
  }
  return arr;
};
