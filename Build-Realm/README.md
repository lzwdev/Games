# Build a Realm

Ein browserbasiertes Strategiespiel, in dem du eine eigene Festung errichtest, Ressourcen sammelst, Gebäude ausbaust und andere Spieler angreifst oder verteidigst.

## Überblick

`Build a Realm` ist eine kleine onlineartige Strategie- und Bau-Sandbox im Stil eines Echtzeit-"Base Builder"/"RTS"-Prototyps. Die Spielumgebung ist groß, mit einer Weltkarte, minimap, Ressourcenleiste, Gebäudeliste und Kampfmechaniken.

Das Spiel deckt typische Elemente ab:

- Gebäudebau und -upgrade
- Ressourcenmanagement
- PvP- oder PvE-ähnliche Angriffe
- Truppenbewegungen und Verteidigung
- Online-Status / Spielerlisten / Chat
- Ladebildschirm und Login-Ansicht

## Spielprinzip

Du beginnst als Herrscher einer neuen Siedlung und musst:

- Rohstoffe sammeln und verwalten
- neue Gebäude bauen und aufwerten
- deine Basis gegen Angriffe sichern
- Truppen entsenden und verteidigen
- deine Macht ausbauen und deinen Einfluss erweitern

## Hauptfunktionen

### 1. Login und Progression

- Anmeldung mit Google oder einer eigenen Spielernamen-Wahl
- Fortschritt ist an das Gerät bzw. den Account gebunden
- Spielstart über eine elegante Lade- und Startoberfläche

### 2. Gebäude und Ausbau

- Auswahl aus verschiedenen Gebäudetypen
- Platzierung auf der Karte
- Kosten, Bauzeit und Upgrade-Pfade
- Gebäudestatistiken im Detailbereich

### 3. Ressourcen

- Gold, Holz, Stein, Nahrung oder ähnliche Ressourcen je nach Spielsystem
- Ressourcen werden im oberen Bereich sichtbar verwaltet
- Erstellung und Ausbau von Produktionsgebäuden beeinflussen den Fortschritt

### 4. Kampf und Verteidigung

- Angriffs- und Verteidigungsmodus möglich
- Truppen können ausgesandt oder in Verteidigung geschickt werden
- Feindliche oder gegnerische Strukturen können erkannt und angegriffen werden
- Kampfsystem mit Warnungen, Countdown und Modalen

### 5. Karte und Navigation

- Karte ist groß und scrollbar
- Drag & Zoom-ähnliche Navigation über Karte und Minimap
- Überblick über Position, Gegner, Ressourcen und Laufwege

### 6. Soziale Funktionen

- Online-Liste von Mitspielern
- Event-Feed
- Chat-Fenster
- Spielstatusmeldungen und Benachrichtigungen

## Spielstart

### Direkt im Browser

1. Diese Datei in einem Browser öffnen:
   - `Build-Realm/index.html`
2. Falls der Browser lokale Datei-Restriktionen hat, die Seite über einen lokalen Webserver starten.

### Mit lokaler Server-Umgebung

Aus dem Repository-Root:

```bash
cd Games
python -m http.server 8000
```

Danach im Browser öffnen:

```text
http://localhost:8000/Build-Realm/
```

## Steuerung

- Karte verschieben: ziehen / drag
- Gebäude auswählen: Klick auf die Auswahl- und Bau-Optionen
- Platzierung: auf der Weltkarte klicken
- Angriffs-/Verteidigungsmodus: über die Buttons in der unteren Spielleiste
- Detailansichten: Gebäude- oder Einheiteninformationen im rechten Panel

## Projektstruktur

```text
Games/
├── Build-Realm/
│   ├── index.html
│   └── README.md
└── ...
```

## Hinweise

- Das Projekt ist aktuell als statische HTML-/CSS-/JS-Webseite aufgebaut.
- Es ist ein spielerisches Prototyp- oder Demo-Design mit Fokus auf Gamefeel, Benutzeroberfläche und Strategie-Mechanik.
- Für den vollständigen Betrieb in einer echten Online-Welt wären zusätzliche Serverlogik, Authentifizierung und Spiel-Datenbank nötig.

## Fazit

`Build a Realm` ist ein stylisches, „rundenloses“ Strategiespiel mit starker visueller Gestaltung und typischen Mechaniken eines Online-Base-Builders. Es eignet sich gut als Spiel-Demo, Prototyp oder als Grundlage für eine größere Strategie-Spielentwicklung.

Wenn du möchtest, kann ich dir auch noch eine:

- Version mit mehr technischen Details für Entwickler erstellen
- deutschsprachige Version mit stärkerem Game-Design-Charakter schreiben
- englische README-Version für GitHub erstellen

oder die README direkt in dein Repository ergänzen.
