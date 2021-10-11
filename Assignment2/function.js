EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        callbackFn(this[i], i, this)
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const myArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        myArr[i] = callbackFn(this[i], i, this);
    }
    return myArr;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    const myArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        if (callbackFn(this[i], i, this))
            myArr.push(this[i]);
    }
    return myArr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    const myArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        if (callbackFn(this[i], i, this))
            return true;
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    const myArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        if (!callbackFn(this[i], i, this))
            return false;
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initial) {
    let sum = 0;
    if (initial != null)
        sum = initial;
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        sum += callbackFn(this[i], i, this);
        if (i != 0)
            sum -= this[i - 1];
    }
    return sum;
};

// INCLUDES //
Array.prototype.myIncludes = function(element, indx) {
    if (indx >= this.length)
        return;
    let i = 0;
    if (indx != null)
        i = indx;
    if (element)
        for (i; i < this.length; i++) {
            if (this[i] == undefined)
                continue;
            if (this[i] == element)
                return true;
        }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(element, indx) {
    if (indx >= this.length)
        return -1;
    let i = 0;
    if (indx != null)
        i = indx;
    if (element)
        for (i; i < this.length; i++) {
            if (this[i] == undefined)
                continue;
            if (this[i] == element)
                return i;
        }
    return -1;
};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(element, indx) {
    if (indx < 0)
        return -1;
    let i = this.length - 1;
    if (indx != null)
        i = indx;
    if (element)
        for (i; i >= 0; i--) {
            if (this[i] == undefined)
                continue;
            if (this[i] == element)
                return i;
        }
    return -1;
};

// KEYS //
Object.grabKeys = function(obj) {
    const myArr = [];
    for (let name in obj)
        myArr.push(name);
    return myArr;
};

// VALUES //
Object.grabValues = function() {
    const myArr = [];
    for (let name in obj)
        myArr.push(obj[name]);
    return myArr;
};