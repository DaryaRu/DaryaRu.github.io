function setThemeClass() {
  document.documentElement.className = Telegram.WebApp.colorScheme;
}

setThemeClass();

Telegram.WebApp.onEvent("themeChanged", setThemeClass);
