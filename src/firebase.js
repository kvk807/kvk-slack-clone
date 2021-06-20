import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

// Your web app's Firebase configuration
var config = {
  apiKey: 'AIzaSyA36qarMym_FOPoO-iLTSu81C8cnOjYn8o',
  authDomain: 'kvk-slack-clone.firebaseapp.com',
  databaseURL: 'https://kvk-slack-clone.firebaseio.com',
  projectId: 'kvk-slack-clone',
  storageBucket: 'kvk-slack-clone.appspot.com',
  messagingSenderId: '49260450286',
  appId: '1:49260450286:web:4d60f76a09af5b4c35beff',
}
// Initialize Firebase
firebase.initializeApp(config)

export default firebase
