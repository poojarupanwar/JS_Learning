//Count Total Number of Vowels
 
console.log(`-------------------- step 1  -------------`);
function countVowels(str){
    let count=0;
for(let i=0;i<str.length;i++){
    if(str[i]=='a' || str[i]=='A'||str[i]=='e'||str[i]=='E'||str[i]=='i'||str[i]=='I'||str[i]=='o'||str[i]=='O'||str[i]=='u'||str[i]=='U'){
        count+=1;
    }
}
console.log(`${str} : ${count}`);
}
countVowels("JavaScript is the language Of Internet");
countVowels("I am Angular Developer");
countVowels("Hard Work and commitment is the key of success");

  
console.log(`-------------------- step  2 -------------`);
function LastWordCharsCount(str){
let rev="";

for(let i=str.length-1;i>0;i--){
    if(str[i]==" "){
    return;
    }
    else{
        rev+=str[i];
        console.log("length is:"+rev.length+" "+rev);
    }
    
    }   
    console.log("length is:"+rev.length); 
}
//LastWordCharsCount("JavaScript is the language Of Internet");
LastWordCharsCount("I am Angular Developer");
//LastWordCharsCount("Hard Work and commitment is the key of success");
 