var edge = [
	[1, 4],
	[1, 3],
	[4, 2],
	[3, 2],
	[2, 5],
	[2, 6],
	[5, 6]
];
var n = 6;
var m = edge.length;
var u = [],
	v = [],
	first = [],
	next = [];

function initEdgeTable() {
	for(var i = 0; i < n; i++) {
		first[i] = -1;
	}
	for(var i = 0; i < m; i++) {
		var e = edge[i];
		u[i] = e[0] - 1;
		v[i] = e[1] - 1;
		next[i] = first[u[i]];
		first[u[i]] = i;
	}
	for(var i = m; i < m * 2; i++) {
		var e = edge[i - m];
		u[i] = e[1] - 1;
		v[i] = e[0] - 1;
		next[i] = first[u[i]];
		first[u[i]] = i;
	}
}

var flag = [];
var num = [];
var low = [];
var index = -1;
var root = 0;

function dfs(cur, father) {
	var child = 0;
	index++;
	num[cur] = index;
	low[cur] = index;

	var k = first[cur];
	while(k != -1) {
		var i = v[k];
		if(num[i] == undefined) {
			child++;
			dfs(i, cur);
			if(low[cur] > low[i]) {
				low[cur] = low[i];
			}
			if(cur != root && low[i] > num[cur]) {
				console.log(cur + "-" + i);
			}
			if(cur == root && child == 2) {
				console.log(cur + "-" + i);
			}
		} else if(i != father) {
			if(low[cur] > num[i]) {
				low[cur] = num[i];
			}
		}
		k = next[k];
	}
}

function cutvertex() {
	initEdgeTable();
	dfs(0, 0);
}

cutvertex();