function palindrome(str) {
  
    str = str.toLowerCase();
    str = str.replaceAll(/[^\w]|_/g,"");
    
    //only get string length once whitespace, underscores and special characters have been removed
    const strLength = str.length;
  
    let lowerIndex = 0;
  
    for (let upperIndex = strLength-1; upperIndex >= strLength / 2; upperIndex--){
      if (str[upperIndex] !== str[lowerIndex]) {
        return false;
      }
      lowerIndex++;
    }
  
    return true;
  }
  
  console.log(palindrome("race car"));
