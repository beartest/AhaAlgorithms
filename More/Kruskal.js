var edge = [
	[2, 4, 11],
	[3, 5, 13],
	[4, 6, 3],
	[5, 6, 4],
	[2, 3, 6],
	[4, 5, 7],
	[1, 2, 1],
	[3, 4, 9],
	[1, 3, 2]
];
var n = 6;
var m = edge.length;

function quickSort(left, right) {
	if(left >= right) {
		return;
	}

	var i = left;
	var j = right;
	while(i < j) {
		while(edge[j][2] >= edge[left][2] && i < j) {
			j--;
		}
		while(edge[i][2] <= edge[left][2] && i < j) {
			i++;
		}
		if(i != j) {
			var t = edge[i];
			edge[i] = edge[j];
			edge[j] = t;
		}
	}
	var temp = edge[left];
	edge[left] = edge[i];
	edge[i] = temp;

	quickSort(left, i - 1);
	quickSort(i + 1, right);
}

var f = [];

function getf(v) {
	if(f[v] == v) {
		return v;
	} else {
		f[v] = getf(f[v]);
		return f[v];
	}
}

function merge(v, u) {
	var t1 = getf(v);
	var t2 = getf(u);
	if(t1 != t2) {
		f[t2] = t1;
		return true;
	}
	return false;
}

function mst() {
	//快速排序，对边按照权值从小到大排序
	quickSort(0, m - 1);

	//并查法，初始化f数组
	for(var i = 0; i <= n; i++) {
		f[i] = i;
	}
	var count = 0;
	var sum = 0;
	//Kruskal算法核心部分
	for(var i = 0; i < m; i++) {
		if(merge(edge[i][0], edge[i][1])) {
			count++;
			sum += edge[i][2];
		}
		if(count == n - 1) {
			break;
		}
	}
	if(count < n - 1) {
		console.log("非连通图");
	} else {
		console.log(sum);
	}
}

mst();