window.onload = function () {
  document.getElementById("old").innerText = document.cookie;
  window.YaAuthSuggest.init(
    {
      client_id: "c46f0c53093440c39f12eff95a9f2f93",
      response_type: "token",
      redirect_uri: "https://test.sso-test.kinopoisk.ru/suggest/token",
    },
    "https://test.sso-test.kinopoisk.ru",
    { hostname: "https://autofill-test.yandex.ru" }
  )
    .then(({ handler }) => handler())
    .then((data) => console.log("Сообщение с токеном: ", data))
    .catch((error) => console.log("Что-то пошло не так: ", error));
};
