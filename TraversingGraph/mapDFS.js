var e = [
	[0, 2, Infinity, Infinity, 10],
	[Infinity, 0, 3, Infinity, 7],
	[4, Infinity, 0, 4, Infinity],
	[Infinity, Infinity, Infinity, 0, 5],
	[Infinity, Infinity, 3, Infinity, 0]
];

var min = Infinity; 
var n = 4;
var book = [];
function dfs(cur,dis){
	if(cur == n){
		if(dis<min){
			min = dis;
		}
		return;
	}
	for(var i=0;i<e.length;i++){
		if(e[cur][i]!=Infinity && book[i]!=1){
			book[i]=1;
			dfs(i,dis+e[cur][i]);
			book[i]=0;
		}
	}
}

book[0]=1;
dfs(0,0);
console.log(min);
