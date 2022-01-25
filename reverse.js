Array.prototype.myReverse = function () {
  const len = this.length;
  for (let i = 0; i < len / 2; i++) {
    const temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - 1 - i] = temp;
  }
  return this;
};
