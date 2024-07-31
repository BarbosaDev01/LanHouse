function mostrar(){
var produto = document.getElementById('produto').value;
var preco = document.getElementById('preco').value;
var final = (preco/2);

document.getElementById(`resultado`).innerHTML = `${produto} Promoção Leve 3 por R$${preco}! <br> O 3 produto custa apenas: ${final} `;

}