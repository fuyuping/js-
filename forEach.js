Array.prototype.myForEach = function(cb, thisArg) {
   const len = this.length
   for(let i = 0; i < len; i++) {
       cb.call(thisArg, this[i], i, this)
   }
}
