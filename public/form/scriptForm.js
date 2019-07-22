const db = firebase.firestore();



// on window load, attach addEventListener
// send data using textbox value
var sendingDate;
window.onload = (() =>{
    document.getElementById('submitButton').addEventListener('click', ()=>{
            // sends data to firebase

            
            sendData(document.getElementById('userName').value);

            sendingDate = new Date();
            // sendingDate = sendingDate.getTime()/1000;
            addDataToFirestoreForCompletelyNew('paterons', {name:document.getElementById('userName').value, date:sendingDate});


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

function addDataToFirestoreForCompletelyNew(path, data){   
    db.collection(path).add(data).
    catch((error)=>{
        console.error('error caught', error);
    });   
}
