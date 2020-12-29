import firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  messagingSenderId: "797799549033"
});

const messaging = firebase.messaging();


messaging.getToken({vapidKey: 'BMs9BJ1B_PSvxGPPwnomxzkp7g9F4kl2fPczZutexAhy-idOmOfSZyCL1VMH0F15rQQ7kD3hAn0QNwiY1TzHDyg'})