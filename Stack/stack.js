// use only String as a storage

var Stack = function() {
    this.storage = '';
}

Stack.prototype.size = function () {
    var size = 0;
    var separators = (this.storage.match(/\|/g) || []).length;
    console.log(separators, separators)
    if (separators) {
        size = separators+1;
    }
    return size;
}

Stack.prototype.push = function (item) {
    if (typeof item != 'string') {
        throw new Error('input has to be type of String')
    }
    if (!this.storage) {
        this.storage = item;
    } else {
        this.storage = this.storage + '|' + item;
    }
    console.log('push', this.storage)
}

Stack.prototype.pop = function () {
    var lastElementInd = this.storage.lastIndexOf('|');
    var popedStr = this.storage.slice(lastElementInd);
    this.storage = this.storage.substring(0, lastElementInd);
    return popedStr.substring(1);
}

var myWeeklyMeny = new Stack();

myWeeklyMeny.push('Potato');
myWeeklyMeny.push('Milk');
myWeeklyMeny.push('Water');

console.log('poped=>>', myWeeklyMeny.pop());

myWeeklyMeny.push('Apple');

console.log('size=>>', myWeeklyMeny.size());

console.log('STACK=>>', myWeeklyMeny.storage);