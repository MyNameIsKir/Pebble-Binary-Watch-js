var UI = require('ui');
var Vector2 = require('vector2');

var window = new UI.Window();
var textfield = new UI.Text({
  position: new Vector2(30, 40),
  size: new Vector2(144, 168),
  font: 'gothic-18-bold',
  text: "00000000\n00000000\n00000000"
});

window.add(textfield);
window.show();

var getBinaryTime = function(){
  var date = new Date();
  var hour = date.getHours().toString(2);
  var minutes = date.getMinutes().toString(2);
  var seconds = date.getSeconds().toString(2);
  var time = [hour, minutes, seconds];
  for(var ti = 0; ti < time.length; ti++){
    var startingLength = time[ti].length;
    for(var i = 1; i <= (8 - startingLength); i++){
      time[ti] = "0" + time[ti];
    }
  }
  
  return time.join('\n');
};

textfield.text(getBinaryTime());

setInterval(function(){
  console.log("a second has passed");
  textfield.text(getBinaryTime());
}, 1000);