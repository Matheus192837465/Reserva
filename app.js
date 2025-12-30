const API_URL = "https://script.google.com/macros/s/AKfycbyfRPXOwc_5o3KjPDY6usuuKYW_dAINMLjnlYhGryzdBoDhOJh8lF3Nm8I-RUIwf9f6/exec";

function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("msg");

  msg.innerText = "Entrando...";

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      usuario: usuario,
      senha: senha
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.sucesso) {
      if (data.tipo === "admin") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "reservas.html";
      }
    } else {
      msg.innerText = "Usuário ou senha inválidos";
    }
  })
  .catch(() => {
    msg.innerText = "Erro ao conectar ao servidor";
  });
}

function toggleSenha() {
  const input = document.getElementById("senha");
  input.type = input.type === "password" ? "text" : "password";
}
