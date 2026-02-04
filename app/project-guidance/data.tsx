import { ReactNode } from "react";

export interface Project {
    title: string;
    category: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    description: string;
    technologies: string[];
    features: string[];
    components: string[];
    details: ReactNode;
}

export const projects: Project[] = [
    {
        title: "IoT Based Smart Home Automation",
        category: "Electronics / IoT",
        difficulty: "Intermediate",
        description: "Control home appliances remotely using a smartphone app and Esp8266 NodeMCU. This project demonstrates the basics of IoT and home automation.",
        technologies: ["Embedded C", "C++", "IoT", "HTTP"],
        features: [
            "Remote control via Android App",
            "Voice control support (Google Assistant)",
            "Real-time status feedback",
            "Schedule timers for appliances"
        ],
        components: [
            "NodeMCU ESP8266",
            "4-Channel Relay Module",
            "Jumper Wires",
            "5V Power Supply",
            "Hi-Link HLK-PM01 (Optional)"
        ],
        details: (
            <div className="space-y-4">
                <p>
                    This project utilizes the ESP8266 Wi-Fi module to create a web server that controls a relay module.
                    The relay module acts as a switch for high-voltage AC appliances. You can build a custom Android app
                    using MIT App Inventor or use ready-made platforms like Blynk.
                </p>
                <h4 className="font-bold">Circuit Overview:</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Connect NodeMCU Digital Pins (D1-D4) to Relay Module Inputs (IN1-IN4).</li>
                    <li>Power the NodeMCU and Relay Module using a 5V source.</li>
                    <li>Connect AC loads in series with the Relay COM and NO terminals.</li>
                </ul>
                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm text-yellow-800 mt-2">
                    <strong>Safety Warning:</strong> working with AC mains voltage is dangerous.
                    Ensure power is disconnected before touching any wiring.
                </div>
            </div>
        )
    },
    {
        title: "Weather Monitoring System",
        category: "Electronics / Sensors",
        difficulty: "Beginner",
        description: "A digital weather station that displays temperature and humidity on an LCD screen and logs data to the cloud.",
        technologies: ["Arduino", "Sensors", "Data Logging"],
        features: [
            "Real-time Temperature & Humidity display",
            "Cloud logging to Thingspeak",
            "OLED / LCD Display interface",
            "Battery powered operation"
        ],
        components: [
            "Arduino Uno / Nano",
            "DHT11 / DHT22 Sensor",
            "16x2 LCD Display with I2C",
            "Breadboard & Wires",
            "9V Battery"
        ],
        details: (
            <div className="space-y-4">
                <p>
                    This project reads environmental data using the DHT11 sensor and displays it locally on an LCD.
                    For the cloud version, an ESP8266 is used to send data to the Thingspeak API for graphing and analysis.
                </p>
                <h4 className="font-bold">Code Logic:</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Initialize DHT library and LCD library.</li>
                    <li>Read temperature (C) and humidity (%) in the loop function.</li>
                    <li>Print values to the Serial Monitor and LCD.</li>
                    <li>Wait for 2 seconds between readings (sensor sampling rate).</li>
                </ul>
            </div>
        )
    }
];
