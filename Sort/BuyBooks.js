//第4节 小哼买书
function buyBook1() {
	var arr = [20, 40, 32, 67, 40, 20, 89, 300, 400, 15];
	console.log("solution1:");
	//桶排序去重
	var a = new Array(1001);
	for(var i = 0; i < a.length; i++) {
		a[i] = 0;
	}

	for(var i = 0; i < arr.length; i++) {
		a[arr[i]] = 1;
	}

	for(var i = 0; i < a.length; i++) {
		if(a[i] == 1) {
			console.log(i);
		}
	}
}

function buyBook2() {
	var arr = [20, 40, 32, 67, 40, 20, 89, 300, 400, 15];
	console.log("solution2:");
	//冒泡排序
	for(var i = 0; i < arr.length; i++) {
		var change = false;
		for(var j = 1; j < arr.length - i; j++) {
			if(arr[j - 1] > arr[j]) {
				var t = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = t;
				change = true;
			}
		}
		if(!change) {
			break;
		}
	}

	console.log(arr[0]);
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] != arr[i - 1]) {
			console.log(arr[i]);
		}
	}
}

buyBook1();
buyBook2();