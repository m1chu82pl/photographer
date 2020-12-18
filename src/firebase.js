import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBM4u7vmg4KF2wL6BfXImJpfvqlD-_1o1g",
    authDomain: "photographersw.firebaseapp.com",
    projectId: "photographersw",
    storageBucket: "photographersw.appspot.com",
    messagingSenderId: "797799549033",
    appId: "1:797799549033:web:aca56ceeca798b5971baf8",
    measurementId: "G-HZDJX275P5"
}
firebase.initializeApp(config)

export default firebase