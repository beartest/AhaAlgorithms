var e = [
	[0, 1, 12, Infinity, Infinity, Infinity],
	[Infinity, 0, 9, 3, Infinity, Infinity],
	[Infinity, Infinity, 0, Infinity, 5, Infinity],
	[Infinity, Infinity, 4, 0, 13, 15],
	[Infinity, Infinity, Infinity, Infinity, 0, 4],
	[Infinity, Infinity, Infinity, Infinity, Infinity, 0]
];

var n = 6;
var dis = [];
var book = [];
dis = e[0];
book[0] = 1;
for(var i = 0; i < n - 1; i++) {
	var min = Infinity;
	var u;
	for(var j = 0; j < n; j++) {
		if(book[j] != 1 && dis[j] < min) {
			min = dis[j];
			u = j;
		}
	}
	book[u] = 1;
	for(var v = 0; v < n; v++) {
		if(e[u][v] != Infinity && dis[v] > dis[u] + e[u][v]) {
			dis[v] = dis[u] + e[u][v];
		}
	}
}

console.log(dis);