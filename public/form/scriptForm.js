const db2 = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
  db2.settings(settings);

// on window load, attach addEventListener
// send data using textbox value
window.onload = (() =>{
    document.getElementById('submitButton').addEventListener('click', ()=>{
            // sends data to firebase

            newDate = new Date();

            sendData(document.getElementById('userName').value);
            addDataToFirestoreForCompletelyNew('paterons', {name:document.getElementById('userName').value, date:newDate})


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
    db2.collection(path).add(data).
    catch((error)=>{
        console.error('error caught', error);
    });   
}
