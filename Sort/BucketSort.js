//第1节 最快最简单的排序——桶排序
function bucketSort(arr) {
	var a = new Array(11);
	for(var i = 0; i < 11; i++) {
		a[i] = 0; //初始化为0
	}

	for(var i = 0; i < arr.length; i++) {
		a[arr[i]]++;
	}

	for(var i = 0; i < 11; i++) {
		for(j = 0; j < a[i]; j++) {
			console.log(i);
		}
	}
}

var arr = [5, 3, 5, 2, 8];
bucketSort(arr);
