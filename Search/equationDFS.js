//第1节 不撞南墙不回头——深度优先搜索
var a = new Array(9);
var book = new Array(9);
var total = 0;

function dfs(step) {
	if(step == 9) {
		if(a[0] * 100 + a[1] * 10 + a[2] + a[3] * 100 + a[4] * 10 + a[5] == a[6] * 100 + a[7] * 10 + a[8]) {
			console.log(a[0].toString() + a[1].toString() + a[2].toString() + "+" + a[3].toString() + a[4].toString() + a[5].toString() + "=" + a[6].toString() + a[7].toString() + a[8].toString())
			total++;
		}
		return;
	}
	
	for(var i=0;i<9;i++){
		if(book[i]!=1){
			a[step]=i+1;
			book[i]=1;
			dfs(step+1);
			book[i]=0;
		}
	}
}

dfs(0);
console.log("共"+total/2+"个");
