import App from "./App";

const app = new App().application;

app.listen(4820, () => {
  console.log("server is opened");
});
