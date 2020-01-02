// saved to "paterons3" - in Firebase database

function saveWithUpdatedFields(name, userType, reason, phone, email){

    var dateMe = new Date();
    adding({name, userType, reason, phone, email, dateMe});

}

function onSubmit(){
    try{
        var name = document.getElementById('userName').value;
        var userType = document.getElementById('userType').value;
        var reason = document.getElementById('reason').value;
        var phone = document.getElementById('contactPhone').value;
        var email = document.getElementById('contactEmail').value;
        saveWithUpdatedFields(name, userType, reason, phone, email)
    }catch(err){
        alert("somethig failed,", err);
    }
}

window.onload = ()=>{
    document.getElementById('submitButton').addEventListener('click', ()=>{
        onSubmit();
    });

    document.getElementById('hiddenOther').style.display='none';

    document.getElementById('reason').addEventListener('change', ()=>{
        if(document.getElementById('reason').value == "other reasons"){
            document.getElementById('hiddenOther').style.display='block';
        }else{
            document.getElementById('hiddenOther').style.display="none";
        }

    }); 

    var clickedYes = false;
    //clicking - YES
    document.getElementById('yes').addEventListener('click', ()=>{
        console.log('clicked', );
        if(clickedYes){
            document.getElementById('yesCheckBox').checked = true;
            clickedYes=!clickedYes;
        }else{
            document.getElementById('yesCheckBox').checked = false;
            clickedYes=!clickedYes;
        }
    });


    //clicking - NO
    var clickedNo = false;
    document.getElementById('no').addEventListener('click', ()=>{
        console.log('clicked', );
        if(clickedNo){
            document.getElementById('noCheckBox').checked = true;
            clickedNo=!clickedNo;
        }else{
            document.getElementById('noCheckBox').checked = false;
            clickedNo=!clickedNo;
        }
    });

}