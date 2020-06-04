const Broker = "mqtt:research.upb.edu";
const TopicName = "upb/lecture/ds/chat";
const Client = "publish.js";

var MQTT = require("mqtt");
var client  = MQTT.connect(Broker, {clientId: Client});

client.on("connect", function(){
    setInterval(function(){ 
        console.log("Message Sent")
        client.publish(TopicName, "Example");
    }, 5000);
}); 




