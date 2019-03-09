import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCot2zvsAvb_3Yf1jpolfs3QqmHiMbNhSg",
  authDomain: "arena-lktk.firebaseapp.com",
  databaseURL: "https://arena-lktk.firebaseio.com",
  projectId: "arena-lktk",
  storageBucket: "arena-lktk.appspot.com",
  messagingSenderId: "550188129833"
};

firebase.initializeApp(config);

const auth = firebase.auth();
Vue.prototype.$auth = auth;

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
