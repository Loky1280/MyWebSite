const burgerMenu = document.getElementById("BurgerMenu");
const centralBurgerLine = document.getElementsByClassName("CentralBurgerElement");

burgerMenu.addEventListener("change", () => {
    if(burgerMenu.checked){
        centralBurgerLine[0].style.width = "100%";
    }
    else{
        centralBurgerLine[0].style.width = "70%";
    }
});

async function loadLanguage(langCode) {
  try {
    const response = await fetch(`Translations/${langCode}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-translate]").forEach((el) => {
      const path = el.dataset.translate.split(".");
      let text = translations;
      for (const key of path) {
        text = text?.[key];
      }

      if (text) {
        el.innerHTML = text;
      }
    });
  } catch (err) {
    console.error("Помилка при завантаженні мови:", err);
  }
}

const langSelect = document.querySelector(".LanguageOptions");
if (langSelect) {
  const defaultLang = localStorage.getItem("lang") || "en";
  langSelect.value =
    defaultLang === "en" ? "1" : defaultLang === "ar" ? "2" : "3";
  loadLanguage(defaultLang);

  langSelect.addEventListener("change", () => {
    let langCode;
    switch (langSelect.value) {
      case "1":
        langCode = "en";
        break;
      case "2":
        langCode = "ar";
        break;
      case "3":
        langCode = "de";
        break;
      default:
        langCode = "en";
    }
    localStorage.setItem("lang", langCode);
    loadLanguage(langCode);
  });
}
