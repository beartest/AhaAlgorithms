var nums = [3, 5, 1, 4, 2, 6];

//交换数组h的第i个和第j个
function swap(i, j, h) {
	var temp = h[i];
	h[i] = h[j];
	h[j] = temp;
}

//删除最小堆h中的最小值，并向下调整第i个
function MinimumHeapSiftDown(i, h) {
	var t;
	while(i * 2 + 1 < h.length) {
		if(h[i] > h[2 * i + 1]) {
			t = i * 2 + 1;
		} else {
			t = i;
		}
		if(i * 2 + 2 < h.length && h[t] > h[i * 2 + 2]) {
			t = i * 2 + 2;
		}
		if(t != i) {
			swap(i, t, h);
			i = t;
		} else {
			break;
		}
	}
}

//删除最大堆h中的最大值，并向下调整第i个
function MaximumHeapSiftDown(i, h) {
	var t;
	while(i * 2 + 1 < h.length) {
		if(h[i] < h[2 * i + 1]) {
			t = i * 2 + 1;
		} else {
			t = i;
		}
		if(i * 2 + 2 < h.length && h[t] < h[i * 2 + 2]) {
			t = i * 2 + 2;
		}
		if(t != i) {
			swap(i, t, h);
			i = t;
		} else {
			break;
		}
	}
}

//建立最小堆
function CreateMinimumHeap(h) {
	for(var i = Math.floor(h.length / 2) - 1; i >= 0; i--) {
		MinimumHeapSiftDown(i, h);
	}
}

//建立最大堆
function CreateMaximumHeap(h) {
	for(var i = Math.floor(h.length / 2) - 1; i >= 0; i--) {
		MaximumHeapSiftDown(i, h);
	}
}

var k = 3;

//获取第K大的数
var minimumHeap = [];
for(var i = 0; i < k; i++) {
	minimumHeap.push(nums[i]);
}
CreateMinimumHeap(minimumHeap);
for(var i = k; i < nums.length; i++) {
	if(nums[i] > minimumHeap[0]) {
		minimumHeap[0] = nums[i];
		MinimumHeapSiftDown(0, minimumHeap);
	}
}
console.log("第" + k + "大的是：" + minimumHeap[0]);

//获取第K小的数
var maximumHeap = [];
for(var i = 0; i < k; i++) {
	maximumHeap.push(nums[i]);
}
CreateMaximumHeap(maximumHeap);
for(var i = k; i < nums.length; i++) {
	if(nums[i] < maximumHeap[0]) {
		maximumHeap[0] = nums[i];
		MaximumHeapSiftDown(0, maximumHeap);
	}
}
console.log("第" + k + "小的是：" + maximumHeap[0]);