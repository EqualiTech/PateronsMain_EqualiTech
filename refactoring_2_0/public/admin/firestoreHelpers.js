function adding(root, data){
    //function that adds to firebase
    //when there is no existing doc, already
    db.collection(root).add(data);

}

function addDoc(root, docMe, data){
    //function to push updated data up to firebase
    db.collection(root).doc(docMe).set(data, {merge: true});
}

var wholeDoc=[];
async function getting(main, docMe){
    wholeDoc=[];
    await db.collection(main).doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());
        await wholeDoc.push(snap.data());
    });

}

var returnedDocArr = [];
function gettingSingleEntryBasedOnUID(root, path){
    returnedDocArr = [];
    var pathMe = root+"/"+path;
    console.log('?', pathMe);   
    db.doc(pathMe).get().then(async (snap)=>{
        console.log(snap.data());
        returnedDocArr.push(snap.data());
    })
}

//=============================================
//where function stuff
//finding compared parameters, based on root and
//uses callback 
var whereIds=[];
async function whereMe(root, first, second, callback){
    
    whereIds=[];

    tmp = db.collection(root);

    tmp2 = tmp.where(first, '==', second)

    tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
        console.log(doc);
        await whereIds.push(doc.id);
        callback();                 //critical to have this callback() HERE(!)
    }));


}
//========================================
function secsToDate(seconds) {
    //function takes seconds from doc.data()
    //converts to a whole date String
    var newD = new Date();

    newD.setSeconds(seconds);

    return newD;
}