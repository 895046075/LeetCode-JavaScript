function bubbleSort(arr) {
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
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
var testArray = randomArray(3, 200, 50);
bubbleSort(testArray);
for (var k = 0; k < testArray.length; k++) {
	console.log(testArray[k]);
}
