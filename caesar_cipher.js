function rot13(str) {
  
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let resultStr = "";
  
    console.log(str);
    
    for (let i = 0; i < str.length; i++){
      if(/[A-Z]/.test(str[i])){
        
        let realLetterIndex = alphabet.indexOf(str[i]) - 13;
        if(realLetterIndex >= 0){
          resultStr += alphabet[realLetterIndex];
        }
        else {
          realLetterIndex += 26;
          resultStr += alphabet[realLetterIndex];
        }  
      }
      
      else {
        resultStr += str[i];
      }
    
    }
    console.log(resultStr);
    return resultStr;
  }
  
  console.log(rot13("SERR  CVMMN!"));