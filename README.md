#ToDo as a Service

![alt text][logo]
[logo]: https://github.com/Erlix322/training/blob/master/architecture.png

#Ziel
Aufbau einer einfachen SaaS-Anwendung zur Einarbeitung in das Themengebiet moderner Webarchitekturen.
Dieses Repository entstand für eine Vorführung in den Räumen des Wirtschaftsgymnasiums, in Annaberg-Buchholz. 
Hierbei wurde JavaScript als treffendes Mittel gewählt, da die Schüler das Verständnis verschiedener Systemkomponenten erlangen können, ohne sich auf wechselnde Implementierungssprachen gewöhnen zu müssen.

http://twin322.hopto.org/ 

#How to use
**Interessierte Entwickler**
*Vorraussetzung*: lauffähige Nodejs-Umgebung
> git clone https://github.com/Erlix322/training

**Schüler des BSZ-ETW**
Vorbereitende Maßnahmen und Informationen könnt ihr der folgenden Website entnehmen: http://twin322.hopto.org/  
Weitere Instruktionen folgen während der Übung.

#REST-api
Die REST-API ermöglicht den Zugriff auf die jeweiligen Daten und die Manipulation derselben.
**Funktionen** 
Anzeige der Gespeicherten ToDos
> http://\<yourhost\>:\<yourport\>/todo  

Speichern einer neuen todo
> http://\<yourhost\>:\<yourport\>/todo Body = {title:"your title", content:"your content"}

#Frontend
Zur Erstellung des Frontends wird Facebooks React benutzt.
React bietet eine umfangreiche Bibliothek zur Erstellung von Komponentenbasierten Webanwendungen.

 

