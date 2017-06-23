var e = [
	[0, 1, 1, Infinity, 1],
	[1, 0, Infinity, 1, Infinity],
	[1, Infinity, 0, Infinity, 1],
	[Infinity, 1, Infinity, 0, Infinity],
	[1, Infinity, 1, Infinity, 0]
];
var book = [];
var que = [];
var head = 0;
book[0] = 1;
que.push(0);

while(head < que.length) {
	var cur = que[head];
	for(var i = 0; i < e.length; i++) {
		if(e[cur][i]==1&& book[i] != 1){
			book[i] = 1;
			que.push(i);
		}
	}
    head++;
}

console.log(que);