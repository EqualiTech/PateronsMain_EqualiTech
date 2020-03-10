var wholeDoc=[];
async function getting(main, docMe){
    wholeDoc=[];
    await db.collection(main).doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());
        await wholeDoc.push(snap.data());
    });

}

//where function stuff
var whereIds=[];
async function whereMe(root, first, second){

    whereIds=[];
    tmp = db.collection(root);

    tmp2 = tmp.where(first, '==', second)

    tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
        console.log(doc)
        await whereIds.push(doc.id);
    }));


}

var convertedDate;
function getDateFromSecs(dateStuff){
    //pulls seconds from Firebase cloud fire date time stamp (in seconds)
    //pushes out corresponding Date (in string)
    convertedDate = new Date(null);
    convertedDate.setSeconds(dateStuff);
    console.log('Corresponding Date', convertedDate);
    
}

//========================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}

function makeStr(arr){
    return arr.join("")
}