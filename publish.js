const Broker = "mqtt:research.upb.edu";
const TopicName = "upb/lecture/ds/chat";
const Client = "publish.js";

var MQTT = require("mqtt");
var client  = MQTT.connect(Broker, {clientId: Client});

client.on("connect", Connected);

//Funcion que publica el mensaje
function Connected()
{
  client.publish(TopicName, "Los Dugsteins");
  client.end();
}