  import {
      initializeApp
  } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";

  import {
      getAuth,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      signOut,
      signInWithPopup,
      GoogleAuthProvider
  } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";



  const firebaseConfig = {
      apiKey: "AIzaSyAMRcZmkEZc1FxKMzKv9QupUi61vurhU-o",
      authDomain: "nacaas-7s-sps.firebaseapp.com",
      projectId: "nacaas-7s-sps",
      storageBucket: "nacaas-7s-sps.appspot.com",
      messagingSenderId: "100503828003",
      appId: "1:100503828003:web:feeb54537ca07127656396",
      measurementId: "G-9RKLR6VX30"
  };



  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);

  document.getElementById('reg-btn').addEventListener('click', function () {
      document.getElementById('register_div').style.display = "inline";
      document.getElementById('login_div').style.display = "none";

  });

  document.getElementById('log-btn').addEventListener('click', function () {
      document.getElementById('register_div').style.display = "none";
      document.getElementById('login_div').style.display = "inline";

  });

  document.getElementById('login-btn').addEventListener('click', function () {
      const loginEmail = document.getElementById("login-email").value;
      const loginPassword = document.getElementById("login-password").value;


      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
          .then((userCredential) => {

              const user = userCredential.user;
              alert("Welcome Back " + loginEmail + " was logged in successfully")
              location.href = "profile.html";

          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert("Sorry! " + errorMessage)
          
          });


  });

  document.getElementById('register-btn').addEventListener('click', function () {


      const registerEmail = document.getElementById("register-email").value;
      const registerPassword = document.getElementById("register-password").value;


      createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
          .then((userCredential) => {

              const user = userCredential.user;
              alert("Welcome " + registerEmail + " Registered successfully")
              location.href = "profile.html";

          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert("Sorry! " + errorMessage)



          });

  });



  document.getElementById('google-login-btn').addEventListener('click', function () {
      signInWithPopup(auth, provider)
          .then((result) => {

              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;

            const user = result.user; 
              alert("Welcome " + user.displayName + " was logged in successfully")
              location.href = "profile.html";


          }).catch((error) => {

              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.email;
              const credential = GoogleAuthProvider.credentialFromError(error);
              alert(error.message)

          });



      document.getElementById('google-register-btn').addEventListener('click', function () {
          signInWithPopup(auth, provider)
              .then((result) => {

                  const credential = GoogleAuthProvider.credentialFromResult(result);
                  const token = credential.accessToken;

                  const user = result.user;
                  alert( "Welcome " + user.displayName + " Registered successfully")
                  location.href = "profile.html";


              }).catch((error) => {

                  const errorCode = error.code;
                  const errorMessage = error.message;
                  const email = error.email;
                  const credential = GoogleAuthProvider.credentialFromError(error);
                  alert(error.message)




              });
      });

  });

  