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
}