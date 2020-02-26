// file that works on login UI


var token; var credentialMe;
function login(){
  //function of the login button
  //to create Google UI to login!!
    var provider = new firebase.auth.GoogleAuthProvider();
    
    provider.addScope("https://www.googleapis.com/auth/userinfo.email");
    provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          token = result.credential.accessToken;
          console.log("token", token);
          // debugger;
          // ...
          
        }
        // The signed-in user info.
        var user = result.user;
        console.log("user", user);
        // credentialMe = result.credential;
        return result.credential;
        
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    // debugger
}


function logout(){
  //function, logout of App
  //change login/logout buttons
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
      makeLoginButtonAppear();
}


//========================================

// const acceptableEmails = ["pixman92@gmail.com", "christianbear1221@gmail.com"];

//NEXT?
const acceptableEmails = ["pixman92@gmail.com", "christianbear1221@gmail.com"];

var isTrue = true; var falseCount = 0;
function checkUser(){
  //function that checks if someone is signed in or not
  //useful for rejecting wrong emails that are NOT "admins"
  firebase.auth().onAuthStateChanged(function(user) {
    // credentialMe = user.result.credential;
    if (user) {
      // userMe = user;
      // User is signed in.
      console.log(user);
      // if(user.email=="pixman92@gmail.com"){
      //   alert('yup!');
      // }
      for(var i=0; i<acceptableEmails.length; i++){
        console.log(acceptableEmails[i]);
        
        if(user.email != acceptableEmails[i]){
          falseCount++;  
        }else{
          isTrue=true;
          console.log("true!");
        }
      }
      if(falseCount>=i){
        console.log("false");
        console.log("not found");
        // NEXT? - select Admin only emails
        // logout();
      }
      
      makeLogoutButtonAppear();
    } else {
      // No user is signed in.
      makeLoginButtonAppear();
    }
  });
}



//========================================

// function creatingCredential(){
  
//   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
//   .then(function() {
//     // var provider = new firebase.auth.GoogleAuthProvider();
//     // In memory persistence will be applied to the signed in Google user
//     // even though the persistence was set to 'none' and a page redirect
//     // occurred.
//     return firebase.auth().signInWithRedirect(provider);
//   })
//   .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
// }


//========================================


//document.getElementById(id).style.property = new style


//change login/logout buttons
function buttonLogin(){
  document.getElementById('loginId').addEventListener('click', login);
  document.getElementById('logoutId').addEventListener('click', logout);

}

function makeLoginButtonAppear(){
  document.getElementById("loginId").style.display = "block";
  document.getElementById("logoutId").style.display = "none";
}

function makeLogoutButtonAppear(){
  document.getElementById("loginId").style.display = "none";
  document.getElementById("logoutId").style.display = "block";

}