![image](https://user-images.githubusercontent.com/32162305/150810942-99672aac-99af-47ea-849b-ba263fae0c3f.png)

---

**Graphical Visualisation Technologies**

**Dozent: Prof. Dr. Felix Gers (Berliner Hochschule für Technik)**

**Studiengang Medieninformatik Online MA, Wintersemester 2022/23**

**University of Applied Sciences Emden/Leer, Faculty of Technology, Department of Electrical Engineering and
Informatics**

---

### Einsendeaufgabe EA1 : Interaktiv animierte Scheibe.

[zur Webseite](https://gvt.ckitte.de/ea1/)

Im Rahmen der ersten Einsendeaufgabe sollte eine sich drehende Scheibe als Sprite Animation umgesetzt werden. Hierbei sollte der aktuelle Rotationszustand angezeigt sowie die Option ermöglicht werden, die Animation sich schrittweise drehen zu lassen.

Die hierfür verwendete Grafik wurde selbst erstellt und anschließend mit einem [Sprite Generator](https://www.toptal.com/developers/css/sprite-generator/) zu einem Sprite zusammen gesetzt. Hierbei erstellte das verwendete Tool ebenfalls die benötigten CSS Klassen zum Einbinden der Teilbilder.

Über zwei Checkboxen kann zum einen die Drehrichtung, zum anderen das automatische Drehen gesteuert werden. Zudem kann die Drehrichtung mit Hilfe der Taste "a" an bzw. bei nochmaligen Drücken ausgeschaltet werden. 

Sofern die Drehung nicht automatisch ausgeführt wird, kann mit Hilde der Buttons jeweils ein Schritt nach links oder rechts gegangen werden. Ebenso können hierfür die Tasten "l" (links) und "r" (rechts) verwendet werden.

Als Startseite dient wie üblich eine **index.html**. Die Datei **main.css** enthält alle benötigten Klassen, um die Grafik einfach einzubinden. In der Datei **layout.css** wird das Layout der Webseite selbst festgelegt. Daneben kommt Bootstrap für die Buttons zum Einsatz. Die gesamte Logik der Anwendung befindet sich in der Datei **main.js**. Im Ordner Images befindet sich die eigentliche Sprite-Datei **css_sprites.png**. 

Von der Programmierung her wird durch einen Wechsel der Klassen das angezeigte Hintergrundbild gewechselt. Entgegen der Aufgabenstellung kommt in dieser Anwendung kein IMG Tag zum Einsatz, sondern ein DIV Element, dass sich beim Layout als vorteilhafter erwiesen hat. Beispielsweise wird so die Anzeige eines Rahmens von vornherein verhindert. Von Seiten der Programmierung kann das DIV Tag ohne weitere Anpassungen durch ein IMG Tag ausgetauscht werden.
