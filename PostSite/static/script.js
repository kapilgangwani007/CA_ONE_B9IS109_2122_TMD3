'use strict';
window.addEventListener('load', function () {


  
    var uiConfig = {
      signInSuccessUrl: '/',  
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById('sign-out').hidden = false;
        user.getIdToken().then(function(token) {
        document.cookie = "token=" + token;
        document.cookie = "token=" + token + ";path=/";
        });
      } 
      else {
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebase-auth-container', uiConfig);
        document.getElementById('sign-out').hidden = true;
        document.cookie = "token=;path=/";
      }
    }, 

    });
