//第4节 再解炸弹人 广度优先搜索
var map = [
	['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
	['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', 'G', 'G', '.', '#'],
	['#', '#', '#', '.', '#', 'G', '#', 'G', '#', 'G', '#', 'G', '#'],
	['#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', 'G', '#'],
	['#', 'G', '#', '.', '#', '#', '#', '.', '#', 'G', '#', 'G', '#'],
	['#', 'G', 'G', '.', 'G', 'G', 'G', '.', '#', '.', 'G', 'G', '#'],
	['#', 'G', '#', '.', '#', 'G', '#', '.', '#', '.', '#', '.', '#'],
	['#', '#', 'G', '.', '.', '.', 'G', '.', '.', '.', '.', '.', '#'],
	['#', 'G', '#', '.', '#', 'G', '#', '#', '#', '.', '#', 'G', '#'],
	['#', '.', '.', '.', 'G', '#', 'G', 'G', 'G', '.', 'G', 'G', '#'],
	['#', 'G', '#', '.', '#', 'G', '#', 'G', '#', '.', '#', 'G', '#'],
	['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', '.', 'G', 'G', '#'],
	['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
];
var next = [
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0]
];

function Node(x, y, s, f) {
	this.x = x;
	this.y = y;
}

function getnum(x, y) {
	var sum = 0;
	for(var i = 0; i < next.length; i++) {
		var tx = x;
		var ty = y;
		while(map[tx][ty] != '#') {
			if(map[tx][ty] == 'G') {
				sum++;
			}
			tx += next[i][0];
			ty += next[i][1];
		}
	}
	return sum;
}

function bomberBFS() {
	var startx = starty = 3;
	var p = startx,
		q = starty,
		max = getnum(startx, starty);
	var que = [];
	var book = [];
	for(var i = 0; i < map.length; i++) {
		book[i] = [];
	}

	book[startx][starty] = 1;
	que.push(new Node(startx, starty));
	while(que.length > 0) {
		var top = que.shift();
		for(var i = 0; i < next.length; i++) {
			var tx = top.x + next[i][0];
			var ty = top.y + next[i][1];

			if(map[tx][ty] == '.' && book[tx][ty] != 1) {
				book[tx][ty] = 1;
				que.push(new Node(tx, ty));
				var num = getnum(tx, ty);
				if(num > max) {
					p = tx;
					q = ty;
					max = num;
				}
			}
		}
	}

	console.log("在(" + p + "," + q + ")处，一共消灭" + max + "个敌人");
}

bomberBFS();