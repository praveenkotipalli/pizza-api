const fs = require("fs");

const pizzas = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/data.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`The requested id is ${val}`);
  if (req.params.id * 1 > pizzas.length) {
    return res.status(404).json({
      status: "fail",
      message: "invalid id",
    });
  }
  next();
};
exports.getAllPizzas = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    data: {
      pizzas,
    },
  });
};

exports.getPizza = (req, res) => {
  // console.log(req.params.id);

  const id = req.params.id * 1;

  const pizza = pizzas.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      pizza,
    },
  });
};

exports.createPizza = (req, res) => {
  const newId = pizzas[pizzas.length - 1].id + 1;
  const newPizza = Object.assign({ id: newId }, req.body);

  pizzas.push(newPizza);

  fs.writeFile(
    `${__dirname}/dev-data/data/data.json`,
    JSON.stringify(pizzas),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          pizzas: newPizza,
        },
      });
    }
  );
};

exports.updatePizza = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      pizza: "<Updated pizza here>",
    },
  });
};

exports.deletePizza = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
