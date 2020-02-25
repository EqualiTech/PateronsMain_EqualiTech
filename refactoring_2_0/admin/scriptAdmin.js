//HTML functions for ADMIN
// function makeHTML(){
    
// }


window.onload = ()=>{
    makeCalendar();
}


var basedOnDate = [];

function withinDates(path, inputMe){

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
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}


//=====================================================
var HTMLStringForAdmin = "";
function makeHTML(i){
    //basic foundation for HTMLing the Admin page
    //pushes all HTML to an Array[], then joins them and outputs to innerHTML

    var tmpArr = [];
    tmpArr.push("<div class='pure-g'>");
    tmpArr.push("<div class='pure-u-1-5'><div>");
    tmpArr.push(basedOnDate[i].name);
    tmpArr.push("</div></div>");
    tmpArr.push("<div class='pure-u-1-5'><div class='centerMe'>");
    tmpArr.push(basedOnDate[i].email);
    tmpArr.push("</div></div>");
    tmpArr.push("<div class='pure-u-1-5'><div class='centerMe'>");
    tmpArr.push(basedOnDate[i].phone);
    tmpArr.push("</div></div>");
    tmpArr.push("<div class='pure-u-1-5'><div class='centerMe'>");
    tmpArr.push(basedOnDate[i].reason);
    tmpArr.push("</div></div>");
    tmpArr.push("<div class='pure-u-1-5 centerMe'><div class='centerMe'>");
    tmpArr.push(basedOnDate[i].userType);
    tmpArr.push("</div></div>");
    tmpArr.push("</div>");

    HTMLStringForAdmin += tmpArr.join(""); 
    

    document.getElementById('grid').innerHTML = HTMLStringForAdmin;
}


//=====================================================
function pullDateFromPopupCalendar(){
    //a sort of combo function

    //takes in value of Calendar (popup)
    //finds Range based on Date
    //prints out an Arr[] Str of HTML


    var dateValued = document.getElementById("dateCentered").value;

    try{
        withinDates("paterons3", dateValued);
        wait(800).then(()=>{
            for(var i=0; i<basedOnDate.length; i++){
                makeHTML(i);
            }
        });
    }catch{
        console.log('error');
    }

}