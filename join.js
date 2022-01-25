Array.prototype.myJoin = function (val) {
  const string = "",
    len = this.length;
  for (let i = 0; i < len; i++) {
    string += this[i];
  }
  return string;
};
