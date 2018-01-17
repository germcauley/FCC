
function getIndices(arr,arg){
	var indArr=[];
	var test =[];
	var answer=0;
	for (var i =0; i<arr.length; i++) {
		console.log('testing: '+arr[i]);
		for (var j = i+1; j<=arr.length; j++) {
			console.log(arr[j]);
			//if 2 values added equal to arg
			if(arr[i]+arr[j]==arg){
				//print match
				console.log('match!');
				console.log("Matching indices are: "+i+" "+j);
				
				if(indArr.indexOf(i)==-1&&indArr.indexOf(j)==-1){
					indArr.push(i,j);
				}						
				
			} 								
		}
	}

		
	for(var p=0; p<indArr.length; p++){
		answer+=indArr[p];
		}
	console.log(indArr);
	console.log(answer);
	return answer;	
}



