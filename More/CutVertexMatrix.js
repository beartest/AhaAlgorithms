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
var e = [];

function initEdgeMatrix() {
	for(var i = 0; i < n; i++) {
		e[i] = [];
	}
	for(var i = 0; i < m; i++) {
		e[edge[i][0] - 1][edge[i][1] - 1] = 1;
		e[edge[i][1] - 1][edge[i][0] - 1] = 1;
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
	for(var i = 0; i < n; i++) {
		if(e[cur][i] == 1) {
			if(num[i] == undefined) {
				child++;
				dfs(i, cur);
				if(low[cur] > low[i]) {
					low[cur] = low[i];
				}
				if(cur != root && low[i] >= num[cur]) {
					flag[cur] = 1;
				}
				if(cur == root && child == 2) {
					flag[cur] = 1;
				}
			} else if(i != father) {
				if(low[cur] > num[i]) {
					low[cur] = num[i];
				}
			}
		}
	}
}

function cutvertex() {
	initEdgeMatrix();
	dfs(0, 0);
	for(var i = 0; i < n; i++) {
		if(flag[i] == 1) {
			console.log(i);
		}
	}
}

cutvertex();