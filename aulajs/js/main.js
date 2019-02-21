function funcao(){
var nome = prompt ("Alteraçao do Nome ");
var idade = prompt ("Alteraçao da Idade");
var endereco = prompt ("Alteraçao  do Endereço")
document.getElementById('nome').innerHTML = nome ;
document.getElementById('idade').innerHTML = idade ;
document.getElementById('endereco').innerHTML = endereco ;
}

function soma(){
  var soma1 = prompt("SOMA");

  var soma2 = prompt("SOMA");

  var soma = parseInt(soma1) + parseInt(soma2);

  alert(soma);
}
