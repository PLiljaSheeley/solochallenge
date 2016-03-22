//1
var stringList = ["March", "April", "May"];
var month = []
for(var i =0; i<stringList.length;i++){
	month[i] = " " + stringList[i];
}
		console.log("Months listed are "+ month + ".");
//2
var numList = [13, 78, 34];
var c = numList.length - 1;
console.log(numList[c]);
//3
var numArray = []
for(var b = 0; b<numList.length;b++){
	numArray[b] = numList[b] + " ";
}
console.log(numArray);
//4
var sum = 0;
for(var d = 0; d<numList.length;d++){
	sum = sum + numList[d];
}
console.log(sum);
//5

var boolList = [false, true, false];

if(boolList[1]===true){
	console.log(numList[0] + numList[c]);
}
else{
	console.log(numList[1]*numList[1]);
}
//6
for(var e = 0; e<boolList.length; e++){
	if(boolList[e] === true){
		console.log(numList[e]);
	}
}