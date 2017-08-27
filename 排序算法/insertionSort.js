function insertionSort(arr) {
	var len = arr.length;
	for (var i = 1; i < len; i++) {
		//寻找arr[i]插入的位置
		var temp = arr[i];
		var j;
		for (j = i; j > 0 && arr[j - 1] > temp; j--) {
			arr[j] = arr[j - 1];
		}
		arr[j] = temp;
	}
}

//生成随机数组函数
function randomArray(min, max, n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		rand = parseInt(Math.random() * (max - min + 1) + min);
		arr.push(rand);
	}
	return arr;
}

//测试用例
var testArray = randomArray(3, 2000, 500);
var start = Date.now();
insertionSort(testArray);
var end = Date.now();
console.log("time need" + ' ' + (end - start));
for (var k = 0; k < testArray.length; k++) {
	console.log(testArray[k]);
}
