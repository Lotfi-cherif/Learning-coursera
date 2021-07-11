(function (window) {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {

    var firstLetter_upperlower = names[i].charAt(0) ;
    var firstLetter = firstLetter_upperlower.toLowerCase(); 

    if (firstLetter == 'j'){
    
      byeSpeaker.speak(names[i]);
    }
    else {
      helloSpeaker.speak(names[i]); 
    }
  }

  window.names = names; 
})(window);



