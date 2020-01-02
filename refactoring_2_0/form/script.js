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

    var clickedYes = true;
    //clicking - YES
    document.getElementById('yes').addEventListener('click', (e)=>{

        e.preventDefault();

        clickedYes=!clickedYes;

        console.log('clicked', );
        if(clickedYes){
            if(document.getElementById('noCheckBox').checked ==true)document.getElementById('noCheckBox').checked =false;

            document.getElementById('yesCheckBox').checked = true;
            // document.getElementById('noCheckBox').checked = false;
            
            
        }else{
            document.getElementById('yesCheckBox').checked = false;
            // document.getElementById('noCheckBox').checked = false;
            clickedYes=!clickedYes;
        }
    });


    //clicking - NO
    var clickedNo = true;
    document.getElementById('no').addEventListener('click', (e)=>{

        e.preventDefault();
        
        clickedNo=!clickedNo;

        console.log('clicked', );
        if(clickedNo){
            if(document.getElementById('yesCheckBox').checked ==true)document.getElementById('yesCheckBox').checked =false;

            document.getElementById('noCheckBox').checked = true;
            
            // document.getElementById('yesCheckBox').checked = false;

            
        }else{
            document.getElementById('noCheckBox').checked = false;
            // document.getElementById('yesCheckBox').checked = false;
            
            clickedNo = !clickedNo;
            
            // clickedNo=!clickedNo;
        }
    });

}