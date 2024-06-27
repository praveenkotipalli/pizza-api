const express = require("express");
const cors = require("cors");
const pizzaRouter = require("./routes/pizzaRoutes.js");

const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

// app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log("Hello from MIDDLEWARE !");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// console.log(pizzas);

//ROUTE HANDLERS

//ROUTES
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/main.html`);
});

app.use("/api/v1/pizzas", pizzaRouter);
// app.get("/api/v1/pizzas", getAllPizzas);
// app.get("/api/v1/pizzas/:id", getPizza);
// app.post("/api/v1/pizza", createPizza);
// app.patch("/api/v1/pizzas/:id", updatePizza);
// app.delete("/api/v1/pizzas/:id", deletePizza);

module.exports = app;
