//HTML functions for ADMIN
function makeHTML(){
    
}

function pullUsersBasedOnTime(date){
    //function that makes dates into seconds

    var toSecDate = new Date(date);
    var timeBefore = toSecDate.getTime()/1000;

    timeBefore-=1;
    console.log('timeBefore', timeBefore);

    var toSecDate2 = new Date(date);
    timeAfter = (toSecDate2.getTime()/1000)+1;
    console.log('timeAfter', timeAfter);

    tmp = db.collection('paterons3');

    tmp2 = tmp.where('dateMe', '>', timeBefore ).where('dateMe', '<', timeAfter);
    tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
        console.log(doc);
        whereIds.push(doc.id);
    }));
}