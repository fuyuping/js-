// call绑定this
Array.prototype.myForEach = function(cb, thisArg) {
   const len = this.length
   for(let i = 0; i < len; i++) {
       cb.call(thisArg, this[i], i, this)
   }
}
// bind绑定this
Array.prototype.myForEach = function (cb, thisArg) {
      const len = this.length;
      cb = cb.bind(thisArg)
      for(let i = 0; i < len; i++) {
        cb(this[i], i, this);
      }
}
// apply绑定this
Array.prototype.myForEach = function(cb, thisArg) {
    const len = this.length
    for(let i = 0; i < len; i++) {
        cb.apply(thisArg, [this[i], i, this])
    }
}
