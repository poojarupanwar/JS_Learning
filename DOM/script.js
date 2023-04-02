const h2Elem=document.getElementsByTagName("h2");
console.log(h2Elem[1].innerHTML);
h2Elem[1].innerHTML="My hobbies"


console.log(`================ Adding Element ===================`)
const element=document.querySelector("#divProject");
const divEle=document.createElement("p");
const divText=document.createTextNode("Team Size-7");
element.appendChild(divEle);
divEle.appendChild(divText);
console.log(element)


function show(){
    console.log("Click event")
}
const addrEle=document.querySelector("#address")
// addrEle.addEventListener("click",()=>{
//     console.log("Listing Event ,.....");
// });
const remove=addrEle.addEventListener("mouseleave",()=>{
   // console.log("Double click Listing Event ,.....");
   addrEle.style.color="black";
});
 

addrEle.addEventListener("mouseover",()=>{
    console.log("Double click Listing Event ,.....");
   addrEle.style.color="pink";
  // const name=alet("Enter your name")
  //  console.log(name);

});

const hobby=document.querySelector("#hobby")
const heading=document.querySelector("#h2");
const li1=document.createElement("li")
const li2=document.createElement("li")
const li3=document.createElement("li")
const text1=document.createTextNode("Dacing")
 const text2=document.createTextNode("Singing")
const text3=document.createTextNode("Gardening")
 li1.appendChild(text1)
 li2.appendChild(text2)
 li3.appendChild(text3)

hobby.appendChild(li1)
hobby.appendChild(li2)
hobby.appendChild(li3)
 
console.log(heading)
