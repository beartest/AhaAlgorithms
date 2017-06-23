var e = [
	[0, 2, 6, 4],
	[Infinity, 0, 3, Infinity],
	[7, Infinity, 0, 1],
	[5, Infinity, 12, 0]
];
var n = 4

for(var k = 0; k < n; k++) {
	for(var i = 0; i < n; i++) {
		for(var j = 0; j < n; j++) {
			if(e[i][j] > e[i][k] + e[k][j]) {
				e[i][j] = e[i][k] + e[k][j];
			}
		}
	}
}

for(var i = 0; i < n; i++) {
	console.log(e[i]);
}