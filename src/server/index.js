const express = require("express");
// const bodyParser = require("body-parser");

// const Pokedex = require("pokedex-promise-v2");

const app = express();
// const P = new Pokedex();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

const port = process.env.PORT || 3000;
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "../public")));

// app.get("/", async (req, res, next) => {
//   try {
//     const pokemons = await P.getPokemonsList();
//     res.json(pokemons);
//   } catch (error) {
//     res.send(error);
//   }
// });

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
