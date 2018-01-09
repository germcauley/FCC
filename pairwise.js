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
	console.log(newArr);
}
















pairwise([1,4,2,3,0,5], 7);
