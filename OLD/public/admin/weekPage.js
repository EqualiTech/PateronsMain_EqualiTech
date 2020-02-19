//NEXT? - work on creating a week page
//NEXT? - figure out how to print out week page and begin development

var m1;
var arrayOfDates=[];
function momentRun(datePassed){
  // makes a moment call
  // subtracts 1 day, clones, pushes to arrayOfDates[]
  // returns a date, 7 days previous
  // also: arrayOfDates is populated!
  arrayOfDates=[];
  m1 = moment(datePassed);
  for(var i=0; i<7; i++){
      arrayOfDates.push(m1.toDate());
      m1 = m1.clone().subtract(1, 'day');
      // m1 = m1.clone().subtract(1, 'd')
  }
  console.log(JSON.stringify(m1.toDate()));
  return JSON.stringify(m1.toDate());
}

//========================================

function spitBackDay(passed){
    // function that returns day of week that is part of moment obj
    if(passed==1){
    return "Monday";
    }
    if(passed==2){
    return "Tuesday";   
    }
    if(passed==3){
    return "Wednesday";   
    }
    if(passed==4){
    return "Thursday";   
    }
    if(passed==5){
    return "Friday";    
    }
    if(passed==6){
    return "Saturday";
    }
    if(passed==0){
    return "Sunday";   
    }
  }

  //========================================