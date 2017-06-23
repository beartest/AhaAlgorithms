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

var u = [],
	v = [],
	w = [];
var first = [],
	next = [];

function initEdgeTable() {
	for(var i = 0; i < n; i++) {
		first[i] = -1;
	}

	for(var i = 0; i < m; i++) {
		var e = edge[i];
		u[i] = e[0] - 1;
		v[i] = e[1] - 1;
		w[i] = e[2];

		next[i] = first[u[i]];
		first[u[i]] = i;
	}

	for(var i = m; i < 2 * m; i++) {
		var e = edge[i - m];
		u[i] = e[1] - 1;
		v[i] = e[0] - 1;
		w[i] = e[2];

		next[i] = first[u[i]];
		first[u[i]] = i;
	}

}

var dis = [];
var pos = [];
var h = [];

function swap(x, y) {
	var t = h[x];
	h[x] = h[y];
	h[y] = t;

	t = pos[h[x]];
	pos[h[x]] = pos[h[y]];
	pos[h[y]] = t;
}

function siftdown(i) {
	while(i * 2 + 1 <= h.length) {
		var t = i;
		if(dis[h[i]] > dis[h[i * 2 + 1]]) {
			t = i * 2 + 1;
		}
		if(i * 2 + 2 <= h.length && dis[h[t]] > dis[h[i * 2 + 2]]) {
			t = i * 2 + 2;
		}
		if(t != i) {
			swap(t, i);
			i = t;
		} else {
			break;
		}
	}
}

function siftup(i) {
	while(i > 0) {
		var t = Math.ceil(i / 2) - 1;
		if(dis[h[i]] < dis[h[t]]) {
			swap(t, i);
			i = t;
		} else {
			break;
		}
	}
}

function pop() {
	var t = h[0];
	h[0] = h.pop();
	pos[h[0]] = 0;
	siftdown(0);
	return t;
}

function mst() {
	initEdgeTable();

	var sum = 0;
	var book = [];
	book[0] = 1;

	//初始化dis
	dis[0] = 0;
	for(var i = 1; i < n; i++) {
		dis[i] = Infinity;
	}
	var indexk = first[0];
	while(indexk != -1) {
		dis[v[indexk]] = w[indexk];
		indexk = next[indexk];
	}

	//初始化堆
	for(var i = 0; i < n; i++) {
		h[i] = i;
		pos[i] = i;
	}
	for(var i = Math.floor(h.length / 2) - 1; i >= 0; i--) {
		siftdown(i);
	}
	pop();

	for(var i = 0; i < n - 1; i++) {
		var minIndex = pop();
		var min = dis[minIndex];

		book[minIndex] = 1;
		sum += min;

		var k = first[minIndex];
		while(k != -1) {
			if(book[v[k]] != 1 && (dis[v[k]] == undefined || dis[v[k]] > w[k])) {
				dis[v[k]] = w[k];
				siftup(pos[v[k]]);
			}
			k = next[k];
		}
	}
	console.log(sum);
}

mst();