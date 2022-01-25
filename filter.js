Array.prototype.myFilter = function(cb, thisArg) {
    const newArr = [], len = this.length
    cb = cb.bind(thisArg)
    if(len) {
        for(let i = 0; i < len; i++) {
            if(cb(this[i])) {
                newArr.push(this[i])
            }
        }
    }
    return newArr
}
