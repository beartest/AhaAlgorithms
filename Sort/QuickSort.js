//第3节 最常用的排序——快速排序
function quickSort(arr, left, right) {
	if(left > right) {
		return;
	}

	var temp = arr[left];
	var i = left;
	var j = right;
	while(i != j) {
		while(arr[j] >= temp && i < j) {
			j--;
		}
		while(arr[i] <= temp && i < j) {
			i++;
		}
		if(i < j) {
			var t = arr[i];
			arr[i] = arr[j];
			arr[j] = t;
		}
	}

	arr[left] = arr[i];
	arr[i] = temp;

	quickSort(arr, left, i - 1);
	quickSort(arr, i + 1, right);
}

function testQuickSort() {
	var arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
	quickSort(arr, 0, arr.length - 1);
	console.log(arr);
}

testQuickSort();