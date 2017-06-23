var u = [2, 1, 1, 4, 3];
var v = [3, 2, 5, 5, 4];
var w = [2, -3, 5, 2, 3];
var n = 5;
var m = 5;
var dis = [];
var book = [];
var que = [];
dis[0] = 0;
que.push(0);
book[0] = 1;

while(que.length > 0) {
	var cur = que.shift();
	for(var i = 0; i < m; i++) {
		if(book[v[i] - 1] != 1 && u[i] - 1 == cur) {
			book[v[i]-1]=1;
			if(dis[v[i] - 1] == undefined || dis[v[i] - 1] > dis[cur] + w[i]) {
				dis[v[i] - 1] = dis[cur] + w[i];
				que.push(v[i]-1);
			}
		}
	}
	book[cur] = 0;
}

console.log(dis);