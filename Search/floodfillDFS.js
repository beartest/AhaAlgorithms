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
var sum = 0;
var book = [];
for(var i = 0; i < map.length; i++) {
	book[i] = [];
}
var que=[];

function dfs(x, y,sum) {
	for(var i = 0; i < next.length; i++) {
		var tx = x + next[i][0];
		var ty = y + next[i][1];
		if(tx < 0 || tx >= row || ty < 0 || ty >= col) {
			continue;
		}
		if(map[tx][ty] > 0 && book[tx][ty] != 1) {
			book[tx][ty] = 1;
			dfs(tx, ty,sum);
			que.push([tx,ty,sum]);
		}
	}
}

function floodfill() {
	for(var i = 0; i < row; i++) {
		for(var j = 0; j < col; j++) {
			if(map[i][j] > 0 && book[i][j] != 1) {
				sum++;
				dfs(i, j,sum);
			}
		}
	}
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
		table.appendChild(tr);
	}
	document.body.appendChild(table);
}

function setColor(index) {
	if(index >= que.length) {
		return;
	}
	var colors=['white','red','green','yellow','blue'];
	var x = que[index][0];
	var y = que[index][1];
	var color = colors[que[index][2]];
	var tr = document.getElementsByTagName("tr")[x];
	var td = tr.getElementsByTagName("td")[y];
	td.style.backgroundColor = color;
	setTimeout(function() {
		setColor(index + 1);
	}, 300);
}

drawTable();
floodfill();
console.log("共有" + sum + "个小岛");
//染色
setTimeout(function() {
	setColor(0);
}, 300)