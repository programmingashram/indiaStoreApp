importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyBjOqU8RDAYN5bG_kvaj28KUzBc1Gjl1jk",
  authDomain: "quickcart-2a384.firebaseapp.com",
  projectId: "quickcart-2a384",
  storageBucket: "quickcart-2a384.appspot.com",
  messagingSenderId: "37031106755",
  appId: "1:37031106755:web:e937e725310cb90b386a76",
  measurementId: "G-CT159T4TYF",
  vapidKey: "BOHSKoZ9fbUBgnkn-YkMEQpP9laqtFDWPCWdaTZE-wS93iL-SEpMJxLRhI-vfhMg0WKz36iy_2WZ5PQyoDAy3yc"
});
const messaging = firebase.messaging();
