var arr = [3, 3, 1, 1, 3, 2, 3];

function pivot(arr) {
	var len = arr.length;
	var count = 1;
	var cur = arr[0];
	for(var i = 1; i < len; i++) {
		if(count == 0) {
			count = 1;
			cur = arr[i];
		} else {
			if(cur == arr[i]) {
				count++;
			} else {
				count--;
			}
		}
	}
	console.log(cur);
}

pivot(arr);