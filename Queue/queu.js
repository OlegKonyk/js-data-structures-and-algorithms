// use Object as a storage (no Array or String)

var Queu = function() {
    this.storage = {};
};

Queu.prototype.enque = function(item) {
    var largestKey;
    var newKey;
    for (var key in this.storage) {
        var key = Number(key);
        if (!largestKey) largestKey = key;
        
        if (key > largestKey) {
            largestKey = key;
        }
    }
    if (!largestKey) {
        newKey = 1;
    } else {
        newKey = largestKey+1;
    }
    this.storage[newKey] = item;


}

Queu.prototype.deque = function() {
    var smallestKey;
    var newKey;
    for (var key in this.storage) {
        if (!smallestKey) smallestKey = key;
        var key = Number(key);
        if (key < smallestKey) {
            smallestKey = key;
        }
    }

    var value = this.storage[smallestKey];
    delete this.storage[smallestKey];

    return value;
}

Queu.prototype.size = function() {
    return Object.keys(this.storage).length;
}

var myFamily = new Queu();

myFamily.enque('Yuliia');
myFamily.enque('Olga');
myFamily.enque('Ihor');

console.log('1_predeque', myFamily);

console.log('1_DEQUE', myFamily.deque());

console.log('1_postdeque', myFamily);

myFamily.enque('Serhiy');

console.log('2_predeque', myFamily);

console.log('2_DEQUE', myFamily.deque());

console.log('2_postdeque', myFamily);

console.log(myFamily.deque());
console.log(myFamily.deque());
console.log(myFamily.deque());
console.log(myFamily.deque());

console.log('size', myFamily.size());