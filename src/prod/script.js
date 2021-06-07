window.onload = () =>
  window.YaAuthSuggest.init(
    {
      client_id: "c423ab6a5fc04897a133a8f71f0ab771",
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

window.addEventListener("message", (e) => {
  if (e && e.data && e.data.cause === "suggest") {
    console.log("postMessage: ", e.data);
  }
});
