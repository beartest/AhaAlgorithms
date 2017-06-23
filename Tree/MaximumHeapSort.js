var h = [99, 5, 36, 7, 22, 17, 46, 12, 2, 19, 25, 28, 1, 92];
var n = 14;

function swap(i, j) {
	var temp = h[i];
	h[i] = h[j];
	h[j] = temp;
}

//删除最大值，并添加i
function siftdown(i) {
	var t;
	while(i * 2 + 1 < n) {
		if(h[i] < h[2 * i + 1]) {
			t = i * 2 + 1;
		} else {
			t = i;
		}
		if(i * 2 + 2 < n && h[t] < h[i * 2 + 2]) {
			t = i * 2 + 2;
		}
		//t为子节点，则交换当前节点和t。否则，跳出循环
		if(t != i) {
			swap(i, t);
			i = t;
		} else {
			break;
		}
	}
}

//建立最大堆
function createHeap() {
	for(var i = Math.floor(n / 2) - 1; i >= 0; i--) {
		siftdown(i);
	}
}

createHeap();
while(n > 0) {
	swap(0, n - 1);
	n--;
	siftdown(0);
}

console.log(h);