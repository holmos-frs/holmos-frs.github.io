# holmos-frs.github.io
<h2>Auswertung</h2>
<p>
	
  <b>Verstetigtes Bild aus Rohbild erhalten:</b><br>Die Datei 'einfache-auswertung.py' starten, im Fourierraum Mittelpunktskoordinaten so 	wie Radien des Satelliten finden und dann Wert  durch Konsolenabfrage eingeben.Bild wird als "unwrapped_phase.png" gespeichert, zum 			ändern des Speichernames in einfache-auswertung.py Zeile 78 Namen des Bildes ändern.
</p>
<h2>Webview</h2>
<p> 
  
  <b>*Aufsetzen:*</b> <br> Einfach das verstetigte Phasenbild, welches am Ende der Auswertung gespeichert wird in den Ordner "Bilder"         verschieben und dann im Code von App.js die Url zu 'Bilder/Beispielname.png' ändern, einen Python Server im Ordner mit "python -m           http.server" starten und dann im Webbrowser "127.0.0.1:8000" als URL eingeben und es sollte das Bild als 3D Version angezeigt werden.
  
  <b>*Fehlerbehebung:*</b> <br> Sollte es nicht angezeigt werden die Konsole aufrufen [Firefox, Chrome: "F12" ] und Fehler anschauen.  
  <br>Typischer Fehler: ``` Failed to load resource: the server responded with a status of 404 (File not found) ```
  <br>- Datei ist in App.js nicht richtig benannt!
</p>
