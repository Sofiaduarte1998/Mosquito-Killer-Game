let altura = 0
let largura = 0
let vidas= 1
let tempo= 15
let criaMoscaTempo= 1500


//niveis selecionado 
var nivel=window.location.search
nivel=nivel.replace('?','')

if(nivel === 'facil'){
	//1500
	criaMoscaTempo= 1500
}else if(nivel === 'medio'){
	//1000
	criaMoscaTempo= 1000
}else if(nivel === 'dificil'){
	criaMoscaTempo= 750
	//750
}

//ajusto do jogo
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro= setInterval(function(){

	tempo-= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href='index3.html'
	}else{
		document.getElementById('cronometro').innerHTML=tempo
	}
	
},1000)

function posicaoRandomica() {


    //remover a mosca existente 
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()
		if(vidas > 3){
			window.location.href='index2.html'
		}else{
			document.getElementById('v'+ vidas).src="img/coracao_vazio.png"
			vidas ++
		}
	}
	
   

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosca = document.createElement('img')
	mosca.src = 'img/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
    mosca.id ='mosca'
	mosca.onclick=function(){
		this.remove()
	}

	document.body.appendChild(mosca)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosca1'
		
		case 1:
			return 'mosca2'

		case 2:
			return 'mosca3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'
	}
}
