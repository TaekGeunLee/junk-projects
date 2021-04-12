var hashTable = function(arr, size) {
  // property
  this.bucket = new Array(size);
  this.length = 0;
  this.size = size;
    
  this.setTable(arr);
}

hashTable.prototype.insertKey = function(key) {
    const index = key % this.size;
    let tmp = this.bucket[index];
    let ti = (index+1)==this.size ? -1 : index;
    this.bucket[index] = key;
    this.length++;
    
    if (!this.bucket[index]) return this.bucket;
    
    while (this.bucket[ti+1]) ti++;
    
   	ti++;
    this.bucket[ti] = tmp;
    return this.bucket;
}

hashTable.prototype.setTable = function(arr) {
  for (var i=0; i<arr.length; i++) {
      this.insertKey(arr[i]);
  }    
}

hashTable.prototype.dropKey = function (index) {
    this.bucket[index] = undefined;
}

var h1 = new hashTable([26, 94], 23);

console.log(`bucket : ${h1.bucket}`);
console.log(`length : ${h1.length}`);