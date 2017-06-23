var h = [1, 2, 5, 12, 7, 17, 25, 19, 36, 99, 22, 28, 46, 92];

function swap(i, j) {
	var temp = h[i];
	h[i] = h[j];
	h[j] = temp;
}

//删除最小值，并添加i
function siftdown(i) {
	var t;
	//当有子节点时，进行循环
	while(i * 2 + 1 < h.length) {
		//当前节点大于左子节点时，t为左子节点，否则为当前节点
		if(h[i] > h[2 * i + 1]) {
			t = i * 2 + 1;
		} else {
			t = i;
		}
		//存在右节点，且右节点小于左节点，t为右节点
		if(i * 2 + 2 < h.length && h[t] > h[i * 2 + 2]) {
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

h[0] = 23;
siftdown(0);
console.log(h);