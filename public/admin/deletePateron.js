//================================================
//functions that take in both <time> & <name>, to identify and delete pateron enteries
// function
// queryData('users')
// pullDataFromFirestore(firestorePaths[0])
// deleteStuff('users', savedDoc[0].date.toDate())

//make sure to "new Date(<dateToErase>);"

var docSaved=[]; var savedSnap; var deleting; var deleteMe;
async function deleteStuff(path, dateLess, dateMore){

    docSaved=[];

    // deleteMe = await db2.collection(path).where('date', '==', date);

    // console.log('deleteMe1', deleteMe);
    //  deleteMe.get().then(async (snap)=>{


    docSavedForDeleting=[]
    deleteMe = await db2.collection(path).where('date', '>', dateLess).where('date', '<', dateMore);


    // getting();

    // function getting(){
        deleteMe.get().then(async (snap)=>{
   
           // const timestamp = snap.get('created_at');
           // const dateMe = timestamp.toDate();
   
           savedSnap = snap;
           snap.forEach(async (doc)=>{
               console.log('doc', doc.ref.path);
               await docSaved.push(doc.data());
               console.log('docSaved', docSaved);
               
               var con = confirm('Are you sure you want to DELETE?');
               if(con){
                   // docSaved.ref.delete();
                   doc.ref.delete();
                   alert("Deleted!");
                }else{
                    alert("Canceled...");
                }
                //     console.log("Document successfully deleted!");
            });
       });

    //    wait(700).then(()=>{
    //         if(deleteMe==""){
    //             getting();
    //         }else{
    //             console.log('snap has value!');
    //         }

    //    });
    // }




        // .then(function() {
        // }).catch(function(error) {
        // console.error("Error removing document: ", error);
    // }


    // wait(800).then(()=>{
    //     if(deleting==undefined){
    //         deleteStuff('paterons', new Date(dateToBePassed));
    //     }
    // });
    
    // wait(800).then(()=>{
    //     isDeletingUndefined(deleting);
    
    //     // wait(500).then(()=>{
    //     //     if(docSaved==undefined){
    //     //         deleteStuff('paterons', dateToBePassed);
    //     //     }

    //     // });

    // });



    // wait(1000).then(async()=>{

    //     await deleting.get().then((snap)=>{
    //         savedSnap = snap;
    //         snap.forEach((doc)=>{
    //             console.log('doc', doc.ref.path);
    //             docSaved=doc;
    //             var con = confirm('Are you sure you want to DELETE?');
    //             if(con){
    //                 doc.ref.delete();
    //                 alert("Deleted!");
    //             }else{
    //                 alert("Canceled...");
    //             }
    //         })
    //         // .then(()=>{
    //         //     if(savedSnap==undefined){
    
    //         //     }
    //         // });
    //             // console.log('doc', doc.ref.path);
    //     }).then(function() {
    //         console.log("Document successfully deleted!");
    //     }).catch(function(error) {
    //         console.error("Error removing document: ", error);
    //     });
    // });

    // gettingDelete();
    // wait(1000).then(()=>{
    //     if(deleting.get()==undefined){
    //         gettingDelete();
    //     }

    // });

}

function isDeletingUndefined(deleting){
    // deleting.get().then((snap)=>{
    //     savedSnap = snap;
    //     snap.forEach((doc)=>{
    //         console.log('doc', doc.ref.path);
    //         docSaved=doc;
    //     })}).then(function() {
    //         var con = confirm('Are you sure you want to DELETE?');
    //         if(con){
    //             doc.ref.delete();
    //             alert("Deleted!");
    //         }else{
    //             alert("Canceled...");
    //         }
    //         console.log("Document successfully deleted!");
    // }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    // });
}


async function gettingDelete(){
    // await deleting.get().then(async (snap)=>{
    //     savedSnap = snap;
    //     snap.forEach((doc)=>{
    //         console.log('doc', doc.ref.path);
    //         await docSaved.push(doc);
    //     })}).then(function() {
    //         var con = confirm('Are you sure you want to DELETE?');
    //         if(con){
    //             // docSaved.ref.delete();
    //             // doc.ref.delete();
    //             alert("Deleted!");
    //         }else{
    //             alert("Canceled...");
    //         }
    //         console.log("Document successfully deleted!");
    // }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    // });
}