Array.prototype.myFlat = function (dep = 1) {
  let current = this,
    count = 0;
  if (!current.length || dep === 0) return current;
  try {
    while (count++ < dep) {
      if (Array.isArray(current)) {
        current = current.reduce((prev, cur) => prev.concat(cur), []);
      } else {
        return current;
      }
    }
  } catch (err) {
    throw err;
  }
  return current;
};
