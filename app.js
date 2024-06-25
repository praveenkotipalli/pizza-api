const express = require("express");

const pizzaRouter = require("./routes/pizzaRoutes.js");

const app = express();

//MIDDLEWARES
app.use(express.json());

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
app.use("/api/v1/pizzas", pizzaRouter);
// app.get("/api/v1/pizzas", getAllPizzas);
// app.get("/api/v1/pizzas/:id", getPizza);
// app.post("/api/v1/pizza", createPizza);
// app.patch("/api/v1/pizzas/:id", updatePizza);
// app.delete("/api/v1/pizzas/:id", deletePizza);

module.exports = app;
