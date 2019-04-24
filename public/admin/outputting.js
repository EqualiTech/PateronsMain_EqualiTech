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
// function print(array){
//     hmtlString = "";
//     document.getElementById('grid').innerHTML = "";
//     // hmtlString = document.getElementById('grid').innerHTML;
//     for(var i=0; i<myArray.length; i++){
//         // hmtlString = hmtlString +  "<div>"+array[i].name+"</div>"+"<div>"+array[i].time+"</div>";
//         hmtlString = hmtlString + makeStr(["<div class='gridForOutputs'>", "<div>", "<button>", "-", "</button>", "</div>" , "<div class='w3-card spaceMe'>", "<div><b>", array[i].name, "</b></div>", "<div>", array[i].time, "</div>", "</div>"]);
        
// x


//         // document.getElementById('grid').innerHTML = document.getElementById('grid').innerHTML + "<div>"+array[i].name+"</div>"+"<div>"+array[i].time+"</div>";
//         console.log('myArray', myArray);
//         console.log('hmtlString', hmtlString);
//     }
//     document.getElementById('grid').innerHTML = "";
//     document.getElementById('grid').innerHTML = hmtlString;
//     hmtlString = "";
    
// }

//========================================
var date;
function changeTodayAndRunWithIt(){
    //function that changes 'Today's Page' to date entered into textarea

    date = document.getElementById("dateCentered").value;
    
    date = date.trim();
    if(moment(date)._isValid==true){
        console.log('momentDate', moment(date));
        // amISameDate(moment(date));

        whereFinder(moment(date));
        document.getElementById('grid').innerHTML = "";
        populatePaterons();
            

        // }

    }else{
        alert("Not a Date!\nTry again...")
    }
    console.log('date', date);


}

//================================================
//function outputting NEW

let hmtlString = "";
function outputNew(array){
    hmtlString = "";
    document.getElementById('grid').innerHTML = "";
    for(var i=0; i<array.length; i++){
        hmtlString = hmtlString + makeStr(["<div class='gridForOutputs'>",
        "<div class='middleMeDeleteButton'>", "<button>",
        "-", "</div>",  
        "</button>", 
        "<div class='w3-card spaceMe'>", 
        "<div><b>", array[i].name, "</b></div>", "<div>", array[i].date.toDate(), "</div>", "</div>","</div>"]);

    }

    document.getElementById('grid').innerHTML = "";
    document.getElementById('grid').innerHTML = hmtlString;

}

function populatePaterons(){
    wait(1000).then(()=>{
        outputNew(docDataArray);
        if(document.getElementById('grid').innerHTML == ""&&docDataArray!=""){
            populatePaterons();
        }
        console.log('docDataArray', docDataArray);
        document.getElementById('daily_header').innerText = docDataArray.length;
    });
}


//================================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}