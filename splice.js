Array.prototype.mySplice = function (index, deleCount) {
  let arrLeft = [],
    arrRight = [],
    arrAdd = [],
    deleteArr = [];
  for (let i = 0; i < this.length; i++) {
    if (i < index) {
      arrLeft.push(this[i]);
    } else if (i >= index + deleCount) {
      arrRight.push(this[i]);
    } else {
      deleteArr.push(this[i]);
    }
  }
  for (let i = 2; i < arguments.length; i++) {
    arrAdd.push(arguments[i]);
  }
  [...arrLeft, ...arrAdd, ...arrRight].forEach((item, index) => {
    this[index] = item;
  });
  return deleteArr;
};
