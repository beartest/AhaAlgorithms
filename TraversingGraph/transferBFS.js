var noteCount = 5;
var edgeCount = 7;
var start = 0;
var end = 4;
var edge = [
	[1, 2],
	[1, 3],
	[2, 3],
	[2, 4],
	[3, 4],
	[3, 5],
	[4, 5]
];

var e = [];
for(var i = 0; i < noteCount; i++) {
	e[i] = [];
}
for(var i = 0; i < edge.length; i++) {
	var n = edge[i][0] - 1;
	var m = edge[i][1] - 1;
	e[n][m] = 1;
	e[m][n] = 1;
}

var book = [];
var step = 0;
var que = [];

que.push(start);
book[start] = 1;

while(que.length > 0) {
	var cur = que.shift();
	if(cur == end) {
		break;
	}
	for(var i = 0; i < noteCount; i++) {
		if(e[cur][i] == 1 && book[i] != 1) {
			if(i == end) {
				console.log(step);
			}
			book[i] = 1;
			que.push(i);
		}
	}
	step++;
}