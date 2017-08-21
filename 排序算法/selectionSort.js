function selectionSort(array) {
	for(var i=0; i<array.length; i++) {
		var minIndex = i;
		for(var j=i+1; j<array.length; j++) {
			if(array[j] < array[minIndex]) {
				minIndex = j;
			}
			var item;
			item = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = item;
		}
	}
	return array;
}

//测试用例
var arr = [3,6,2,7,1,5,9];

selectionSort(arr);

for(var k=0; k<arr.length; k++) {
	console.log(arr[k]);
}
