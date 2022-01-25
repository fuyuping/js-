Array.prototype.myMap = function (cb, thisArg) {
  const newArr = [];
  cb = cb.bind(thisArg);
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};
