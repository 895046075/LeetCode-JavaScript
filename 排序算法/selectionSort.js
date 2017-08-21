function selectionSort(arr){
	var minIndex;
	var len = arr.length;
	for(var i=0; i<len-1; i++){
		 minIndex = i;
		for(var j=i+1; j<len; j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j;
			}
		}
		swap(i,minIndex,arr);
	}
	return arr;
}
//swap函数
function swap(i,j,arr){
	var temp;
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}


//生成随机数组函数
function randomArray(min,max,n) {
	var arr = [];
	for(var i=0; i<n; i++){
		rand = parseInt(Math.random() * (max - min + 1) + min);
		arr.push(rand);
	}
	return arr;
}

//测试用例
var testArray = randomArray(3,200,50);
selectionSort(testArray);
for(var k=0; k<testArray.length; k++) {
	console.log(testArray[k]);
}
