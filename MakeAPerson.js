var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName= function(){
    	var nameArr =[];
    	nameArr=firstAndLast.split(" ");
    	var first = nameArr[0];
    	return first;
    };
    this.getLastName= function(){
    	var nameArr =[];
    	nameArr=firstAndLast.split(" ");
    	var last = nameArr[1];
    	return last;
    };
    this.setFirstName= function(first){
    	var nameArr =[];
    	nameArr=firstAndLast.split(" ");
    	nameArr[0]= first;
    	firstAndLast = (nameArr[0]+" "+nameArr[1]);
    	return firstAndLast;
    };
     this.setLastName= function(last){
    	var nameArr =[];
    	nameArr=firstAndLast.split(" ");
    	nameArr[1]= last;
    	firstAndLast = (nameArr[0]+" "+nameArr[1]);
    	return firstAndLast;
    };
     this.setFullName= function(fullname){
    	firstAndLast = fullname;
    	return firstAndLast;
    };


    return firstAndLast;
};

var bob = new Person('Bob Ross');

console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName()); 

bob.setFirstName("Tim");
console.log(bob.getFirstName());
console.log(bob.getFullName());

bob.setLastName("Murphy");
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setFullName("Jim Jones");
console.log(bob.getFullName());
//setFullName(firstAndLast);  this.setLastName= function(last){
   