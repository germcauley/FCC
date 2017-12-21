///get all permutations
//use regexp to remove string with repeating charters


function permAlone(str){
    var permArr = [], usedChars = [];
    //REGULAR EXPRESSION TO MATCH REPEATING CHARACTER IN A STRING
    var reg = /(\w)\1+/g;
    var param = str;
    var answer = permute(param);


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
}



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


//console.log(answer);

//console.log(findRepeatingChar(answer))
return(findRepeatingChar(answer).length);
}

//cycle through array to create permutations
permAlone("aab");






