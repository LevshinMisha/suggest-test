window.onload = function () {
  window.YaAuthSuggest.init(
    {
      client_id: "c46f0c53093440c39f12eff95a9f2f93",
      response_type: "token",
      redirct_uri: "https://test.sso-test.kinopoisk.ru/suggest/token",
    },
    "https://test.sso-test.kinopoisk.ru"
  )
    .then(({ handler }) => handler())
    .then(function (data) {
      console.log("Сообщение с токеном: ", data);
    })
    .catch(function (error) {
      console.log("Что-то пошло не так: ", error);
    });
};
