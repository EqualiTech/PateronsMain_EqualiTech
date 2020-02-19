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
    //function that creates elems and outputs them

    var container = document.getElementById('grid');
    var elem; var elem2; var elem3; var elem4; var elem5; var elem6;


    // hmtlString = "";
    // document.getElementById('grid').innerHTML = "";
    for(var i=0; i<array.length; i++){
        elem = document.createElement('div');
        elem.className = 'gridForOutputs';

        elem2 = document.createElement('div');
        elem2.className = 'middleMeDeleteButton';

        elem3 = document.createElement('button');
        elem3.innerText = '-';
        elem3.id = array[i].date.toDate();
        elem3.className = 'deleteButton';//removed i from here, add back? "+ i"

        elem4 = document.createElement('div');
        elem4.className = 'w3-card spaceMe';
        
        elem5 = document.createTextNode(array[i].name);

        divingDiv1 = document.createElement('div');
        divingDiv1.setAttribute('style', 'font-weight: bold');
        divingDiv2 = document.createElement('div');


        var bElem = document.createElement('br');
        var boldMe = document.createElement('B');

        elem6 = document.createTextNode(array[i].date.toDate());

        // elem.appendChild(elem2);
        elem2.appendChild(elem3);
        elem.appendChild(elem2);
        
        // elem4.appendChild(elem5);
        divingDiv1.appendChild(elem5);
        // elem4.appendChild(bElem);
        // elem4.appendChild(bElem);
        divingDiv2.appendChild(elem6);
        boldMe.appendChild(divingDiv1);
        elem4.appendChild(divingDiv1);
        elem4.appendChild(divingDiv2);
        elem4.appendChild(bElem);

        elem.appendChild(elem4);

        // hmtlString = hmtlString + makeStr(["<div class='gridForOutputs'>",
        // "<div class='middleMeDeleteButton'>", "<button id='", array[i].date.toDate(), "'", "class='", "deleteButton", i, "'",
        // // "onclick='", gatorAddListenerDelete(i), "'",
        // ">",
        // "-", "</div>",  
        // "</button>", 
        // "<div class='w3-card spaceMe'>", 
        // "<div><b>", array[i].name, "</b></div>", "<div>", array[i].date.toDate(), "</div>", "</div>","</div>"]);

        container.appendChild(elem);

    }

    // document.getElementById('grid').innerHTML = "";
    // document.getElementById('grid').innerHTML = hmtlString;


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


var arrayOfClass=[];

var dateToErase = ""; var dateToBePassed;
var dateLessTmp; var dateMoreTmp;
function addListenerDelete(){
    //function that adds 'event delegation' to 'grid' - div - parent function

    //NEXT? 
    document.getElementById('grid').addEventListener('click', async (e)=>{
        if(e.target && e.target.matches(".deleteButton")){
            console.log('time lapsed?', e.target.id );
            dateToErase=e.target.id;
            dateToBePassed = new Date(dateToErase);

            


            dateLessTmp = new Date();
            dateLessTmp = dateToBePassed.setSeconds(dateToBePassed.getSeconds() - 1);

            dateMoreTmp = new Date();
            dateMoreTmp = dateToBePassed.setSeconds(dateToBePassed.getSeconds() + 2);

            var dateLess = new Date(dateLessTmp);
            // dateLess.setSeconds(dateLessTmp);

            var dateMore = new Date(dateMoreTmp);
            // dateMore.setSeconds(dateMoreTmp);


            console.log('dateLess', dateLess);
            console.log('dateMore', dateMore);

            await deleteStuff('paterons', dateLess, dateMore);
        }
    });





    // console.log(docDataArray[i].date.toDate());
}
//================================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}