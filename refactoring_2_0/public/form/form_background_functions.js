function adding(data){
    //function that adds to firebase
    //when there is no existing doc, already
    db.collection("/paterons3/").add(data);

}

function addDoc(docMe, data){
    //function to push updated data up to firebase
    db.collection(docMe).doc(docMe).set(data, {merge: true});
}


