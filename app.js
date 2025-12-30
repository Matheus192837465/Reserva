const API_URL = "https://script.google.com/macros/s/AKfycbyfRPXOwc_5o3KjPDY6usuuKYW_dAINMLjnlYhGryzdBoDhOJh8lF3Nm8I-RUIwf9f6/exec";

function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("msg");

  msg.innerText = "Entrando...";

  const url = `${API_URL}?action=login&usuario=${encodeURIComponent(usuario)}&senha=${encodeURIComponent(senha)}`;

  fetch(url)
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
    .catch(err => {
      console.error(err);
      msg.innerText = "Erro ao conectar ao servidor";
    });
}
