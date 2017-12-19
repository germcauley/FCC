function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var count =0;     
  

//sorting function
    function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
        }
    }
//only run if thtere are 2 populated arrays
if(arr1.length>0&&arr2.length>0){
        //compare the two, and update any matching values
    for(var i=0; i <arr1.length; i++){
        //console.log("arr1 item is: "+arr1[i]);
        for(var j=0; j <arr2.length; j++){            
            //console.log("Comparing to arr2 item :"+arr2[j]);
            if(arr1[i][1]==arr2[j][1]){
                arr1[i][0]+=arr2[j][0];
            }
            else{              
            }            
        }
    }
    //add any missing products to inventory    
    //flatten the array to make testing easier
    var flattened = arr1.reduce(function(a,b){
    return a.concat(b);
    });
    //console.log("flattened array is "+ flattened);
    //cycle through arr2 and add missing item to arr1
    for(var k=0; k<arr2.length; k++){
        if(flattened.includes(arr2[k][1])){            
        }
        else{
            //console.log("Adding "+arr2[k]+" to the inventory");
            arr1.push(arr2[k]);            
        }
    }
    console.log(arr1);
    //arr1.sort(arr1[0[1]]);    
   
  
    //////////
    arr1.sort(compareSecondColumn);

    
    console.log("After sorting ")
    console.log(arr1);

    return arr1;

    }
    //if only arr1 has values
else if(arr1.length>0 && arr2.length <1){
    console.log(arr1);
    arr1.sort(compareSecondColumn);    
    console.log("After sorting ")
    console.log(arr1);
    return arr1;
}
//if only arr2 has values;
else {
    console.log(arr2);
    arr2.sort(compareSecondColumn);    
    console.log("After sorting ") 
    console.log(arr2);    
    return arr2;
}

    
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
//updateInventory(curInv, newInv);