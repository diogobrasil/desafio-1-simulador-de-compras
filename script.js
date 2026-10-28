// Produtos da TechStore — preços correspondem aos exibidos na página
var produtos = [
  { nome: "Notebook Gamer", preco: 4500.00 },
  { nome: "PlayStation 5",  preco: 3200.00 },
  { nome: "Smart TV 55\"",  preco: 2800.00 }
];

function simularCompra() {
  var quantidades = [];
  var totalGeral = 0;
  var algumProduto = false;

  // Perguntar a quantidade de cada produto com prompt()
  for (var i = 0; i < produtos.length; i++) {
    var resposta = prompt(
      "Quantos(as) \"" + produtos[i].nome + "\" você deseja?\n" +
      "Preço unitário: R$ " + produtos[i].preco.toFixed(2).replace(".", ",") + "\n" +
      "(Digite 0 para não comprar)"
    );

    // Converter a resposta em número com Number()
    var quantidade = Number(resposta);

    // Se o usuário cancelar o prompt, tratar como 0
    if (isNaN(quantidade) || quantidade < 0) {
      quantidade = 0;
    }

    // Arredondar para inteiro
    quantidade = Math.floor(quantidade);

    quantidades.push(quantidade);

    if (quantidade > 0) {
      algumProduto = true;
    }
  }

  // Se todas as quantidades forem zero, informar ao usuário
  if (!algumProduto) {
    alert("Nenhum produto foi selecionado.\nVolte sempre à TechStore!");
    return;
  }

  // Montar o resumo da compra
  var resumo = "========== RESUMO DA COMPRA ==========\n\n";

  for (var i = 0; i < produtos.length; i++) {
    var subtotal = produtos[i].preco * quantidades[i];
    totalGeral += subtotal;

    resumo += produtos[i].nome + "\n";
    resumo += "  Quantidade: " + quantidades[i] + "\n";
    resumo += "  Valor: R$ " + subtotal.toFixed(2).replace(".", ",") + "\n\n";
  }

  resumo += "======================================\n";
  resumo += "TOTAL DA COMPRA: R$ " + totalGeral.toFixed(2).replace(".", ",") + "\n";
  resumo += "======================================\n\n";
  resumo += "Obrigado por comprar na TechStore!";

  // Exibir o resultado com alert()
  alert(resumo);
}

