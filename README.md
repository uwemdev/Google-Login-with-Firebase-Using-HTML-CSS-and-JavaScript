In this project, you will learn how to set up Firebase in your web application, enable Google Sign-In, and handle user authentication using HTML, CSS, and JavaScript. The application features a responsive design, ensuring it looks great on any device. Once logged in, users' display names and profile pictures are shown, providing a personalized experience. The project also includes functionality for logging out, ensuring users can securely end their sessions. This comprehensive guide will equip you with the skills to implement Google Login in your web applications effectively.

Features:

    Google Authentication: Users can log in using their Google accounts.
    User Information Display: Once authenticated, users' display names and profile pictures are shown.
    Responsive Design: The application is styled for optimal display on various devices.
    Logout Functionality: Users can securely log out, ensuring their session is terminated.

Technologies Used:

    HTML: For structuring the web page.
    CSS: For styling the application and making it visually appealing.
    JavaScript: For adding interactivity and handling Firebase Authentication.
    Firebase: For backend services, including authentication.

How to Use:

    Setup Firebase:
        Go to the Firebase Console, create a new project, and set up Firebase for web.
        Enable Google Sign-In under the Authentication section in the Firebase Console.
        Copy your Firebase configuration details (API key, authDomain, etc.).

    Integrate Firebase in Your Project:
        Include Firebase SDK scripts in your HTML file.
        Initialize Firebase in your JavaScript with your configuration details.

    Implement Authentication:
        Add event listeners for login and logout buttons in your JavaScript.
        Use Firebase Authentication methods to handle sign-in with Google and sign-out functionality.
        Display user information upon successful login.

Firebase Setup:

    Open your browser and navigate to the Firebase Console.
    Create a Firebase account if you don't have one.
    Create a new project and set up a web app within that project.
    Within the Firebase Console, go to Authentication and then Sign-in Method.
    Enable Google as a sign-in provider to allow phone number verification for users.

How to Run?

    Download and Install XAMPP.
    Download the provided source code zip file.

Note: This folder must be store in htdocs folder to avoid error with firebase.
Installation/Setup:

    Extract the provided source code to the htdocs folder.
    Change the firebaseConfig  in the JavaScript with your personal web app keys in your personal Firebase account.
    Open your browser with the link "http://localhost/google-login-firebase/".
