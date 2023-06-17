function validarFormulario() {
  var inputs = Array.from(document.querySelectorAll(".formulario input"));
  var preenchidos = true;

  inputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("vazio");
      preenchidos = false;
    } else {
      input.classList.remove("vazio");
      input.classList.add("preenchido");
    }
  });

  if (!preenchidos) {
    event.preventDefault();
    exibirMensagemAlerta(inputs);
  }
}

function exibirMensagemAlerta() {
  var campos = document.querySelectorAll(".formulario input");
  campos.forEach(function (campo) {
    if (campo.value.trim() === "") {
      campo.nextElementSibling.style.display = "block";
    } else {
      campo.nextElementSibling.style.display = "none";
    }
  });
}
