#include "conf.h"
#include <QuestLib.h>
#include <Servo.h>

// HX711 весы:
//
// 1. GND - GND-CTRL
// 2. DT  - P01
// 3. SCK - P02
// 4. VCC - 5V0-CTRL
#define HX711_DT P01
#define HX711_SCK P02

// Servo
//
// 1. GND - GND-DC
// 2. VCC - 5V-DC
// 3. PWM - P06
#define SERVO_PIN P06
Servo servo;
int   servo_pos = 0;

// RGB диод:
// 1. RED   - P10
// 2. GREEN - P11
// 3. BLUE  - P12
// 4. GND   - GND-CTRL
#define RGBLED_RED   P10
#define RGBLED_GREEN P11
#define RGBLED_BLUE  P12


// 1. КодоваяПанель1 - D23 (4.7Kohm pull-up to 5V)(4.7Kohm pull-up to 5V)
// 2. КодоваяПанель2 - D24 (4.7Kohm pull-up to 5V)(4.7Kohm pull-up to 5V)
// 3. КодоваяПанель3 - D25 (4.7Kohm pull-up to 5V)(4.7Kohm pull-up to 5V)
// 4. КодоваяПанель4 - D26 (4.7Kohm pull-up to 5V)(4.7Kohm pull-up to 5V)
// 5. КодоваяПанель5 - D27
// 6. КодоваяПанель6 - D28
// 7. КодоваяПанель7 - D29
// 8. КодоваяПанель8 - D30
const byte KEYPAD_ROWS             = 4;
const byte KEYPAD_COLS             = 4;
byte KEYPAD_ROWS_PINS[KEYPAD_ROWS] = { D23, D24, D25, D26 };
byte KEYPAD_COLS_PINS[KEYPAD_COLS] = { D27, D28, D29, D30 };
char KEYPAD_KEYS[KEYPAD_ROWS][KEYPAD_COLS] = {
  { '1', '2', '3', 'A' },
  { '4', '5', '6', 'B' },
  { '7', '8', '9', 'C' },
  { '*', '0', '#', 'D' }
};

// Inductive
// 1. GNC    - GND-DC
// 2. Индукт - P05 (кнопка)
// 3. VCC    - 12VDC
#define INDUCTIVE_PIN P05

// CP-Z2L RFID (в режиме 1-Wire):
// 1. GND  - GND-CTRL
// 2. DATA - P03 (4.7kOhm to 5v)
// 3. VCC  - 12VDC

// Dallas Temp Sensor (1-Wire):
// 1. GND  - GND-CTRL
// 2. DATA - P04(4.7kOhm to 5v)
// 3. VCC  - 12VDC

// IR TTL Module:
// 1. GND  - GND-CTRL
// 2. DATA - P08
// 3. VCC  - 5V0-CTRL
#define IR_RECV_PIN P08

// IRrecv irrecv(IR_RECV_PIN);
// decode_results iRresults;

// Frequency button
// 1. Freq - D36
// 2. GND  - GND-CTRL
#define FREQ_BUTTON_PIN D36

// RELAY8_1 конфликтует с CP-Z2L RFID; Dallas Temp Sensor; RGB диод

// RELAY8_2

// RELAY8_3

// RELAY8_4

// RELAY8_5

// RELAY2_1 - конфликтует с HX711

// RELAY4_1

QuestNode testboard(NODE_NAME,
                    ip,
                    serverIp,
                    gwIp,
                    dnsIp,
                    netmask,
                    mac,
                    myPort,
                    serverPort);

void setup() {
  testboard.init();
  testboard.initSensors(64);
  testboard.initOutputs(64);

  // testboard.addSensor(new Rfid(P03, "Rfid"));
  // testboard.addSensor(new IR(P08, "IR"));
  // testboard.addSensor(new TemperatureSensor(P04, "Temperature"));
  // testboard.addSensor(new HX711(HX711_DT, HX711_SCK, "HX711"));
  //
  // testboard.addSensor(new KeypadSensor(&KEYPAD_KEYS[0][0], KEYPAD_ROWS_PINS,
  //                                      KEYPAD_COLS_PINS,
  //                                      KEYPAD_ROWS, KEYPAD_COLS, "Keypad"));
  // testboard.addSensor(new Frequence(FREQ_BUTTON_PIN, 2500 /*ms*/, "Freq"));
  // testboard.addSensor(new OnOffSensor("Inductive", INDUCTIVE_PIN,
  // INPUT_PULLUP));

  for (int i = 1; i <= 8; i++) {
    //    testboard.addOutput(new OnOffQuestOutput (String(F("R1_"))+String(i),
    // new Relay(Relay8_1[i-1])));
    //    testboard.addOutput(new OnOffQuestOutput (String(F("R2_"))+String(i),
    // new Relay(Relay8_2[i-1])));
    //    testboard.addOutput(new OnOffQuestOutput (String(F("R3_"))+String(i),
    // new Relay(Relay8_3[i-1])));
    //    testboard.addOutput(new OnOffQuestOutput (String(F("R4_"))+String(i),
    // new Relay(Relay8_4[i-1])));
    // testboard.addOutput(new OnOffQuestOutput(String(F("R5_")) + String(i),
    //                                       new Relay(Relay8_5[i - 1])));
  }

  testboard.addOutput(new OnOffQuestOutput(F("R_2_1"), new
                                           Relay(Relay2_1[0])));
  testboard.addOutput(new OnOffQuestOutput(F("R_2_2"), new
                                           Relay(Relay2_1[1])));

  testboard.addOutput(new OnOffQuestOutput(F("R_4_1"), new Relay(Relay4_1[0])));
  testboard.addOutput(new OnOffQuestOutput(F("R_4_2"), new Relay(Relay4_1[1])));
  testboard.addOutput(new OnOffQuestOutput(F("R_4_3"), new Relay(Relay4_1[2])));
  testboard.addOutput(new OnOffQuestOutput(F("R_4_4"), new Relay(Relay4_1[3])));
}

void loop() {
  testboard.loop();
}
