//第5节 宝岛探险——广度优先搜索着色
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
var row = map.length;
var col = map[0].length;
var que = [];

function Node(x, y) {
	this.x = x;
	this.y = y;
}

function islandBFS() {
	var next = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0]
	];

	var startx = 5;
	var starty = 7;
	var area = 0;
	var sum = 1;
	var curIndex = 0;
	var book = [];
	for(var i = 0; i < map.length; i++) {
		book[i] = [];
	}
	book[startx][starty] = 1;
	que.push(new Node(startx, starty));
	while(curIndex < que.length) {
		var cur = que[curIndex];
		curIndex++;
		area++;
		for(var i = 0; i < next.length; i++) {
			var tx = cur.x + next[i][0];
			var ty = cur.y + next[i][1];
			if(tx < 0 || tx >= row || ty < 0 || ty >= col) {
				continue;
			}
			if(map[tx][ty] > 0 && book[tx][ty] != 1) {
				sum++;
				book[tx][ty] = 1;
				que.push(new Node(tx, ty));
			}
		}
	}
	console.log("面积：" + sum);
	console.log("面积：" + area);
}

function drawTable() {
	var table = document.createElement("table");
	table.style.borderCollapse = "collapse";
	for(var i = 0; i < row; i++) {
		var tr = document.createElement("tr");
		for(var j = 0; j < col; j++) {
			var td = document.createElement("td");
			var text = document.createTextNode(map[i][j]);
			td.appendChild(text);
			td.style.border = "1px solid gray";
			td.style.width = "30px";
			td.style.height = "30px";
			td.style.textAlign = "center";
			tr.appendChild(td);
		}
		table.appendChild(tr)
	}
	document.body.appendChild(table);
}

function setColor(index) {
	if(index >= que.length) {
		return;
	}
	var x = que[index].x;
	var y = que[index].y;
	var tr = document.getElementsByTagName("tr")[x];
	var td = tr.getElementsByTagName("td")[y];
	td.style.backgroundColor = "yellow";
	setTimeout(function() {
		setColor(index + 1);
	}, 300);
}

drawTable();
islandBFS();
//染色
setTimeout(function() {
	setColor(0);
}, 300)