// on window load, attach addEventListener
// send data using textbox value
window.onload = (() =>{
    document.getElementById('submitButton').addEventListener('click', ()=>{
        // sends data to firebase
        sendData(document.getElementById('userName').value);
        document.getElementById('userName').value = "";
    }); 
    //NEXT? - get working on Smart Phone
    document.getElementById('dateCentered').addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            //   document.getElementById("myBtn").click();
            await changeTodayAndRunWithIt();
            }
        });
      });
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


