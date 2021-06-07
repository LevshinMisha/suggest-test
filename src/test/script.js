window.onload = () =>
  window.YaAuthSuggest.init(
    {
      client_id: "c46f0c53093440c39f12eff95a9f2f93",
      response_type: "token",
      redirect_uri: "https://suggest-test.vercel.app/token",
    },
    "https://suggest-test.vercel.app",
    { hostname: "https://autofill-test.yandex.ru" }
  )
    .then(({ handler }) => handler())
    .then((data) => {
      document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
    })
    .catch((err) => {
      document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(err)}`;
    });

window.addEventListener("message", (e) => {
  if (e && e.data && e.data.cause === "suggest") {
    console.log("postMessage: ", e.data);
  }
});
