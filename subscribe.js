const Broker = "mqtt:research.upb.edu";
const Topic = "upb/lecture/ds/chat";
const Client = "subscribe.js";

var MQTT = require("mqtt");
var client  = MQTT.connect(Broker, {clientId: Client});

client.on("connect", Connected);
client.on("message", MessageReceived)

//Funcion que se subscribe al topico
function Connected()
{
  client.subscribe(Topic);
}

//Funcion que recibe los mensajes
function MessageReceived(topic, message)
{
  console.log(message.toString());
  console.log("");
}