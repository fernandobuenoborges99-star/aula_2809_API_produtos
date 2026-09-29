import fs from "fs";

const arquivo = "livros.json";

export function carregaLivros() {
  try {
    const dados = fs.readFileSync(arquivo, "utf-8");
    return JSON.parse(dados);
  } catch (erro) {
    return [];
  }
}

export function salvarLivros(livros) {
  fs.writeFileSync(arquivo, JSON.stringify(livros, null, 2));
}

export function adicionarLivro(novoLivro) {
  const livros = carregaLivros();
  livros.push(novoLivro);
  salvarLivros(livros);
}

export function alterarStatus(indice) {
  const livros = carregaLivros();
  if (livros[indice]) {
    livros[indice].status = livros[indice].status === "Lendo" ? "Lido" : "Lendo";
    salvarLivros(livros);
  }
}

export function removerLivro(indice) {
  const livros = carregaLivros();
  livros.splice(indice, 1);
  salvarLivros(livros);
}