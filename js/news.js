// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCveyNXupnzrghEG5GBM9a8wNFkolnOl0M",
    authDomain: "lapalmafc-a7b3e.firebaseapp.com",
    databaseURL: "https://lapalmafc-a7b3e-default-rtdb.firebaseio.com",
    projectId: "lapalmafc-a7b3e",
    storageBucket: "lapalmafc-a7b3e.appspot.com",
    messagingSenderId: "490124742829",
    appId: "1:490124742829:web:8ade604bbdee7d5063f624"
};


// Inicializar firebase
firebase.initializeApp(firebaseConfig);


// Referencia a database
const contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();
    let email = getElementVal('emailid');
    let date = new Date()

    saveMessages(email, date)
    showMessage()
}

function showMessage() {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("registroGracias").style.display = "block"
}

const saveMessages = (email, date) => {
    let newContactForm = contactFormDB.push();

    newContactForm.set({
        email: email,
        date: date,
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}