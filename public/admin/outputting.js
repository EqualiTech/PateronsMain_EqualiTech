//momentRun(<desired Date>) - (weekpage)

// OR 

//amISameDate(<todays Date>) - (finds all Paterons from selected date)

//arrayOfDates (populated)
//outputting Function

var globsLength=0;
async function getOrganized(){
    // function that makes all Firebase data pulled from server into Pateron objs
    // each obj - .name & .time

    await pullData();
    globsLength = globalData.length;
    for (let i = 0; i < globsLength; i++) {
        await makeIntoObject(i);
    }
}

// let hmtlString = "";
function print(array){
    hmtlString = "";
    document.getElementById('grid').innerHTML = "";
    // hmtlString = document.getElementById('grid').innerHTML;
    for(var i=0; i<myArray.length; i++){
        hmtlString = hmtlString +  "<div>"+array[i].name+"</div>"+"<div>"+array[i].time+"</div>";
        
        // document.getElementById('grid').innerHTML = document.getElementById('grid').innerHTML + "<div>"+array[i].name+"</div>"+"<div>"+array[i].time+"</div>";
        console.log('myArray', myArray);
        console.log('hmtlString', hmtlString);
    }
    document.getElementById('grid').innerHTML = "";
    document.getElementById('grid').innerHTML = hmtlString;
    hmtlString = "";
    
}

//========================================

function changeTodayAndRunWithIt(){
    //function that changes 'Today's Page' to date entered into textarea

    var date = document.getElementById("newDate").value;
    
    date = date.trim();
    if(moment(date)._isValid==true){
        console.log('momentDate', moment(date));
        amISameDate(moment(date));

    }else{
        alert("Not a Date!\nTry again...")
    }
    console.log('date', date);


}

