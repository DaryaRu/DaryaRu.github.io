Telegram.WebApp.ready();

Telegram.WebApp.MainButton.setText("Принять")
  .show()
  .onClick(function () {
    var nameInput = document.querySelector("#name");
    var emailInput = document.querySelector("#email");

    const data = JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
    });
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
  });
