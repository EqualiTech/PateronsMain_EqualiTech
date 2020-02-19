
// on window load, attach addEventListener
// send data using textbox value
// window.onload = (() =>{
//     document.getElementById('submitButton').addEventListener('click', ()=>{
//         sendData(document.getElementById('userName').value);
//     });

//     document.getElementById('print').addEventListener('click', ()=>{
//         printMeOut();
//     });
// });

//global firebase variable
db = firebase.firestore();


var newDate;
function sendData(name){
    // !!!!!!!!!!!!!!!!!!
    // Primary function for Web Form
    // function that sends Data to firebase realtime Database
    newDate = new Date();

    let ref = db.ref("/paterons/").push({
        name,
        date: newDate.toString(),
    }).then(()=>{
        console.log('data saved');
    });

}


// function that pulls all paterons into global data
async function pullData(){
    await general('/paterons/');
    return globalData;
}

// function to spit out paterons
async function printMeOut(){
    await pullData();

    document.getElementById('output').innerHTML = JSON.stringify(globalData);
}

//========================================
async function makeIntoObject(index) {
    // funciton that turns one obj into a pateron

    await pullData();

    if(globalData[index]){
        newPateron(globalData[index].name, globalData[index].date);
    }
}