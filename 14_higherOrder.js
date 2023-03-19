function doHomerWork(callback){
    console.log("Doing homework.. ");
    console.log("Finally Homework is completed...");
    callback();
    let submitHomeWork = function (){
        console.log("Hey we both completed homework");
        console.log("Let us submit please...");
    }
    return submitHomeWork;
}
function copyHomework() {
    console.log("Copying homework..."); 
    console.log("Thank you,, I copied homework..."); 
}

doHomerWork(copyHomework);
submitHomeWork