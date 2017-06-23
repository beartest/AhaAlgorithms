//第1节 解密QQ号——队列
function decodeQQ(){
	var arr=[6,3,1,7,5,8,9,2,4];
	while(arr.length>2){
		console.log(arr.shift());
		arr.push(arr.shift());
	}
	console.log(arr.shift());
	console.log(arr.shift());
}

decodeQQ();
