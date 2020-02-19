//HTML functions for ADMIN
// function makeHTML(){
    
// }

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
function makeHTML(){
    //basic foundation for HTMLing the Admin page


    HTMLStringForAdmin =  ["<div class='pure-g'><div class='pure-u-1-5'>", basedOnDate[0].name, "</div><div class='pure-u-1-5'><div class='centerMe'>",basedOnDate[0].email, "</div></div><div class='pure-u-1-5'><div class='centerMe'>",basedOnDate[0].phone, "</div></div><div class='pure-u-1-5'><div class='centerMe'>",basedOnDate[0].reason, "</div></div><div class='pure-u-1-5 centerMe'><div class='centerMe'>",basedOnDate[0].userType, "</div></div></div>"].join("");   



    document.getElementById('grid').innerHTML = HTMLStringForAdmin;
}
