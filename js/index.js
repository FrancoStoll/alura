document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.querySelector('#textarea');
  const btnEncriptar = document.querySelector('.encriptar');
  const btnDesencriptar = document.querySelector('.desencriptar');
  let resultado = document.querySelector('#informacion');
  const conInfo = document.querySelector('#conInformacion');
  const sinInfo = document.querySelector('#sinInformacion');
  const bottonCopy = document.querySelector('#copy');

  // Botones
  btnEncriptar.onclick = encriptar;
  btnDesencriptar.onclick = desencriptar;

  bottonCopy.addEventListener('click', function () {
    const contenido = resultado.textContent;

    navigator.clipboard.writeText(contenido);
  });

  function encriptar() {
    resultado.textContent = encriptarTexto(textarea.value);
    toggleResultado();
  }

  function desencriptar() {
    resultado.textContent = desencriptarTexto(textarea.value);
    toggleResultado();
  }

  function toggleResultado() {
    if (resultado.value !== '') {
      conInfo.classList.remove('hidden');
      sinInfo.classList.add('hidden');
      return;
    }
  }

  function desencriptarTexto(texto) {
    let textoDesencriptado = '';

    for (let i = 0; i < texto.length; i++) {
      if (texto[i] == 'e') {
        textoDesencriptado += 'e';

        i += 4;
      } else if (texto[i] == 'i') {
        textoDesencriptado += 'i';
        i += 3;
      } else if (texto[i] == 'a') {
        textoDesencriptado += 'a';
        i += 1;
      } else if (texto[i] == 'o') {
        textoDesencriptado += 'o';

        i += 3;
      } else if (texto[i] == 'u') {
        textoDesencriptado += 'u';
        i += 3;
      } else {
        textoDesencriptado += texto[i];
      }
    }

    return textoDesencriptado;
  }

  function encriptarTexto(texto) {
    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
      if (texto[i] == 'e') {
        textoEncriptado += 'enter';
      } else if (texto[i] == 'i') {
        textoEncriptado += 'imes';
      } else if (texto[i] == 'a') {
        textoEncriptado += 'ai';
      } else if (texto[i] == 'o') {
        textoEncriptado += 'ober';
      } else if (texto[i] == 'u') {
        textoEncriptado += 'ufat';
      } else {
        textoEncriptado += texto[i];
      }
    }
    console.log(textoEncriptado);
    return textoEncriptado;
  }
});
