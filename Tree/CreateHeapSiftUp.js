var nums = [99, 5, 36, 7, 22, 17, 46, 12, 2, 19, 25, 28, 1, 92];
var h = [];

function swap(i, j) {
	var temp = h[i];
	h[i] = h[j];
	h[j] = temp;
}

//添加一个值
function siftup(i) {
	while(i > 0) {
		var t = Math.ceil(i / 2) - 1;
		if(h[i] < h[t]) {
			swap(i, t);
			i = t;
		} else {
			break;
		}
	}
}

for(var i = 0; i < nums.length; i++) {
	h.push(nums[i]);
	siftup(h.length - 1);
}

console.log(h);