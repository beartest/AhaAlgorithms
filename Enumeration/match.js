//第3节 火柴棍等式
function match(m) {
	var sum = 0;
	var max = 1111; //m=24
	for(var a = 0; a < max; a++) {
		for(var b = 0; b < max; b++) {
			var c = a + b;
			if(fun(a) + fun(b) + fun(c) == m - 4) {
				sum++;
				console.log(a + "+" + b + "=" + c);
			}
		}
	}
	console.log('共' + sum + "个式子");
}

function fun(x) {
	var f = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
	var num = 0;
	while(parseInt(x / 10) != 0) {
		num += f[x % 10];
		x = parseInt(x / 10);
	}
	num += f[x % 10];
	return num;
}

match(24);