window.onload = () =>
  window.YaAuthSuggest.init(
    {
      client_id: "c46f0c53093440c39f12eff95a9f2f93",
      response_type: "token",
      redirect_uri: "https://suggest-test.vercel.app/token",
    },
    "https://suggest-test.vercel.app"
  )
    .then(({ handler }) => handler())
    .then((data) => {
      document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
    })
    .catch((err) => {
      document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(err)}`;
    });

window.addEventListener("message", console.log);
