const firebaseConfig = {
  apiKey: "AIzaSyBvmPz6QfmIVcuqcbR4gX3DrBr5zKOhnrc",
  authDomain: "finances-manager-c6c26.firebaseapp.com",
  projectId: "finances-manager-c6c26",
  storageBucket: "finances-manager-c6c26.appspot.com",
  messagingSenderId: "251884034150",
  appId: "1:251884034150:web:b57f7255657922045635a7"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const autho = firebase.auth()
const colRef = db.collection("accounts")

exports = {colRef, autho}