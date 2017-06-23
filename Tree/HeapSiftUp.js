var h = [2, 7, 5, 12, 22, 17, 25, 19, 36, 99, 23, 28, 46, 92];

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

h.push(3);
siftup(h.length - 1);
console.log(h);