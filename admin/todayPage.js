

//================================================
let date1;
let date2;
function findPatronsBasedOnDates(passedFirst, passedSecond){
    // function that compares date sent, is the same as second date passed
    // this can be used to compare 'today's' date with a pateron's date

    // pass Pateron date and today's date
    // it's compared -> returning either True/False
    // (to be used in a for loop)
    let date1 = new Date(passedFirst);
    // let date2 = new Date(studentArray[1].time);
    let date2 = new Date(passedSecond);

    if(date1.getDate()==date2.getDate() && date1.getMonth()==date2.getMonth() && date1.getFullYear()==date2.getFullYear()){
        console.log('correct');
        return true;
    }else{
        return false;
    }

    
}
//========================================

let arrayOfPatronsFound = [];
function loopThroughFindCorrects(passed){
    // function that passes array, dateFrom, dateTo
    // loops through student array
    // to find paterons that match the dates passed to the dates requested
    // (requesting 1 week (7days) from this point, previous)
  

    //this if statement, allows for the passing and comparing of just one date, instead of the whole array of 7 days
    if(passed){
      arrayOfDates=[];
      arrayOfDates.push(moment(passed));
      console.log('arrayOfDates', arrayOfDates);
    }
  



    arrayOfPatronsFound=[];
    for(let i=0; i<myArray.length;i++){ //myArray comes from newPateron obj
        for(let ii=0; ii<arrayOfDates.length;ii++){
            if(findPatronsBasedOnDates(arrayOfDates[ii], myArray[i].time)){
                arrayOfPatronsFound.push([myArray[i].name, myArray[i].time]);
                console.log('arrayOfPatronsFound', arrayOfPatronsFound);
            }
        }
    }
    return arrayOfPatronsFound.length;
}

async function amISameDate(todaysDate){
    // function that takes today's date
    // compares to all data
    // saves to array (arrayOfTodaysPaterons)
    // re-saves to newPaterons objs
    // then prints out

    myArray=[];
    await pullData();


    globsLength = globalData.length;
    for (let i = 0; i < globsLength; i++) {
        await makeIntoObject(i);
    }

    let arrayOfTodaysPaterons=[];  //this array holds, all Paterons found on specifid day. Foundin parameter of 'todaysDate'
    for (let i = 0; i < myArray.length; i++) {
        console.log('myArray', myArray);
        if(findPatronsBasedOnDates(myArray[i].time, moment(todaysDate))==true){
            // newPateron(myArray[i].name, myArray[i].time);
            arrayOfTodaysPaterons.push([myArray[i].name, myArray[i].time]);
        }
    }

    myArray=[];  
    for (let i = 0; i < arrayOfTodaysPaterons.length; i++) {
        newPateron(arrayOfTodaysPaterons[i][0], arrayOfTodaysPaterons[i][1]);
        
    }


    await print(myArray);


}