# 👩🏻‍💻 Persönlicher Webauftritt 

## ⌨️ Projekt: Webprogrammierung (DLBUXPWP01) 
Dieses Projekt entsteht im Rahmen des Moduls „Projekt: Webprogrammierung“ im Studiengang User Experience Design an der IU Internationalen Hochschule. Ziel ist die Erstellung einer persönlichen, responsiven Website mit HTML und CSS, die einen Einblick in meine Person, meinen beruflichen Werdegang und meine Interessen bietet.

## 💡Projektbeschreibung
Die Website besteht aus insgesamt **fünf Seiten**, die über eine Navigationsleiste miteinander verknüpft sind. Zusätzlich ist eine Seite für das Impressum vorhanden: 

- **Startseite** – Begrüßung, Aktuelles (Studium) und Kontaktformular
- **Über mich** – Hintergrund, Skills und persönliche Fotos
- **Lebenslauf** – Tabellarischer Überblick über meine bisherige Laufbahn
- **Studium** – Informationen zu meinem berufsbegleitenden UX-Design-Studium und Einblicke in Portfolio-Projekte
- **Hobbys** – Einblicke in meine Freizeitprojekte (Fotografie, woodvibez., Lichtsteuerung)
- **Impressum** - Informationen zum Besitzer der Website und Bildnachweisen

Der Aufbau der Website wurde **semantisch korrekt** umgesetzt, um eine gute **Barrierefreiheit** und **Lesbarkeit** zu gewährleisten.  
Auf die Verwendung von `<div>`-Containern wurde weitgehend verzichtet. Stattdessen kommen **semantische HTML5-Tags** wie `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` und `<footer>` zum Einsatz.

## ✨Projekthighlights

- **Navigation**: Die Navigation wechselt für die mobile Ansicht in ein Burgermenü, welches sich über einen Menübutton öffnen bzw. schließen lässt. Umgesetzt mit Media Queries und JS.
- **To-the-Top-Button**: Dieser Button blendet sich nach einem kurzen Scrollvorgang auf jeder Seite ein um schnell wieder nach oben zu kommen. Dies ist vorallem in der mobilen Variante, in der die Seiten länger werden, von Vorteil. Umgesetzt wurde die Interaktivität des Buttons mit JS. 
- **Modal Image-Pop-Up**: Auf den Seiten "Über Mich" und "Hobbys" sind die Bilder, vorallem in der Desktopvariante, relativ klein dargestellt. Für eine Vollbildansicht kann ein Pop-Up durch Anklicken des Fotos geöffnet werden. Umgesetzt wurde die Interaktivität mit JS. 
- **Components**: Der mehrmals verwendete HTML-Code für z. B. `<footer>` und `<header>` wurde in eigene HTML-Dateien ausgelagert und wird in den HTML-Dateien der Websites über die loader.js-Datei geladen. 


## 💻 Live-Preview

>[Zur Live-Preview](https://iu-webprogrammierung.github.io/webprogrammierung-Christian-Rauscher/)


## 🛠️ Technische Umsetzung

### 💻 Technologien

- **HTML5** - Grundstruktur der Website  
- **CSS3** – Gestaltung und Layout  
- **CSS Grid** und **Flexbox** – zur Anordnung und Strukturierung der Inhalte  
- **Media Queries** – für responsives Verhalten auf unterschiedlichen Geräten  
- **Git & GitHub** – zur Versionskontrolle und Dokumentation des Entwicklungsprozesses  
 
### 📱 Responsive Design

Die Website ist **responsiv aufgebaut** und passt sich automatisch an verschiedene Bildschirmgrößen an.  
Dazu wurden **Media Queries** mit mehreren Breakpoints verwendet, um eine optimale Darstellung auf **Smartphones, Tablets und Desktop-Geräten** zu gewährleisten.

Verwendete Breakpoints:
- **≤ 768px:** mobile Ansicht (einspaltiges Layout, angepasste Schriftgrößen, Navigation über Burgermenü)  
- **769–1023px:** Tablet-Ansicht (flexibles Layout)
- **≥ 1024px:** Desktop-Ansicht (mehrspaltiges Layout, großzügige Abstände)  

Durch den Einsatz von Flexbox und Grid bleibt die Anordnung der Inhalte übersichtlich und skalierbar.

### 🕵🏻 Testing

Die erstellten Websites wurden fortlaufend mit **Lighthouse** auf Performance, Accessibility und Best Practices getestet. 

### 🔧 Versionskontrolle

Das Projekt wurde über **Git** versioniert und auf **GitHub** verwaltet.  
Im Verlauf des Projekts wurden **regelmäßige Commits** mit aussagekräftigen Commit Messages erstellt, um den Entwicklungsprozess transparent nachzuvollziehen.  

## 🧠 Lerninhalte

Das Projekt dient der praktischen Anwendung und Vertiefung der Grundlagen der **Webentwicklung**. Die Einarbeitung in folgende Themen erfolgte durch Eigenstudium von seriösen Online-Quellen (z.B. selfhtml, w3schools). 
- Syntax und Aufbau von **HTML** und **CSS**
- Nutzung von **Visual Studio Code** 
- Verständnis von **responsivem Design** sowie **Grid/Flex-Strukturen**
- Vorgaben zur Barrierefreiheit nach **WCAG 1.2** und **WIA-ARIA**
- Versionierung des Codes mit Hilfe von **Git** und **Commit-Messages** 


## 🎯 Fazit

Mit diesem Projekt wurde eine vollständige, responsive Website umgesetzt. Da ich vor Beginn des Projekts keinerlei Erfahrung in HTML oder CSS hatte, bin ich mit dem Ergebnis sehr zufrieden. Sie spiegelt meine persönlichen Interessen und meinen beruflichen Hintergrund wider und kann gleichzeitig als Grundlage für zukünftige Erweiterungen im Bereich **Webdesign und UX** dienen.



