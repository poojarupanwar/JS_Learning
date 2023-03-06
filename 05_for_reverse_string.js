
// var reverse=function(str){
//     var len=str.length;
//     var rev="";
//  for(let i=len-1;i>=0;i--){
//     var ch=str.charAt(i);
//     if(ch==" "){
//         break;
//     }
//         let element=str.charAt(i);
//         rev=rev+element;
//     }
   
    
//     return rev;
// }
// var res=reverse("Internet is worst thing invented");
// console.log(`Reverse string is: ${res}`);


var reverse=function(str){
        var len=str.length;
        var rev="";
     for(let i=len-1;i>=0;i--){
        var ch=str.charAt(i);
        if(ch==" "){
            break;
        }
            let element=str.charAt(i);
            rev=rev+element;
        }
            return rev;
    }
    var res=reverse("Internet is worst thing in the world");
    console.log(`Reverse string is: ${res}`);