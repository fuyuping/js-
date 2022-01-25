Array.prototype.myIncludes = function (param, start = 0) {
    const len = this.length
    if (start >= this.length) {
        return false
    } else if (start < 0) {
        start = start + len < 0 ? 0 : start + len;
    }
    if (Number.isNaN(param)) {
        for (let i = start; i < len; i++) {
            if (Number.isNaN(this[i])) return true;
        }
    } else {
        for (let i = start; i < len; i++) {
            if (this[i] === param) return true;
        }
    }
    return false;
};
