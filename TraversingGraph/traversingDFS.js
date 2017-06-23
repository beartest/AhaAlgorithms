var e = [
	[0, 1, 1, Infinity, 1],
	[1, 0, Infinity, 1, Infinity],
	[1, Infinity, 0, Infinity, 1],
	[Infinity, 1, Infinity, 0, Infinity],
	[1, Infinity, 1, Infinity, 0]
];
var path = [];
var book = [];

function dfs(cur) {
	path.push(cur);
	if(path.length == e.length) {
		return;
	}
	for(var i = 0; i < e.length; i++) {
		if(e[cur][i] == 1 && book[i] != 1) {
			book[i] = 1;
			dfs(i);
		}
	}
}

book[0] = 1;
dfs(0);
console.log(path);