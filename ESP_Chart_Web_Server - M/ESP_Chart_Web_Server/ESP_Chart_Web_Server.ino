#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h> 
#include <ESP8266mDNS.h>
#include <Hash.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <FS.h>
#define WINDOW_SIZE 8

ESP8266WiFiMulti wifiMulti;
int INDEX = 0;
int VALUE = 0;
int SUM = 0;
int READINGS[WINDOW_SIZE];
int AVERAGED = 0;
     
AsyncWebServer server(80);   // Create a webserver object that listens for HTTP request on port 80
String readHR() {
  SUM = SUM - READINGS[INDEX];       // Remove the oldest entry from the sum
  VALUE = analogRead(A0);        // Read the next sensor value
  READINGS[INDEX] = VALUE;           // Add the newest reading to the window
  SUM = SUM + VALUE;                 // Add the newest reading to the sum
  INDEX = (INDEX+1) % WINDOW_SIZE;   // Increment the index, and wrap to 0 if it exceeds the window size

  AVERAGED = SUM / WINDOW_SIZE;      // Divide the sum of the window by the window size for the result
  if (isnan(AVERAGED)) {
    Serial.println("Failed to read!");
    return "";
  }
  else {
    Serial.println(AVERAGED);
    return String(AVERAGED);
  }
}


void setup(void){
  Serial.begin(9600);        
  delay(10);
  
 

  if(!SPIFFS.begin()){
  Serial.println("An Error has occurred while mounting SPIFFS");
  return;
  }

  wifiMulti.addAP("Mohammad", "ms2001ms2001");  

  Serial.println("Connecting ...");
  while (wifiMulti.run() != WL_CONNECTED) {
    delay(250);
    Serial.print('.');
  }
  Serial.println('\n');
  Serial.print("Connected to ");
  Serial.println(WiFi.SSID());              
  Serial.print("IP address:\t");
  Serial.println(WiFi.localIP());           

  if (MDNS.begin("esp8266")) {            
    Serial.println("mDNS responder started");
  } else {
    Serial.println("Error setting up MDNS responder!");
  }
                      
  Serial.println("HTTP server started");

  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/index.html");
  });
  server.on("/H", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", readHR().c_str());
  });

  server.begin();   
}

void loop(){
}
