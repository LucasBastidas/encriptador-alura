const encriptador = document.querySelector(
	".form-encriptador__button-encriptador"
);
const resultado = document.querySelector(".resultado");
const desencriptar = document.querySelector(
	".form-encriptador__button-desencriptador"
);
const input = document.querySelector(".form-encriptador__input");
const imagenResultado = document.querySelector(".resultado-image");
const arrayKeys = [
	["e", "enter"],
	["i", "imes"],
	["a", "ai"],
	["o", "ober"],
	["u", "ufat"],
];

const copyButton = document.querySelector(".copy-button");

function copiarAlPortapapeles(id_elemento) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}

copyButton.addEventListener("click", () => {
	copiarAlPortapapeles("result");
});

function encriptarTexto(texto) {
	for (let i = 0; i < arrayKeys.length; i++) {
		if (texto.includes(arrayKeys[i][0])) {
			texto = texto.replaceAll(arrayKeys[i][0], arrayKeys[i][1]);
		}
	}
	console.log(texto);
	return texto;
}

function desencriptarTexto(texto) {
	for (let i = 0; i < arrayKeys.length; i++) {
		if (texto.includes(arrayKeys[i][1])) {
			texto = texto.replaceAll(arrayKeys[i][1], arrayKeys[i][0]);
		}
	}
	return texto;
}

(function main() {
	encriptador.addEventListener("click", () => {
		if (input.value != "") {
			imagenResultado.style.display = "none";
			copyButton.style.display = "block";
			resultado.textContent = encriptarTexto(input.value);
		} else {
			alert("No escribiste nada.");
		}
	});
	desencriptar.addEventListener("click", (e) => {
		if (input.value != "") {
			imagenResultado.style.display = "none";
			copyButton.style.display = "block";
			resultado.textContent = desencriptarTexto(input.value);
		} else {
			alert("No escribiste nada.");
		}
	});
})();
