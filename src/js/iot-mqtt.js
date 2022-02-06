var clientId = "ws" + Math.random(); 
// Create a client instance
var client = new Paho.MQTT.Client("34.95.237.241", 8083, clientId);

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});
acelerX = 0;



// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Conectado MQTT-WebSocket");
    client.subscribe("IoT/ACX");
    }

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("Conexión perdida:"+responseObject.errorMessage);
  }
}


// called when a message arrives
function onMessageArrived(message) {
  console.log(message.destinationName + ": " + message.payloadString);
    
  if(message.destinationName == 'IoT/ACX')
    {
         document.getElementById("AcX").textContent =  message.payloadString ;
        //acelerX = parseFloat(message.payloadString);
    } 
}
