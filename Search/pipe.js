var map = [
	[5, 3, 5, 3],
	[1, 5, 3, 0],
	[2, 3, 5, 1],
	[6, 1, 1, 5],
	[1, 5, 5, 4]
];
var row = map.length;
var col = map[0].length;
var startx = 0,
	starty = 0,
	startfront = 1;
var endx = 4,
	endy = 3,
	endfrond = 1;
var book = [];
for(var i = 0; i < row; i++) {
	book[i] = [];
}
var flag = 0;
var path = [];

function dfs(x, y, front) {
	if(x==endx&&y==endy+1){
		flag=1;
		console.log(path);
	}
	
	if(x < 0 || x >= row || y < 0 || y >= col) {
		return;
	}
	if(book[x][y] == 1) {
		return;
	}

	book[x][y] = 1;
	path.push([x,y,front]);
	
	if(map[x][y] == 5 || map[x][y] == 6) {
		if(front == 1) {
			dfs(x, y + 1, front);
		} else if(front == 2) {
			dfs(x + 1, y, front);
		} else if(front == 3) {
			dfs(x, y - 1, front);
		} else if(front == 4) {
			dfs(x - 1, y, front);
		}
	}

	if(map[x][y] >= 1 && map[x][y] <= 4) {
		if(front == 1) {
			dfs(x + 1, y, 2);
			dfs(x - 1, y, 4);
		} else if(front == 2) {
			dfs(x, y + 1, 1);
			dfs(x, y - 1, 3);
		} else if(front == 3) {
			dfs(x - 1, y, 4);
			dfs(x + 1, y, 2);
		} else if(front == 4) {
			dfs(x, y + 1, 1);
			dfs(x, y - 1, 3);
		}
	}
	
	book[x][y]=0;
	path.pop();
}

dfs(startx,starty,startfront);

if(flag==1){
	console.log("可铺设");
	
}else{
	console.log("不可铺设");
}
