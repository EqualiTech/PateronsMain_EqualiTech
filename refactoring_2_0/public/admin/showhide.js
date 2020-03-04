// file to hide credentials of Admin dashboard
// then...
// to show weekPage & then, todayPage

var hideArray = ['todayPageHeading', 'emailSearchPage'];
function hide() {
    for (var i = 0; i < hideArray.length; i++) {
        document.getElementById(hideArray[i]).style.display = 'none';
    }
}

function show(pageId) {
    document.getElementById(pageId).style.display = 'block';
    if(pageId=="emailSearchPage"){
        document.getElementById('searchBtn').addEventListener('click', ()=>{
            var elem = document.getElementById('emailSearch').value;
            
            console.log('elem', elem);

            whereIsMatchingEmail(elem, "paterons");
        });

    }

    
}