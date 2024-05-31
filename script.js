// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWRTng4O10IP20rAOCBXT-1t5UZVCEqKA",
    authDomain: "project-7691f.firebaseapp.com",
    projectId: "project-7691f",
    storageBucket: "project-7691f.appspot.com",
    messagingSenderId: "94778615303",
    appId: "1:94778615303:web:8f3b32cd05691a10d82ca2",
    measurementId: "G-GBB3XPZTSB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();

// HTML Elements
const loginButton = document.getElementById('login');
const logoutButton = document.getElementById('logout');
const userDetails = document.getElementById('user-details');
const userName = document.getElementById('user-name');
const userPic = document.getElementById('user-pic');

// Login Event
loginButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            displayUser(user);
        })
        .catch(error => {
            console.error("Error during sign in: ", error);
        });
});

// Logout Event
logoutButton.addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            hideUser();
        })
        .catch(error => {
            console.error("Error during sign out: ", error);
        });
});

// Display User Info
const displayUser = (user) => {
    userName.textContent = `Hello, ${user.displayName}`;
    userPic.src = user.photoURL;
    userDetails.style.display = '';
    loginButton.style.display = 'none';
    logoutButton.style.display = '';
};

// Hide User Info
const hideUser = () => {
    userDetails.style.display = 'none';
    loginButton.style.display = '';
    logoutButton.style.display = 'none';
};

// Firebase Auth State Change Listener
auth.onAuthStateChanged(user => {
    if (user) {
        displayUser(user);
    } else {
        hideUser();
    }
});