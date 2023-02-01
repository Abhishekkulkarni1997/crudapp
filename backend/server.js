const app = require("./app");

const { PORT } = process.env || 4000;

app.listen(PORT, () => {
  console.log("http://localhost:4000");
});
