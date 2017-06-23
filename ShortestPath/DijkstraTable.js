var table = [
	[1, 2, 1],
	[1, 3, 12],
	[2, 3, 9],
	[2, 4, 3],
	[3, 5, 5],
	[4, 3, 4],
	[4, 5, 13],
	[4, 6, 15],
	[5, 6, 4]
];

var n = 6; //顶点数
var m = 9; //边数

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

var dis = [];
var book = [];
dis[0] = 0;
for(var i = 0; i < n - 1; i++) {
	var min = Infinity;
	var minIndex;
	for(var j = 0; j < n; j++) {
		if(book[j] != 1 && dis[j] < min) {
			min = dis[j];
			minIndex = j;
		}
	}
	book[minIndex] = 1;
	var k = first[minIndex];
	while(k != -1) {
		if(dis[v[k]]==undefined||dis[v[k]]>dis[minIndex]+w[k]){
		dis[v[k]] = dis[minIndex]+w[k];
		}
		k = next[k];
	}
}

console.log(dis);