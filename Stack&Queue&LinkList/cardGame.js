//第3节 纸牌游戏——小猫钓鱼
function cardGame(){
	var q1 = [2,4,1,2,5,6];
	var q2 = [3,1,3,5,6,4];
	var stack =[];
	var book = new Array(10);
	
	for(var i=0;i<book.length;i++){
		book[i]=0;
	}
	
	while(q1.length>0&&q2.length>0){
		var t = q1.shift();
		if(book[t]==0){
			stack.push(t);
			book[t]=1;
		}else{
			q1.push(t);
			while(stack[stack.length-1]!=t){
				var pop =stack.pop();
				q1.push(pop);
				book[pop]=0;
			}
			q1.push(stack.pop());
			book[t]=0;
		}
		if(q1.length==0){
			break;
		}
	    t = q2.shift();
		if(book[t]==0){
			stack.push(t);
			book[t]=1;
		}else{
			q2.push(t);
			while(stack[stack.length-1]!=t){
				var pop =stack.pop();
				q2.push(pop);
				book[pop]=0;
			}
			q2.push(stack.pop());
			book[t]=0;
		}
	}
	
	console.log(q1);
	console.log(q2);
	console.log(stack);
	
}

cardGame();