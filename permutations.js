//get all permutations
//use regexp to remove string with repeating charters


//cycle through array to create permutations
var permArr = [], usedChars = [];

function permute(input) {
  var i, ch, chars = input.split("");
  for (i = 0; i < chars.length; i++) {
    ch = chars.splice(i, 1);
    usedChars.push(ch);
    if (chars.length == 0)
      permArr[permArr.length] = usedChars.join("");
    permute(chars.join(""));
    chars.splice(i, 0, ch);
    usedChars.pop();
  }
 return permArr;
};

//REGULAR EXPRESSION TO MATCH REPEATING CHARACTER IN A STRING
const reg = /(\w)\1+/g;
var param = ("aab");
var answer = permute(param);

//match repeating characters in a string
//parsestring3= "aab".match(reg);
function findRepeatingChar(arr){
	var output=[];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].match(reg)!=null){
		//console.log("A match!");
		}
		else{
			output.push(arr[i]);
		}
	}
	return output;
}


console.log(answer);

console.log(findRepeatingChar(answer))
console.log(findRepeatingChar(answer).length);


//calculate factorial function NOT USED
function fact(num)
{
    if(num<0)
     return "Undefined";
    var fact=1;
    for(var i=num;i>1;i--)
      fact*=i;
    return fact;
 }