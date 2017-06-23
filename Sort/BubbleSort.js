//第2节 邻居好说话——冒泡排序
function bubbleSort(arr) {
	for(var i = 0; i < arr.length; i++) {
		var change = false;
		for(var j = 1; j < arr.length - i; j++) {
			if(arr[j - 1] < arr[j]) {
				var t = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = t;
				change = true;
			}
		}
		if(!change) {
			break;
		}
	}

	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function testBubbleSort() {
	//var arr = [12, 35, 99, 18, 76];
	var arr = [8, 100, 50, 22, 15, 6, 1, 1000, 999, 0];
	bubbleSort(arr);
}

testBubbleSort();

function sortScore(students) {
	for(var i = 0; i < students.length; i++) {
		var change = false;
		for(var j = 1; j < students.length - i; j++) {
			if(students[j - 1].score < students[j].score) {
				var t = students[j - 1];
				students[j - 1] = students[j];
				students[j] = t;
				change = true;
			}
		}
		if(!change) {
			break;
		}
	}

	for(var i = 0; i < students.length; i++) {
		console.log(students[i].name);
	}
}

function Student(name, score) {
	this.name = name;
	this.score = score;
}

function testSortScore() {
	var students = new Array();
	students.push(new Student("huhu", 5));
	students.push(new Student("haha", 3));
	students.push(new Student("xixi", 5));
	students.push(new Student("hengheng", 2));
	students.push(new Student("gaoshou", 8));
	sortScore(students);
}

testSortScore();