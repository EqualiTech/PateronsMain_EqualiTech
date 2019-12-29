window.onload = (()=>{
    //alert('yup');
    /* var input = document.getElementById("newDate");
    input.addEventListener("keyup", function(event) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Trigger the button element with a click
          changeTodayAndRunWithIt();
          document.getElementById("newDate").value = "";
        }
      }); */
      document.getElementById('dateCentered').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        //   document.getElementById("myBtn").click();
        changeTodayAndRunWithIt();
        }
          
        });
        // creatingCredential;
        buttonLogin();  //add listeners to login button
        checkUser();    //check user auth
        // addListenerDelete();    //delete button listeners

});

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