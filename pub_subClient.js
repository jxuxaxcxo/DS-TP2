const Broker = "mqtt:research.upb.edu";
const TopicName = "upb/lecture/ds/chat";
const Client = "Zambrana-Vargas";

var MQTT = require("mqtt");
var client  = MQTT.connect(Broker);

client.subscribe(TopicName);

client.on("connect", function(){
    setInterval(function(){ 
        console.log("Send Message")
        client.publish(TopicName, getJSON());
    }, 5000);
});

client.on("message", MessageReceived)

//Funcion que recibe los mensajes
function MessageReceived(topic, message)
{
  console.log("Recieved:")
  console.log(message.toString());
  console.log("");
}
function getJSON(){
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getUTCDay();
  var date = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var miliSeconds = d.getMilliseconds();

  var dates = ["Mon","Tue","Wed","Thu","Wed","Fri","Sat","Sun"]
  var months = ["Jan","Feb","Apr","Mar","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  var ip = require('ip');

  var json = `{ \"time\" : \"${dates[day]} ${months[month]} ${date} ${hours}:${minutes}:${seconds}-${miliSeconds} ${year}\", \"name\" : ${Client}, \"ip\" : \"${ip.address()}\"}`

  return json;
}
