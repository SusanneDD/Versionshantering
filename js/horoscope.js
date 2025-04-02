const sign = localStorage.getItem("selectedSign");
const container = document.getElementById("horoscope-container");
const spinner = document.querySelector(".spinner");
const template = document.getElementById("horoscope-template");

const icons = {
  aries: "♈", taurus: "♉", gemini: "♊", cancer: "♋",
  leo: "♌", virgo: "♍", libra: "♎", scorpio: "♏",
  sagittarius: "♐", capricorn: "♑", aquarius: "♒", pisces: "♓"
};


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

if (!sign || !icons.hasOwnProperty(sign)) {
  spinner.style.display = "none";
  container.innerHTML = "<p>Inget giltigt stjärntecken valt. Gå tillbaka och välj ett igen.</p>";
} else {
  fetch(`https://api.api-ninjas.com/v1/horoscope?zodiac=${sign}`, {
    headers: {
      "X-Api-Key": API_KEY
    }
  })
    .then(res => {
      if (!res.ok) throw new Error("API-anrop misslyckades");
      return res.json();
    })
    .then(data => {
      spinner.style.display = "none";
      const icon = icons[sign];
      const date = new Date().toLocaleDateString("sv-SE");

      const clone = template.content.cloneNode(true);
      clone.getElementById("icon").textContent = icon;
      clone.getElementById("sign").textContent = capitalize(sign);
      clone.getElementById("date").textContent = date;
      clone.getElementById("horoscope").textContent = data.horoscope;

      container.appendChild(clone);

      const copyBtn = container.querySelector("#copy-btn");
      copyBtn.addEventListener("click", () => {
        const text = `🔮 Dagens horoskop för ${capitalize(sign)} (${icon}) – ${date}\n\n✨ ${data.horoscope}`;

        navigator.clipboard.writeText(text)
          .then(() => alert("✅ Horoskop kopierat!"))
          .catch(() => alert("⚠️ Misslyckades att kopiera horoskopet."));
      });
    })
    .catch(err => {
      spinner.style.display = "none";
      container.innerHTML = `<p>${err.message}</p>`;
    });
}
