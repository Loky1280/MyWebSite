async function loadLanguage(langCode) {
  try {
    const response = await fetch(`Translations/WhoWeAre/${langCode}.json`);
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
  loadLanguage("en");

  langSelect.addEventListener("change", () => {
    const langCode = langSelect.value;
    console.log("Змінено мову на:", langCode);
    loadLanguage(langCode);
  });
}
