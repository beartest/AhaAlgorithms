var u = [2, 1, 1, 4, 3];
var v = [3, 2, 5, 5, 4];
var w = [2, -3, 5, 2, 3];
var n = 5;
var m = 5;
var dis = [0,Infinity,Infinity,Infinity,Infinity];
for(var i = 0; i < n - 1; i++) {
	var check = 0;
	for(var j = 0; j < m; j++) {
		if(dis[v[j] - 1] > dis[u[j] - 1] + w[j]) {
			dis[v[j] - 1] = dis[u[j] - 1] + w[j];
			check = 1;
		}
	}
	if(check == 0) {
		break;
	}
}

//检测负权回路
var flag = 0;
for(var i = 0; i <= m; i++) {
	if(dis[v[i] - 1] > dis[u[i] - 1] + w[i]) {
		dis[v[i] - 1] = dis[u[i] - 1] + w[i];
		flag = 1;
	}
}
if(flag == 1) {
	console.log("此图含有负权回路");
} else {
	console.log(dis);
}