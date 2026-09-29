import * as Livro from "../models/livroModel.js";

export function listar(req, res) {
  const livros = Livro.carregaLivros();
  res.render("principal", { livros });
}

export function formNovo(req, res) {
  res.render("novoLivro");
}

export function criar(req, res) {
  const { titulo, autor, paginas } = req.body;
  Livro.adicionarLivro({
    titulo,
    autor,
    paginas: Number(paginas),
    status: "Lendo",
  });
  res.redirect("/livros");
}

export function alterarStatus(req, res) {
  Livro.alterarStatus(req.params.indice);
  res.redirect("/livros");
}

export function remover(req, res) {
  Livro.removerLivro(req.params.indice);
  res.redirect("/livros");
}