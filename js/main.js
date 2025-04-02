document.getElementById("go-button").addEventListener("click", () => {
  const sign = document.getElementById("zodiac-select").value;
  if (sign) {
    localStorage.setItem("selectedSign", sign);
    document.getElementById("select-sound").play();
    window.location.href = "horoscope.html";
  } else {
    alert("Vänligen välj ett stjärntecken.");
  }
});

const last = localStorage.getItem("selectedSign");
if (last) {
  document.getElementById("last-selected").textContent = `Senaste valda: ${last}`;
}
