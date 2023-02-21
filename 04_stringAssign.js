function stringHandsOn(){
    console.log("************************ 1 ****************************");
    var str="   Hey you are doing good, keep it up    ";
    console.log("Original String:",str);

    console.log("************************ 2 ****************************");
    console.log("Total Length of string:",str.length);

    console.log("************************ 3 ****************************");
    var strTrim=str.trim()
    console.log("String after trim",strTrim);

    console.log("************************ 4 ****************************");
    var totalTrim=str.length-strTrim.length;
    console.log("Total Number of space removed: ",totalTrim);

    console.log("************************ 5 ****************************");
    console.log("First Char after trim is:",strTrim.charAt(0),",Last Char after trim is",strTrim.charAt(strTrim.length-1))
    console.log("************************ 6 ****************************");
    var totalWordStr=strTrim.split(" ");
    console.log("Total number of words in a string :",totalWordStr.length );
    console.log("************************ 7 ****************************");
    console.log("Index of word good is:",strTrim.indexOf('good'))
    console.log("************************ 8 ****************************");
    console.log("String after using substring:",strTrim.substring(22));
    console.log("String after using slice is:",strTrim.substring(22));
    console.log("************************ 9 ****************************");
    console.log("String ends with  'up' :",strTrim.endsWith("up"));
    console.log("************************ 10 ****************************");
    console.log("String starts with  'Hey' :",strTrim.startsWith("Hey"));
     
}
stringHandsOn();