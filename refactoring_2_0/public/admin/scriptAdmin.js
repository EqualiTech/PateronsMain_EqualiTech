//HTML functions for ADMIN
// function makeHTML(){
    
// }


window.onload = ()=>{
    makeCalendar();

  

}


var basedOnDate = [];

function withinDates(path, inputMe, callback){

    basedOnDate = [];       //trying to resest HTML'd Paterons

    // date = new Date(dateMe); 
    originDate = new Date(inputMe);
    originDate = new Date(originDate);
    afterDate = new Date(originDate);
    beforeDate = new Date(originDate);

    afterDate = afterDate.setHours(23, 59, 59, 0);
    beforeDate = beforeDate.setHours(0, 0, 0, 0);

    afterDate = new Date(afterDate);
    beforeDate = new Date(beforeDate);


    db.collection(path).where("dateMe", "<", afterDate).where("dateMe", ">", beforeDate).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            basedOnDate.push(doc.data());
        });
        // if(basedOnDate.length==0){
        //     console.log('true');
        //     document.getElementById("daily_header").innerHTML  = "0";
        // }
        callback();
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

//=====================================================

// function {

// }


//=====================================================
var HTMLStringForAdmin = "";
var tmpArr = [];
function makeHTML(i){
    //basic foundation for HTMLing the Admin page
    //pushes all HTML to an Array[], then joins them and outputs to innerHTML

    // tmpArr.push("<div class='gridThree'>");
    tmpArr.push("<div class='container margTop'>");
    tmpArr.push("<div class='gridAdmin'>")
    tmpArr.push("<div class='spacing'>");
    tmpArr.push(basedOnDate[i].name);
    tmpArr.push("</div>");
    tmpArr.push("<div class='centerMe spacing'>");
    tmpArr.push(basedOnDate[i].email);
    tmpArr.push("</div>");
    tmpArr.push("<div class='centerMe spacing'>");
    tmpArr.push(basedOnDate[i].phone);
    tmpArr.push("</div>");
    tmpArr.push("<div class='centerMe spacing'>");
    tmpArr.push(basedOnDate[i].reason);
    tmpArr.push("</div>");
    tmpArr.push("<div class='centerMe spacing'>");
    tmpArr.push(basedOnDate[i].userType);
    tmpArr.push("</div>");
    tmpArr.push("</div>");
    tmpArr.push("</div>");

    HTMLStringForAdmin = tmpArr.join(""); 
    

    document.getElementById('grid').innerHTML += HTMLStringForAdmin;
    HTMLStringForAdmin = "";
    tmpArr=[];
}


//=====================================================
function pullDateFromPopupCalendar(){
    //a sort of combo function

    //takes in value of Calendar (popup)
    //finds Range based on Date
    //prints out an Arr[] Str of HTML

    basedOnDate = [];

    var dateValued = document.getElementById("dateCentered").value;

    try{
        // basedOnDate = [];
        withinDates("paterons3", dateValued, ()=>{
            wait(900).then(()=>{
                if(basedOnDate.length==0){
                    document.getElementById("daily_header").innerHTML  = "0";
                }else{
                    document.getElementById("daily_header").innerHTML = basedOnDate.length;
                }

                });
            wait(800).then(()=>{
                    for(var i=0; i<basedOnDate.length; i++){
                        makeHTML(i);
                    }
                
            });
        });

    }catch{
        console.log('error');
    }

}


//=====================================================
//function to make NavBar nice
function removeAll(elem){
    document.getElementById('leftNav').classList.remove("w3-green");
    document.getElementById('rightNav').classList.remove("w3-green");

    document.getElementById(elem).classList.add('w3-green');
}


//==================================================

function whereIsMatchingEmail(email){
    whereMe('paterons3', "email", email);
    
}