function base_convert(number, initial_base, base) {
  let conversaoDecimal = parseInt(number, initial_base);
  if (isNaN(conversaoDecimal)) return "Número inválido para essa base!";
  return conversaoDecimal.toString(base).toUpperCase();
}

function converter() {
  let number = document.getElementById("number").value.trim();
  let initialBase = parseInt(document.getElementById("initial_base").value);
  let targetBase = parseInt(document.getElementById("target_base").value);

  let resultado = base_convert(number, initialBase, targetBase);
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
