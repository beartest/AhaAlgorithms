var f = [];
var n = 10;
var relation = [
	[1, 2],
	[3, 4],
	[5, 2],
	[4, 6],
	[2, 6],
	[8, 7],
	[9, 7],
	[1, 6],
	[2, 4]
];

function init() {
	for(var i = 1; i <= n; i++) {
		f[i] = i;
	}
}

function getf(v) {
	if(f[v] == v) {
		return v;
	} else {
		//这里是路径压缩，每次在函数返回的时候，顺带把路上遇到的人的值改为集团的最高领导人。可以提高以后查找集团最高领导的速度。
		//由于使用递归，时间复杂度不会增大。
		f[v] = getf(f[v]);
		return f[v];
		//return getf(f[v]);
	}
}

function merge(v, u) {
	var t1 = getf(v);
	var t2 = getf(u);
	if(t1 != t2) {
		f[t2] = t1;
		//左边的变成右边的boss
	}
}

function unionfind() {
	init();
	for(var i = 0; i < relation.length; i++) {
		merge(relation[i][0], relation[i][1]);
	}

	var count = 0;
	for(var i = 1; i <= n; i++) {
		if(f[i] == i) {
			count++;
		}
	}
	console.log(count);
}

unionfind();