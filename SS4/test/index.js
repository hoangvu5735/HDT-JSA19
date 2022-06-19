function findEven() {
    var arr = [4, 5, 6, 7, 8, 9, 10, 20];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            document.writeln(arr[i] + "<br />")
        }
    }
}

function createHalfPyramid (height) {

    for (var i = 1; i <= height; i++) {
      var row = '';
  
      for (var j = 1; j <= i; j++) {
        row += '1';
      }
  
      console.log(row);
    }
  }
  
  createHalfPyramid(5);

document.write(row)




