var edge = [
	[6, 5],
	[1, 4],
	[1, 5],
	[2, 5],
	[2, 6],
	[3, 4]
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

var book = [];
var match = [];

function dfs(cur) {
	for(var i = 0; i < n; i++) {
		if(book[i] != 1 && e[cur][i] == 1) {
			book[i] = 1;
			if(match[i] == undefined || dfs(match[i])) {
				match[i] = cur;
				match[cur] = i;
				return true;
			}
		}
	}
	return false;
}

function bipartiteGraph() {
	initEdgeMatrix();
	var sum = 0;
	for(var i = 0; i < n; i++) {
		book = [];
		if(dfs(i)) {
			sum++;
		}
	}
	console.log(sum);
}

bipartiteGraph();