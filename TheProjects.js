async function loadLanguage(langCode) {
  try {
    const response = await fetch(`Translations/The-Projects/${langCode}.json`);
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

  const savedLang = localStorage.getItem("lang") || "en";

  langSelect.value = savedLang;

  loadLanguage(savedLang);

  langSelect.addEventListener("change", () => {
    const langCode = langSelect.value;
    console.log("Змінено мову на:", langCode);
    localStorage.setItem("lang", langCode);
    loadLanguage(langCode);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('.CustomSelect');
  const selected = select.querySelector('.selected');
  const options = select.querySelector('.options');
  const optionItems = options.querySelectorAll('div');

  selected.addEventListener('click', (e) => {
    e.stopPropagation();
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
  });

  optionItems.forEach(option => {
    option.addEventListener('click', () => {
      const newImg = option.querySelector('img').cloneNode(true);
      selected.innerHTML = '';
      selected.appendChild(newImg);
      options.style.display = 'none';
    });
  });

  document.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
      options.style.display = 'none';
    }
  });
});