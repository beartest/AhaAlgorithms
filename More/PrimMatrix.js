var edge = [
	[2, 4, 11],
	[3, 5, 13],
	[4, 6, 3],
	[5, 6, 4],
	[2, 3, 6],
	[4, 5, 7],
	[1, 2, 1],
	[3, 4, 9],
	[1, 3, 2]
];
var n=6;
var m =edge.length;
var e=[];

//初始化邻接矩阵
function initEdgeMatrix(){
	for(var i =0;i<n;i++){
		e[i]=[];
		for(var j=0;j<n;j++){
			if(i==j){
				e[i][j]=0;
			}else{
				e[i][j]=Infinity;
			}
		}
	}
	//这里是无向图
	for(var k =0;k<m;k++){
		e[edge[k][0]-1][edge[k][1]-1]=edge[k][2];
		e[edge[k][1]-1][edge[k][0]-1]=edge[k][2];
	}
}

function mst(){
	initEdgeMatrix();
	
	//Prim算法核心部分
	var sum=0;
	var dis=e[0];
	var book=[];
	book[0]=1;
	for(var i =0;i<n-1;i++){
		var min=Infinity;
		var minIndex;
		for(var j=0;j<n;j++){
			if(book[j]!=1&&dis[j]<min){
				min=dis[j];
				minIndex=j;
			}
		}
		book[minIndex]=1;
		sum+=min;
		
		for(var k=0;k<n;k++){
			if(book[k]!=1&&dis[k]>e[minIndex][k]){
				dis[k]=e[minIndex][k];
			}
		}
	}
	console.log(sum);
}

mst();
