Array.prototype.myFill = function(value, start=0, end=this.length) {
    const len = this.length
    start = start < 0 ? start + len:start
    end = end < 0 ? end + len:end
    for(let i = start; i < end; i++) {
        this[i] = value
    }
    return this;
}
