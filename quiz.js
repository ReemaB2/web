document.getElementById("styleQuiz").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form submission

  // personas object
  const personas = { natural: 0, trend: 0, relax: 0, glam: 0 };

  // loop through each persona group
  ["natural", "trend", "relax", "glam"].forEach(persona => {
    for (let s = 1; s <= 4; s++) { // 4 sections
      const radios = document.getElementsByName(`s${s}_${persona}`);
      for (let radio of radios) {
        if (radio.checked) {
          personas[persona] += parseInt(radio.value);
        }
      }
    }
  });

  // find highest persona
  let maxScore = -1;
  let topPersona = "";
  for (let key in personas) {
    if (personas[key] > maxScore) {
      maxScore = personas[key];
      topPersona = key;
    }
  }

  // suggested services
  const suggestions = {
    natural: "Organic facials, natural oil hair spa, herbal scalp massage.",
    trend: "Trendy haircuts, highlights, bold colors, creative nail art.",
    relax: "Full body massage, aromatherapy, hot stones, calming facial.",
    glam: "Gel nails, lash lift, premium skincare, professional styling."
  };

  const personaNames = {
    natural: "Natural Beauty",
    trend: "Trend Setter",
    relax: "Relaxation Lover",
    glam: "Glam Queen"
  };

  // display result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <h3>Your Style Persona: <strong>${personaNames[topPersona]}</strong></h3>
    <p>${suggestions[topPersona]}</p>
  `;
});
