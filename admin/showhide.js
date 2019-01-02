// file to hide credentials of Admin dashboard
// then...
// to show weekPage & then, todayPage

var hideArray = ['login', 'weekPage', 'todayPage'];
function hide() {
    for (var i = 0; i < hideArray.length; i++) {
        document.getElementById(hideArray[i]).style.display = 'none';
    }
}

function show(pageId) {
    document.getElementById(pageId).style.display = 'block';
    
}