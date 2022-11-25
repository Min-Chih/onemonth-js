//Human readable duration format
// When givien a number of seconds, convert it into years, days, hours, minutes, and seconds
// ex. 14610 -> 4 hours, 3 minutes and 30 seconds

function formatDuration (seconds) {
  if ( seconds === 0 ) return 'now' ;
  var typeArr = ['year','day','hour','minute','second'] ;
  var sec = 0 ;
  var minute = 0 ;
  var hour = 0 ;
  var day = 0 ;
  var year = 0 ;
  minute = Math.floor(seconds / 60) ;
  sec = seconds % 60 ;
  
  hour = Math.floor(minute / 60) ;
  minute = minute % 60 ;
  
  day = Math.floor(hour / 24) ;
  hour = hour % 24 ;
  
  year = Math.floor(day / 365) ;
  day = day % 365 ;
  
  var resultArr = [year,day,hour,minute,sec] ;
  var resultStrArr = [] ;
  for ( var i = 0 ; i < resultArr.length ; i ++ ){
    if ( resultArr[i] === 1 ){
      resultStrArr.push(resultArr[i]+' ' + typeArr[i]) ;
    } else if ( resultArr[i] >= 2 ){
      resultStrArr.push(resultArr[i]+' ' + typeArr[i]+'s') ;
    }
  }
  var resultStr = '' ;
  for ( var i = 0 ; i < resultStrArr.length ; i ++ ){
    if ( i === resultStrArr.length - 2 ){
      resultStr += resultStrArr[i] + ' and ' + resultStrArr[i+1] ;
      break ;
    }
    if ( i !== resultStrArr.length -1 ){
      resultStr += resultStrArr[i] + ', ' ;
    } else {
      resultStr += resultStrArr[i];
    }
  }
  return resultStr ;
}
module.exports = formatDuration;

// Reverse the array
// Given an Array A and reverse time K, moving the final object in the array to the front K times

function reverseArray (A,K) {
  for (let i=0; i < K; i++){

  // step 1: POP the array
  let arrayEnd = A.pop();

  // step 2: reverse the array
  A.reverse();

  // step 3: PUSH the arrayEnd to the array
  A.push(arrayEnd);

  // step 4: reverse the array again
  A.reverse();
 }
 return A;
}

module.exports = reverseArray;
