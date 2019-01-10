window.onload = (()=>{
    // var security = checkPasswordFunc();

    document.getElementById('checkPassword').addEventListener('click', ()=>{
        checkPasswordFunc();
        hide();
        show('todayPage');
    });

});

var security="";

async function checkPasswordFunc(){
    await pathLoop('/password');
    let psw = await arrayOfVal.toString();
    let compare = document.getElementById('textToCheck').value;
    if(psw == compare){
        console.log('true');
        return security = true;
    }else{
        console.log('false');
        return security = false;
    }
}