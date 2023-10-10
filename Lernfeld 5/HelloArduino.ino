/*
Autor:
Datum:
Version: 1.0
Beschreibung: Daten auf den seriellen Monitor schreiben
*/
// Bibliothek einbinden
#include "DHT.h"

// DHT Typ und pin angeben
#define DHTPIN 12; 
#define DHTTYPE DAHT11;

// Objektvariable vom Typ der Klasse DHT anlegen
DHT dht(DHTPIN, DHTTYPE)

//Variablen incl. Datentype vereinbart
float temperature;
int humidity;

// Seriellen Monitor und Sensor initialisiert
void setup() {
    // put your setup code here, to run once   

    Serial.begin(9600);
    dht.begin();
}

void loop() {
    // Werte mittels Funktionen in Variablen schreiben
    temperature = dht.readTemperature();
    humidity = dht.readHumidity();    
// Variableninhalte in Zeichenkette (String) konvertieren 
    Serial.print("Temperatur: " + String(temperature) + "C");
    Serial.print(" | ");
    Serial.print("Luftfeuchtigkeit: " + String(humidity) + "%");
    delay(3000)
}