const BROKER_URL = "mqtt:research.upb.edu";
const TOPIC_NAME = "upb/lecture/ds/chat";
const CLIENT_ID = "publish.js";

var MQTT = require("mqtt");
var client  = MQTT.connect(BROKER_URL, {clientId: CLIENT_ID});

client.on("connect", onConnected);

function onConnected()
{
  client.publish(TOPIC_NAME, "Duga Gay");
  client.end();
}