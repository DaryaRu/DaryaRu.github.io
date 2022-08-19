Telegram.WebApp.ready();

Telegram.WebApp.MainButton.setText("Подтвердить")
  .show()
  .onClick(function () {
    var firstNameInput = document.querySelector("#first_name");
    var lastNameInput = document.querySelector("#last_name");
    var middleNameInput = document.querySelector("#middle_name");
    var companyNameInput = document.querySelector("#company_name");

    const data = JSON.stringify({
      first_name: firstNameInput.value,
      last_name: lastNameInput.value,
      middle_name: middleNameInput.value,
      company_name: companyNameInput.value,
    });
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
  });
