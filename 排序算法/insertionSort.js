function insertionSort(arr) {
	var len = arr.length;
	for(var i=1; i<len; i++){
		//寻找arr[i]插入的位置
		for(var j=i; j>0 && arr[j]<arr[j-1]; j--){
			swap(j,j-1,arr);
		}
	}
}

//swap函数
function swap(i,j,arr){
	var temp;
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

//生成随机数组函数
function randomArray(min,max,n){
	var arr = [];
	for(var i=0; i<n; i++){
		rand = parseInt(Math.random() * (max - min + 1) + min);
		arr.push(rand);
	}
	return arr;
}

//测试用例
var testArray = randomArray(3,200,50);
insertiomSort(testArray);
for(var k=0; k<testArray.length; k++){
	console.log(testArray[k]);
}
