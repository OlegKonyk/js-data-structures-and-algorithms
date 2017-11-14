// use only String as a storage

class Stack {
    constructor() {
        this.storage = "";
        this.maxSize = "7";
    }

    push(item) {
        if (typeof item != 'string') {
            throw new Error('Input has to be type of String')
        }
        if (!this.storage) {
            this.storage = item;
        } else {
            this.storage = this.storage + '|' + item;
        }
        console.log('push', this.storage)
    }

    pop() {
        var lastElementInd = this.storage.lastIndexOf('|');
        var popedStr = this.storage.slice(lastElementInd);
        this.storage = this.storage.substring(0, lastElementInd);
        return popedStr.substring(1);
    }

    pick() {
        var lastElementInd = this.storage.lastIndexOf('|');
        var popedStr = this.storage.slice(lastElementInd);
        this.storage = this.storage.substring(0, lastElementInd);
        return popedStr.substring(1);
    }

    size() {
        var size = 0;
        var separators = (this.storage.match(/\|/g) || []).length;
        console.log('separators', separators)
        if (separators) {
            size = separators+1;
        }
        return size;
    }

    isFull() {

    }

    isEmpty() {

    }
}


var myWeeklyMeny = new Stack();

myWeeklyMeny.push('Potato');
myWeeklyMeny.push('Milk');
myWeeklyMeny.push('Water');

console.log('poped=>>', myWeeklyMeny.pop());

myWeeklyMeny.push('Apple');

console.log('size=>>', myWeeklyMeny.size());

console.log('STACK=>>', myWeeklyMeny.storage);