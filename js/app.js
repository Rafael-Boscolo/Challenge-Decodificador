const regex = "[^a-z ]";
let copiar = '';
let resultado = document.getElementById('resultado');
let divElementos = document.getElementById('elementos');
let btnCopiar = document.getElementById('btn-copiar');

function Criptografar() {
    let texto = document.querySelector('textarea').value;
    let textoCriptografado = "";

    textoCriptografado = texto.replace(/e/g, "enter")
                        .replace(/i/g, 'imes')
                        .replace(/a/g, 'ai')
                        .replace(/o/g, 'ober')
                        .replace(/u/g, 'ufat');

    copiar = textoCriptografado;
    resultado.style.display = 'block';
    divElementos.style.display = 'none';
    btnCopiar.style.display = 'block';
    resultado.innerHTML = textoCriptografado;

}

function Descriptografar() {
    let texto = document.querySelector('textarea').value;
    let textoDecriptografado = "";

    textoDecriptografado = texto.replace(/enter/g, "e")
                        .replace(/imes/g, 'i')
                        .replace(/ai/g, 'a')
                        .replace(/ober/g, 'o')
                        .replace(/ufat/g, 'u');

    copiar = textoDecriptografado;
    resultado.style.display = 'block';
    divElementos.style.display = 'none';
    btnCopiar.style.display = 'block';
    resultado.innerHTML = textoDecriptografado;
}

function Copiar() {
    navigator.clipboard.writeText(copiar);
    console.log(copiar)
}

function ValidarCriptografia(a) {
    let valida = document.querySelector('textarea').value;

    if(valida == '') { 
        alert('O campo está vazio digite um texo em "Digite o seu texto aqui!"')
    } else {
        if(a == 1 ) {
            if(!valida.match(regex)) {
                Criptografar();        
            } else {
                alert("Apenas letra minúsculas e sem acento!");
            }
        } else if(a == 2) {
            if(!valida.match(regex)) {
                Descriptografar();        
            } else {
                alert("Apenas letra minúsculas e sem acento!");
            }
        }
    }   
}