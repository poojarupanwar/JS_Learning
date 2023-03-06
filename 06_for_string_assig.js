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
var  LastWordCharsCount=function(str){
var rev="";
for(let i=str.length-1;i>0;i--){
    var ch=str.charAt(i);
    if(ch==" "){
    break;
    }
    else{
       rev =rev+ch;
    }
   
    }   
    return rev.length; 
}
let word1=LastWordCharsCount("JavaScript is the language Of Internet");
console.log(`Length of last word ${word1}`);
let word2=LastWordCharsCount("I am Angular Developer");
console.log(`Length of last word ${word2}`);
let word3=LastWordCharsCount("Hard Work and commitment is the key of success");
console.log(`Length of last word ${word3}`);
 