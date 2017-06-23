//第2节 解救小哈
var map = [
	[0, 0, 1, 0],
	[0, 0, 0, 0],
	[0, 0, 1, 0],
	[0, 1, 0, 0],
	[0, 0, 0, 1]
];
var row = 5,
	col = 4,
	startx = starty = 0,
	endx = 3,
	endy = 2;
var book = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
];
var next = [
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0]
];
var min = Infinity;

function dfs(x, y, step) {
	if(x == endx && y == endy) {
		
		if(step < min) {
			min = step;
		}
		
	}

	for(var i = 0; i < next.length; i++) {
		var tx = x + next[i][0];
		var ty = y + next[i][1];
		if(tx < 0 || ty < 0 || tx >= row || ty >= col) {
			continue;
		}
		if(map[tx][ty] == 0 && book[tx][ty] == 0) {
			book[tx][ty] = 1;
			dfs(tx, ty, step + 1);
			book[tx][ty] = 0;
		}
	}
}

book[startx][starty] = 1;
dfs(startx, starty, 0);
console.log(min);