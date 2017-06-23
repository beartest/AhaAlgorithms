var table = [
	[1, 4, 9],
	[4, 3, 8],
	[1, 2, 5],
	[2, 4, 6],
	[1, 3, 7]
];

var n = 4; //顶点数
var m = 5; //边数

var u = [],
	v = [],
	w = [];
var first = [],
	next = [];
for(var i = 0; i < n; i++) {
	first[i] = -1;
}

for(var i = 0; i < m; i++) {
	var e = table[i];
	u[i] = e[0] - 1;
	v[i] = e[1] - 1;
	w[i] = e[2];

	next[i] = first[u[i]];
	first[u[i]] = i;
}

var k = first[0];
while(k != -1) {
	console.log(u[k] + "," + v[k] + "," + w[k]);
	k = next[k];
}