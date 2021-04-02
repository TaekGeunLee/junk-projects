var hashTable = function(arr, size) {
    var items = arr;
  
  var setHash = function() {
  	var result = new Array(size);
    items.forEach(function(el) {
    	result[el%size] = el;
    });
    return result;
  } // 해시 충돌 발생!
  
  this.bucket = setHash();
  this.length = arr.length;
  this.size = size;
}


var keys = [256, 9501, 94, 394, 26, 150, 76];
var h1 = new hashTable(keys, 23);
console.log(h1.bucket);