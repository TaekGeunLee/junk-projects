var hashTable = function(size) {
  // property
  this.bucket = new Array(size);
  this.length = 0;
  this.size = size;
  
    // method
  this.insertKey = function(key) {
  	const index = key%size;
      
    if (!this.bucket[index]) {
        this.bucket[index] = key;
        this.length++;
        return 1;
    }
      
    let tmp = this.bucket[index];
    let ti = (index+1)==size ? -1 : index;
    this.bucket[index] = key;
    this.length++;
      
    while (this.bucket[ti+1]) ti++;
    
   	ti++;
    this.bucket[ti] = tmp;
    return 0;
  }
}

var h1 = new hashTable(23);
h1.insertKey(91);
console.log(`${h1.bucket}, ${h1.length}`);

/* 버그 고칠 것. */