var inputDate = document.getElementById("birthday");

var output = document.getElementById("output");

var button = document.getElementById("button");


button.addEventListener("click",clickHandler);


function clickHandler(){

   

   var bdayStr = inputDate.value;

   if(bdayStr !== ""){

    var splitDate = bdayStr.split("-");
   
    var date = {
        day: Number(splitDate[2]),
        month:Number(splitDate[1]),
        year:Number(splitDate[0])
    };

 
    var isPalindrome = checkPalindromeForAllDateFormat (date);
    
    if(isPalindrome){
        output.innerText = "yes your birthday is a Palindrome😉😊";
    }
    else{

        var [ctr,nextDate] = getNextPalindromeDate(date);

        var [ctr1,prevDate] = getPreviousPalindromeDate(date);

        output.innerText =`The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year},you missed it by ${ctr} days ☹️. And Previous palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year},you missed it by ${ctr1} days ☹️` ;

        }
    }

   }



 function reverseAString(str){

    var charList = str.split("");

    var reversedListOfCharList = charList.reverse();

    var reversedStr = reversedListOfCharList.join("");

    return reversedStr;

 }

 function checkForPalindrome(str){
  

    var reverse = reverseAString(str);
  
    if(str === reverse){

        return true;
    }
    else{
        return false;
    }


 }

 function convertDateToString(date){

   
    var dateStr = {day: "",month:"",year:""};

    if(date.day < 10){
        dateStr.day = "0" + date.day;
    }
    else{
        dateStr.day = date.day.toString();
    }

    if(date.month < 10){
        dateStr.month = "0" + date.month;
    }
    else{
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;

 }

 function getAllDateFormats(date){

   
    var dateStr = convertDateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month +dateStr.year;

    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;

    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;

    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);

    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);

    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

 }


 function checkPalindromeForAllDateFormat(date){
    
    var listOfPalindrome = getAllDateFormats(date);


    var isPalindrome = false;

    for(var i=0;i<listOfPalindrome.length;i++){
            
        if(checkForPalindrome(listOfPalindrome[i]))
        {

         
            isPalindrome = true;
            break;
        }
    }
    return isPalindrome;
 }


//check for leap year
 function isLeapYear(year)
 {
    if(year % 400 === 0){
        return true;
    }
    if(year % 100 === 0){
        return false;
    }
    if(year % 4 === 0 ){
        return true;
    }
    return false;

 }


 function getNextDate(date){

    var day = date.day + 1;
    var month = date.month;
  
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(month === 2)
    {
        if(isLeapYear(year))
        {
            if(day > 29)
            {
                day = 1;
                month++;
            }
        }
        else{
            if(day > 28)
            {
                day = 1;
                month++;
            }
        }
    }
    else{
        if(day > daysInMonth[month-1])
        {
            day = 1;
            month++;
        }

    }
    if(month > 12)
    {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year:year
    };
 }


 function getNextPalindromeDate(date){

    var ctr = 0;
    var nextDate = getNextDate(date);
    while(1)
    {
       ctr++;

        var isPalindrome = checkPalindromeForAllDateFormat(nextDate);
   
        if(isPalindrome){
            break;

        } 
        nextDate = getNextDate(nextDate);
    }
 return [ctr,nextDate];
}


function getPreviousDate(date){


    var day = date.day - 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

    if(day === 0)
    {
        month--;

        if(month === 0)
        {
            month = 12;
            day = 31;
            year--;

        }
        else if(month === 2)
        {
            if(isLeapYear(year)){
                day = 29;
            }
            else{
                day = 28;
            }

        }
        else{
            day = [daysInMonth[month - 1]];
        }

    }
    

    return {
        day: day,
        month: month,
        year:year
    }
 }
 
function getPreviousPalindromeDate(date){
var ctr = 0;
    var previousDate = getPreviousDate(date);
    console.log(previousDate)
    while(1)
    {
       ctr++;

        var isPalindrome = checkPalindromeForAllDateFormat(previousDate);
        console.log(isPalindrome);
        if(isPalindrome){
            break;

        } 
        previousDate = getPreviousDate(previousDate);
        console.log(previousDate);
    }
 return [ctr,previousDate];
}








