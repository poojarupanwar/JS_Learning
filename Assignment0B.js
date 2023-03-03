function check_leap_year(leapYear){
     
     if((leapYear%4==0) || (leapYear%100===0) || (leapYear%200===0 ) ){
        console.log(`Year ${leapYear} is aleap year`);
     }
     else if(leapYear!=Number){
        console.log(` '${leapYear}'  is not a valid Year, Please provide valid leap year.`)
     }
    else{
        console.log("Not a leap year")
    }
    
    
    
}
check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(null);
check_leap_year("Twenty Twenty");
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(1750);



