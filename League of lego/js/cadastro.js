var nome = document.getElementById('nome');
var nomeValid = false

var email = document.getElementById('email');
var emailValid = false

var senha = document.getElementById('senha');
var senhaValid = false

var firmsenha = document.getElementById('confirsenha');
var confirsenhaValid = false

var mensagem = document.getElementById('mserror');

nome.addEventListener('keyup', () => {
	if(nome.value.length <= 3){
		nome.setAttribute('style', 'color: #ff4747')
		nomeValid = false
	} else{
		nome.setAttribute('style', 'color: #000')
		nomeValid = true
	}
})

email.addEventListener('keyup', () => {
	if(email.value.length <= 5){
		email.setAttribute('style', 'color: #ff4747')
		emailValid = false
	} else{
		email.setAttribute('style', 'color: #000')
	    emailValid = true
	}
})

senha.addEventListener('keyup', () => {
	if(senha.value.length <= 6){
		senha.setAttribute('style', 'color: #ff4747')
		senhaValid = false
	} else{
		senha.setAttribute('style', 'color: #000')
		senhaValid = true
	}
})

firmsenha.addEventListener('keyup', () => {
	if(firmsenha.value != senha.value){
		firmsenha.setAttribute('style', 'color: #ff4747')
		 confirsenhaValid = false
	} else{
		firmsenha.setAttribute('style', 'color: #000')
		 confirsenhaValid = true
	}
})

function cadastrar(){
	if(nomeValid && emailValid && senhaValid && confirsenhaValid){
		let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
		
		listaUser.push(
    {
      nomeCad: nome.value,
      emailCad: email.value,
      senhaCad: senha.value
    }
    )
	
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
		
        container.classList.remove("right-panel-active");
		
	} else {
		var mensagem = document.getElementById('mserror');
		
		mensagem.innerHTML = 'algo de errado, confira todos os campos preenchidos'
		mensagem.setAttribute('style', 'font-size: 14px;')
		mensagem.setAttribute('style', 'color: red')
	}
}