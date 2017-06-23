//第4节 数的全排列
function fullPermutation() {
	for(var a = 1; a <= 3; a++) {
		for(var b = 1; b <= 3; b++) {
			for(var c = 1; c <= 3; c++) {
				if(a!=b&&a!=c&&b!=c){
					console.log(a.toString()+b.toString()+c.toString());
				}
			}
		}
	}
}

fullPermutation();