import express from "express";
import livroRoutes from "./routes/livroRoutes.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/livros", livroRoutes);

app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080");
});