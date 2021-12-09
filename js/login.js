function entrar(){
	var emailEntrar = document.getElementById('email-entrar');
	var senhaEntrar = document.getElementById('senha-entrar');
	var emailmserror = document.getElementById('mserroremail');
	
	let listaUser = []
	
	let userValid = {
    nome: '',
    email: '',
    senha: ''
  }
	
	 listaUser = JSON.parse(localStorage.getItem('listaUser'))
	
	listaUser.forEach((item) => {
    if(emailEntrar.value == item.emailCad && senhaEntrar.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         email: item.emailCad,
         senha: item.senhaCad
       }
      
    }
  })
	
	 if(emailEntrar.value == userValid.email && senhaEntrar.value == userValid.senha){
    alert('deubom')
  } else {
	  var emailmserror = document.getElementById('mserroremail');
	  
	  emailmserror.innerHTML = 'Email ou senha iconrretos'
	  emailmserror.setAttribute('style', 'font-size: 14px;')
      emailmserror.setAttribute('style', 'color: red')
  }
	
}