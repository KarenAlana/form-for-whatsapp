const form = document.getElementById('form')
const username = document.getElementById('username')
const datenasc = document.getElementById('datenasc')
const cpf = document.getElementById('cpf')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const endereco = document.getElementById('endereco')
const password = document.getElementById('password')
const vencimento = document.getElementById('vencimento')

form.addEventListener('submit', (e) =>{
    e.preventDefault(); //para não recarregar pagina ao enviar

        checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const datenascValue = datenasc.value;
    const cpfValue = cpf.value;
    const telefoneValue = telefone.value;
    const emailValue = email.value;
    const enderecoValue = endereco.value;
    const passwordValue = password.value;
    const vencimentoValue = vencimento.value;

    
     /*não deixar campo em branco*/    
   if (usernameValue === "") {
     setErrorFor(username, "Esse campo é obrigatorio.");
   } else if (usernameValue.length < 5) {
     setErrorFor(username, "Esse campo é  precisa ter no mínimo 5 caracteres.");
   } else {
     setSuccessFor(username);
   }



    if (datenascValue === "") {
    setErrorFor(datenasc, "Esse campo é obrigatorio");
  } else {
    setSuccessFor(datenasc);
  }

let data_americana = datenascValue;
let data_brasileira = data_americana.split("-").reverse().join("/");
console.log(data_brasileira);



    if (cpfValue === "") {
      setErrorFor(cpf, "O cpf é obrigatório.");
    } else if (!checkCpf(cpfValue)) {
      setErrorFor(cpf, "Por favor, insira um cpf válido");
    } else {
      setSuccessFor(cpf);
    }




    if (telefoneValue === "") {
      setErrorFor(telefone, "O telefone é obrigatório.");
    } else if (!checkTelefone(telefoneValue)) {
      setErrorFor(telefone, "Por favor, insira um número de telefone válido");
    } else {
      setSuccessFor(telefone);
    }




    if (emailValue === ""){
        setErrorFor(email, 'O email é obrigatório.')
    } else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Por favor, insira um email válido')
    } else {
        setSuccessFor(email)
    }


 if (enderecoValue === "") {
   setErrorFor(endereco, "Esse campo é obrigatorio.");
 } else if (enderecoValue.length < 8) {
   setErrorFor(endereco, "Esse campo é  precisa ter no mínimo 8 caracteres.");
 } else {
   setSuccessFor(endereco);
 }





    if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 8) {
    setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");
    } else {
    setSuccessFor(password);
    }


    if (vencimentoValue === "selecione") {
      setErrorFor(vencimento, "Esse campo é obrigatorio");
    } else {
      setSuccessFor(vencimento);
    }

    // const expedicaoOutro = document.getElementById('input-expedicao')
    // const expedicaoOutroValue = expedicaoOutro.value;
  
    // if (expedicaoValue === "selecione") {
    //  setErrorFor(expedicao, "Esse campo é obrigatorio.");
    // } else if (expedicaoValue === "outro" && expedicaoOutroValue ==="") {
    //    setErrorFor(expedicao, "Esse campo é obrigatorio.");    
    // }else {
    //   setSuccessFor(expedicao);
    // }
  

// console.log(textoendereco)



    const formControls = form.querySelectorAll(".form-control");
    const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
    });

var textousername = "Nome Completo: " + usernameValue;
var textodatenasc = "Data de nascimento: " + data_brasileira;
var textoemail = "E-mail: " + emailValue;
var textocpf = "CPF: " + cpfValue;
var textotelefone = "Telefone: " + telefoneValue;
var textoendereco = "Endereço: " + enderecoValue;
var textovencimento = "Data de Vencimento desejado: " + vencimentoValue;
var textopassword = "Senha desejada para o roteador: " + passwordValue;
// var texto = textoplano + textousername + textonamemom + textonamedad + textodatenasc + textoemail + textorg + textoexpedicao + textocpf + textotelefone + textoendereco + textovencimento
// var texto = 
//  usernameValue+ 
//  namemomValue+ 
//  namedadValue+ 
//  datenascValue+ 
//  cpfValue+ 
//  rgValue+
//  expedicaoValue+
//  telefoneValue+ 
//  emailValue+ 
//  enderecoValue+ 
//  passwordValue+ 
//  planoValue+ 
//  vencimentoValue;
 
//  textoendereco.toUpperCase();


    var enviar = `\n${textousername}\n${textodatenasc}\n${textoemail}\n${textocpf}\n${textotelefone}\n${textoendereco}\n${textovencimento}\n${textopassword}`;
    enviar = window.encodeURIComponent(enviar);
     
    var enviarfim =
      "https://api.whatsapp.com/send?phone=557599363749&text=" + enviar;
    if (formIsValid) {
      window.location.href = enviarfim;
    } 
}




function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = "form-control error";
}


function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}




function checkTelefone(telefone) {
  return (
    /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(telefone)  ///^\(\d{2}\) \d{1} \d{4}\-\d{4}$/
  );
}



function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}


function checkCpf(cpf){
  return /^\d{3}\d{3}\d{3}\d{2}$/.test(cpf); 
}




  // function validarForm() {
  //   var optionSelect = document.getElementById("expedicao").value;

  //   if (optionSelect == "outro") {
  //     document.getElementById("input-expedicao").disabled = false;
  //   } else {
  //     document.getElementById("input-expedicao").disabled = true;
  //   }
  // }
  