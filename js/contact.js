import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {
    getDatabase,
    ref,
    set
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyAMRcZmkEZc1FxKMzKv9QupUi61vurhU-o",
    authDomain: "nacaas-7s-sps.firebaseapp.com",
    databaseURL: "https://nacaas-7s-sps-default-rtdb.firebaseio.com",
    projectId: "nacaas-7s-sps",
    storageBucket: "nacaas-7s-sps.appspot.com",
    messagingSenderId: "100503828003",
    appId: "1:100503828003:web:feeb54537ca07127656396"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app)



document.getElementById('contact_form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    //Get values
    var fName = getInputVal('name');
    var phone = getInputVal('phone');
    var company = getInputVal('company')
    var email = getInputVal('email')
    var message = getInputVal('msg')

    writeUserData(fName, phone, company, email, message)

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function writeUserData(fName, phone, company, email, message) {
    const db = getDatabase();
    set(ref(db, 'users/' + fName), {
        phone: phone,
        company: company,
        email: email,
        message: message,
    });



    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contact_form').reset();


}