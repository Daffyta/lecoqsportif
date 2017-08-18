var config = {
  apiKey: "AIzaSyBPl316z4zXuLVS8klxkrEwf07yK5_dloU",
  authDomain: "lecoqsportif-2429a.firebaseapp.com",
  databaseURL: "https://lecoqsportif-2429a.firebaseio.com",
  projectId: "lecoqsportif-2429a",
  storageBucket: "lecoqsportif-2429a.appspot.com",
  messagingSenderId: "633218128490"
};
firebase.initializeApp(config);

var db = firebase.database();
db.ref('metadata').set({
  app: 'videotutorial',
  ver: '0.0.1'
});

db.ref("metadata").on('value', function(snapshot){
  console.log(snapshot.val());
});
