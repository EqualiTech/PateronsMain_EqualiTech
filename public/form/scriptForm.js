// on window load, attach addEventListener
// send data using textbox value
window.onload = (() =>{
    document.getElementById('submitButton').addEventListener('click', ()=>{
            // sends data to firebase
            sendData(document.getElementById('userName').value);
            document.getElementById('userName').value = "";
            alert('Saved!');
            document.getElementById('changeMeWhenSaved').innerHTML = makeStr(['<h1>','Saved', '</h1>']);
        }); 
        });
    //   });
    // };
// });

//global firebase variable
db = firebase.database();


// function that sends Data to firebase realtime Database
var newDate;
function sendData(name){
    newDate = new Date();

    let ref = db.ref("/paterons/").push({
        name,
        date: newDate.toString(),
    }).then(()=>{
        console.log('data saved');
    });

}


function makeStr(arr){
    //function that joins array elements sent to it
    return arr.join("")
}