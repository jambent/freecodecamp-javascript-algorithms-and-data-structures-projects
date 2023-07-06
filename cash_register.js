function checkCashRegister(price, cash, cid) {
  
  const coinMapping = {
    "PENNY":0.01,
    "NICKEL":0.05,
    "DIME":0.1,
    "QUARTER":0.25,
    "ONE":1.0,
    "FIVE":5.0,
    "TEN":10.0,
    "TWENTY":20.0,
    "ONE HUNDRED":100.0
  }
  
  //Only way to create an independent copy of the original state of cid for 'CLOSED' case:
  const originalcid = cid.map(x=>x.slice());
  const change = [];
  
  let totalCashInDraw = 0 ;
  for (let i = 0; i < cid.length; i++){
    totalCashInDraw += cid[i][1]; 
  }

  let changeRequiredRemainder = Number(cash - price).toFixed(2);
    
    /*Start from largest denomination in drawer, and see if you can use it in the change, before trying smaller and smaller denominations
    */
  for (let i = cid.length - 1; i >= 0; i--){
      let denominationKey = cid[i][0];
      let denominationValue = Number(coinMapping[denominationKey]);
      let denominationMultiple = Math.floor(changeRequiredRemainder/denominationValue);
      let denominationAvailable = Number(cid[i][1]);
      let denomAvailMult = Math.floor(cid[i][1]/denominationValue);
      let changeConstituent;
 
  //If change can be reduced by taking as much of the denomination as possible, do that,
  // otherwise reduce by the amount available in the drawer:      
  if(denominationMultiple > 0 && denominationAvailable > 0 && denominationMultiple < denomAvailMult)
        {
          changeConstituent = Math.round(denominationMultiple * denominationValue *100)/100;
          change.push([denominationKey.toString(), changeConstituent]);
          changeRequiredRemainder = Math.round((changeRequiredRemainder - changeConstituent)*100)/100;
          totalCashInDraw = totalCashInDraw - changeConstituent;
          cid[i][1] = cid[i][1] - changeConstituent;
        }
  else if(denominationMultiple > 0 && denominationAvailable > 0 && denominationMultiple >= denomAvailMult){ 
          changeConstituent = Math.round(denomAvailMult * denominationValue * 100)/100;
          change.push([denominationKey.toString(), changeConstituent]);
          changeRequiredRemainder = Math.round((changeRequiredRemainder - changeConstituent)*100)/100;
          totalCashInDraw = (totalCashInDraw - changeConstituent);
          cid[i][1] = cid[i][1] - changeConstituent;
        }
  }
  
  
  if (Number(changeRequiredRemainder) > 0){
    return {"status":"INSUFFICIENT_FUNDS", "change":[]}
      }
  //Return original cid values if change matches cid exactly:
  else if ((Number(changeRequiredRemainder) === 0) && (totalCashInDraw === 0)){
    return {"status":"CLOSED", "change":originalcid};
  }
  else if ((Number(changeRequiredRemainder) === 0) && (totalCashInDraw > 0)){
    return {"status":"OPEN", "change":change};
  }  
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));