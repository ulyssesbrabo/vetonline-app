


$(document).ready(function(){

	$("#go").click(function(){

		validaLogin ($("#login"), $("#password"));

	});

});

function validaLogin(login, password){

	if (login.val()=="") {
		alert("Informe o login!");
		login.focus();
		return;
	}
	
	else if (password.val()=="") {
		alert("Informe o password!");
		password.focus();
		return;
	}

	else{
		$("#resultado").html("Autenticando...");

		$.post( (""), {login: login.val(), senha: password.val()}, function(retorno){
			$("#resultado").html(retorno);
		}
		);

	}

}