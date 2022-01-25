// 方法1
Array.prototype.myConcat = function() {
    const data = [...arguments], newArr = JSON.parse(JSON.stringify(this));
    for(let i = 0; i < data.length; i++) {
        newArr.push(data[i])
    }
    return newArr;
}
// 方法2
Array.prototype.myConcat = function() {
    return [...this, ...arguments].flat()
}
