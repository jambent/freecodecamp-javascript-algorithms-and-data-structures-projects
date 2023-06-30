function convertToRoman(num) {

    const convertToRoman = [];
  
    convertToRoman[1000] = 'M'; 
    convertToRoman[900] = 'CM'; 
    convertToRoman[500] = 'D'; 
    convertToRoman[400] = 'CD'; 
    convertToRoman[100] = 'C'; 
    convertToRoman[90] = 'XC'; 
    convertToRoman[50] = 'L'; 
    convertToRoman[40] = 'XL'; 
    convertToRoman[10] = 'X'; 
    convertToRoman[9] = 'IX'; 
    convertToRoman[5] = 'V'; 
    convertToRoman[4] = 'IV'; 
    convertToRoman[1] = 'I'; 
  
    //console.log(convertToRoman)
    const romanNumeral = [];
    let remainder = num;
  
    while(remainder > 0){
      for(let i = 1000; i >0;i--){
        if((remainder - i) >= 0 && typeof convertToRoman[i] === 'string'){
          romanNumeral.push(convertToRoman[i]);
          remainder -= i;
          //console.log(romanNumeral,remainder)
          break;
        }
      }
    }
  
    return romanNumeral.join("");
  }
  
  console.log(convertToRoman(2014));