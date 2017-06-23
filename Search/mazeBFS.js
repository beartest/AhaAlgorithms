//第3节 层层递进——广度优先搜索
function Node(x, y, s, f) {
	this.x = x; //横坐标
	this.y = y; //纵坐标
	this.s = s; //步数
	this.f = f; //父节点编号
}

function bfs() {
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
	var que = [];
	var curIndext = 0;
	book[startx][starty] = 1;
	que.push(new Node(startx, starty, 0, -1));
	while(curIndext < que.length) {
		var n = que[curIndext];
		for(var i = 0; i < next.length; i++) {
			var tx = n.x + next[i][0];
			var ty = n.y + next[i][1];
			if(tx < 0 || ty < 0 || tx >= row || ty >= col) {
				continue;
			}
			if(map[tx][ty] == 0 && book[tx][ty] == 0) {
				book[tx][ty] = 1;
				que.push(new Node(tx, ty, n.s + 1, curIndext));
			}
			if(tx == endx && ty == endy) {
				console.log(n.s + 1);
				var path = [];
				path.unshift("(" + tx + "," + ty + ")");
				path.unshift("(" + n.x + "," + n.y + ")");
				while(n.f > -1) {
					n = que[n.f];
					path.unshift("(" + n.x + "," + n.y + ")");
				}
				console.log(path.join('-'));
				return;
			}
		}
		curIndext++;
	}
}

bfs();