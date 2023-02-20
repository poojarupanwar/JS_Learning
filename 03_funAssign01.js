//function with no arguments and no return vaalue

function favLang()
{
    console.log("My favorate language is Java Script");
}
favLang();
function favCountry(){
    console.log('My favorate country is india');
}
favCountry();

 //function with arguments and no return value

function personalDetails(fname,lname,collage){
console.log('First Name: ',fname,' Lastname:',lname,"Collage Name :",collage);
}
personalDetails('Pooja','Rupanwar','GSMCOE');


function swapValuesDude(val1,val2){
console.log('Before Swapping :',val1,val2);
var tmp=val1;
val1=val2;
val2=tmp;
console.log('After swapping :',val1,val2);
}
swapValuesDude('virat','anushka')
swapValuesDude(1000,2000)


//function with parameters and return type
function addThreeValues(val1,val2,val3)
{
return val1+val2+val3;
}
var sum=addThreeValues(10.23,600,40);
console.log(sum);
var text=addThreeValues("Hello ","good ","morning");
console.log(text);


