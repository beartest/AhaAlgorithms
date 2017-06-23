//第1节 坑爹的奥数
function equation() {
	var total=0;
	for(var a = 1; a <= 9; a++) {
		for(var b = 1; b <= 9; b++) {
			for(var c = 1; c <= 9; c++) {
				for(var d = 1; d <= 9; d++) {
					for(var e = 1; e <= 9; e++) {
						for(var f = 1; f <= 9; f++) {
							for(var g = 1; g <= 9; g++) {
								for(var h = 1; h <= 9; h++) {
									for(var i = 1; i <= 9; i++) {
										if(a!=b&&a!=c&&a!=d&&a!=e&&a!=f&&a!=g&&a!=h&&a!=i
											   &&b!=c&&b!=d&&b!=e&&b!=f&&b!=g&&b!=h&&b!=i
											         &&c!=d&&c!=e&&c!=f&&c!=g&&c!=h&&c!=i
											               &&d!=e&&d!=f&&d!=g&&d!=h&&d!=i
											                     &&e!=f&&e!=g&&e!=h&&e!=i
											                           &&f!=g&&f!=h&&f!=i
											                                 &&g!=h&&g!=i
											                                       &&h!=i
										&&a*100+b*10+c+d*100+e*10+f==g*100+h*10+i)
										{
											console.log(a.toString()+b.toString()+c.toString()+"+"+d.toString()+e.toString()+f.toString()+"="+g.toString()+h.toString()+i.toString())
											total++;
										}
									}
								}
							}
						}
					}
				}
			}
		}		
	}
	console.log(total/2);
}

function equationImprove() {
	var total=0;
	var a = new Array(9);
	
	for(a[0] = 1; a[0] <= 9; a[0]++) {
		for(a[1] = 1; a[1] <= 9; a[1]++) {
			for(a[2] = 1; a[2] <= 9; a[2]++) {
				for(a[3] = 1; a[3] <= 9; a[3]++) {
					for(a[4] = 1; a[4] <= 9; a[4]++) {
						for(a[5] = 1; a[5] <= 9; a[5]++) {
							for(a[6] = 1; a[6] <= 9; a[6]++) {
								for(a[7] = 1; a[7] <= 9; a[7]++) {
									for(a[8] = 1; a[8] <= 9; a[8]++) {
										var book=new Array(9);
										var match = true;
										for(var i=0;i<a.length;i++){
											if(book[a[i]]==1){
												match = false;
												break;
											}else{
												book[a[i]]=1;
											}
										}
										if(match&&a[0]*100+a[1]*10+a[2]+a[3]*100+a[4]*10+a[5]==a[6]*100+a[7]*10+a[8])
										{
											console.log(a[0].toString()+a[1].toString()+a[2].toString()+"+"+a[3].toString()+a[4].toString()+a[5].toString()+"="+a[6].toString()+a[7].toString()+a[8].toString())
											total++;
										}
									}
								}
							}
						}
					}
				}
			}
		}		
	}
	console.log(total/2);
}
equation();

//equationImprove();

