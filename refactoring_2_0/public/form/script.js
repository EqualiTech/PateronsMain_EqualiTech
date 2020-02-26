// saved to "paterons3" - in Firebase database

function saveWithUpdatedFields(name, userType, reason, contactMe, phone, email){

    var dateMe = new Date();
    adding({name, userType, reason, contactMe, phone, email, dateMe});

}

function onSubmit(){
    try{
        var name = document.getElementById('userName').value;
        var userType = document.getElementById('userType').value;
        var reason = document.getElementById('reason').value;
        var contactMe = contactMeStatus;
        var phone = document.getElementById('contactPhone').value;
        var email = document.getElementById('contactEmail').value;
        saveWithUpdatedFields(name, userType, reason, contactMe, phone, email)
    }catch(err){
        alert("somethig failed,", err);
    }
}

//=============================================





var contactMeStatus = "";
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

    document.getElementById('yes').addEventListener('click', ()=>{
        bothClear(()=>{
            document.getElementById('yesCheckBox').checked = true;
            contactMeStatus = "Yes";
        });
    });
    document.getElementById('no').addEventListener('click', ()=>{
        bothClear(()=>{
            document.getElementById('noCheckBox').checked = true;
            contactMeStatus = "No";
        });

    });

}



function bothClear(callback){
    document.getElementById('yesCheckBox').checked = false;
    document.getElementById('noCheckBox').checked = false; 
    callback();
}


