document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();

  if (!this.checkValidity()) {
    alert("Por favor, preencha todos os campos obrigatórios corretamente.");
  } else {
    alert("Cadastro enviado com sucesso! 🎉");
    this.reset();
  }
});