function checkCashRegister(price, cash, cid) {
	var moneyValues = [[0.01],[0.05],[0.10],[0.25],[1],[5],[10],[20],[100]];
	var outPutChange = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0.00], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
	var allCashInReg =0;
	var final =[];	


	console.log(cid);
	//sum all cash in register
	for(var a=0; a<cid.length;a++){
		allCashInReg+= cid[a][1];
	}
	console.log("All Available Cash in register is: €"+allCashInReg.toFixed(2));
	var changeDue = (Math.abs(price - cash)).toFixed(2);//calculate to 2 decimal places	
	console.log("Change due  is: €"+changeDue);


	//if change due is the same as all cash in register
	if(allCashInReg==changeDue){
		console.log("Closed");
		return "Closed";
	}
	//if change due is more than all cash in register
	else if(allCashInReg<changeDue){
		console.log("Insufficient funds");
		return "Insufficient Funds";
	}
	//else run the script	
	else{
					var k = moneyValues.length;
					while(k>=0){				
						//if the change due divided by the money value is >0
						if((changeDue/moneyValues[k])>=0){
							var denomination = moneyValues[k];//denomination being used
							var cashRegVal = cid[k][1];
							console.log("\nChecking: €"+ denomination+".....");
							var divider = Math.floor(changeDue/moneyValues[k]);// the number of times the denomination fit into the change due.Rounded down 					
							
							if(divider!=0){											
									var divider2=0;
									//set the divider value used to calculate the transactions
									if(changeDue>cashRegVal){
										divider2 = cashRegVal/denomination;
										console.log("Divider value is:"+divider2);
									}
									else {
										divider2 = Math.floor(changeDue/denomination);
										console.log("Divider value is:"+divider2);
									}

									
									var valueToDeduct = parseFloat(denomination*divider2).toFixed(2);
									console.log("Change due is: €"+changeDue);
									console.log("Amount of "+cid[k][0]+"(\'s') in cash register: €"+cashRegVal);
									console.log("Value to deduct: €"+valueToDeduct);
									if(cashRegVal>=valueToDeduct){									
										//Update the value in the cash register
										cashRegVal=cashRegVal-valueToDeduct;
										console.log("Valid transaction!\n");								
										console.log("New amount of "+cid[k][0]+"(\'s) in cash register: €"+cashRegVal);
										changeDue = (changeDue - valueToDeduct).toFixed(2);
										console.log(divider2+" "+cid[k][0]+'(\'s) have been deducted from the Cash Register');
										console.log("Change due is: €"+changeDue);	
										//parse value as float and put into the array	
										valueToDeduct=(valueToDeduct).toFixed(2);
										//outPutChange[k][1]=parseFloat(valueToDeduct);
										//make sure value
										outPutChange[k][1]=parseFloat(valueToDeduct);																					
									}

									else{//if not enough of denomination in cash register
										console.log("Insufficient funds\n");
										return ("Insufficient Funds");
									}s
							}
							else{//if denomination too big to use for change
								console.log("Too big to use\n");								
							}													
						}//end of if				
						k--;						
					}//end of while
		}//end of else

			for (var w=0; w <outPutChange.length; w++){
				if(outPutChange[w][1]==0){
				outPutChange.splice([w],1);		
				}
			}



			
			//final check on change given
			if(changeDue>0){
				console.log("Insufficient funds")
				return "Insufficient Funds";
			}
			else{
		    console.log("\nTransaction Complete! \nHere is a list of your change:\n ");

			console.log(outPutChange.reverse());//print the change					
			return outPutChange.reverse();		
			}
			
		//end of checkchange function		
}//end of function

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
/* checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds". */