function pairwise(arr, arg) {



	getIndices(arr,arg);


  return arg;
}




function getIndices(arr,arg){
	var newArr=[];
	for (var i =0; i<arr.length; i++) {
		console.log('test'+arr[i]);
		for (var j = i+1; j<arr.length; j++) {
			console.log(arr[j]);

			arr[i]+arr[j]==arg ?
				console.log('match!') +
				newArr.push([i,j])	
				:console.log('');
		}
	}
	for(var x=0; x<arg;x++){

	}
	var merged = [].concat.apply([], newArr);
	console.log(merged);
	var x=0;
	while(x < merged.length){
		var answer = merged[x]+=merged[x]+1;
		x++;
		console.log('the answer is:'+answer);
	}
	console.log(newArr);
	return(answer);
}


//pairwise([1,4,2,3,0,5], 7);
pairwise([0, 0, 0, 0, 1, 1], 1);
