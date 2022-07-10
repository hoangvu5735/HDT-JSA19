function findEven() {
    var arr = Number;
    for (var i = 0; 4 < i < 20; i++) {
        if (arr[i] % 2 === 0) {
            document.writeln(arr[i] + "<br />")
        }
    }
}

function createHalfPyramid(height) {

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