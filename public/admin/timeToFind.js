var d1 = new Date('Wed May 08 2019 15:23:06 GMT-0700 (Pacific Daylight Time)');

var d1 = new Date('Wed May 08 2019 15:23:08 GMT-0700 (Pacific Daylight Time)');


deleteMe = await db2.collection('paterons').where('date', '>', dateMore).where('date', '<', dateLess);

deleteMe.get().then(async (snap)=>{   
           savedSnap = snap;
           snap.forEach(async (doc)=>{
               console.log('doc', doc.ref.path);
               await docSaved.push(doc.data());
           });
           
});