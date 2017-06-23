//第5节 宝岛探险——深度优先搜索
var map = [
	[1, 2, 1, 0, 0, 0, 0, 0, 2, 3],
	[3, 0, 2, 0, 1, 2, 1, 0, 1, 2],
	[4, 0, 1, 0, 1, 2, 3, 2, 0, 1],
	[3, 2, 0, 0, 0, 1, 2, 4, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 5, 3, 0],
	[0, 1, 2, 1, 0, 1, 5, 4, 3, 0],
	[0, 1, 2, 3, 1, 3, 6, 2, 1, 0],
	[0, 0, 3, 4, 8, 9, 7, 5, 0, 0],
	[0, 0, 0, 3, 7, 8, 6, 0, 1, 2],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
];
var next = [
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0]
];
var row = map.length;
var col = map[0].length;
var startx = 5;
var starty = 7;
var sum = 1;
var book = [];
for(var i = 0; i < map.length; i++) {
	book[i] = [];
}
book[startx][starty] = 1;

function islandDFS(x, y) {
	for(var i = 0; i < next.length; i++) {
		var tx = x + next[i][0];
		var ty = y + next[i][1];

		if(tx < 0 || tx >= row || ty < 0 || ty >= col) {
			continue;
		}

		if(map[tx][ty] > 0 && book[tx][ty] != 1) {
			sum++;
			book[tx][ty] = 1;
			islandDFS(tx, ty);
		}
	}
}

islandDFS(startx, starty);
console.log("面积：" + sum);