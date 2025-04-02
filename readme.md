# 🌌 Stjärnvision

**Stjärnvision** är en interaktiv och stilren horoskopsida med rymdtema. Projektet ger dig dagens horoskop baserat på ditt stjärntecken – med snygg design, animationer och ett API som hämtar ny data varje dag.

## ✨ Funktioner

- 🔮 **Dagligt horoskop** med hjälp av [API Ninjas](https://api-ninjas.com/api/horoscope)
- 🌠 **Responsiv design** med stöd för både mobil och desktop
- 🌙 **Mörkt & ljust läge** med växling och automatiskt minne via `localStorage`
- ✨ **Animerad bakgrund** med stjärnor och glittrande konstellationer
- 🎨 **Modern UI** med frostad glasstil, ljuseffekter och smidiga knappar
- 📋 **Kopiera-knapp** för att dela horoskopet enkelt

## 🧰 Tekniker

- **HTML5**
- **CSS3** (med blur, shadows, animationer)
- **Vanilla JavaScript (ES6+)**
- **anime.js** (för glow och effekter)
- **Canvas API** (för stjärnbakgrund)
- **API-integration** med `fetch`

📁 Mappstruktur

├── index.html              # Startsida (välj stjärntecken)
├── horoscope.html          # Visar horoskop
├── info.html               # Info om projektet
├── css/
│   └── style.css           # All styling och temaväxling
├── js/
│   ├── config.js           # API-nyckel
│   ├── main.js             # Logik för index.html
│   ├── horoscope.js        # Hämtar horoskop + visar
│   ├── constellation-background.js # Bakgrund med konstellationer
