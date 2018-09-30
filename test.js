function oduzmi(a,b) {
  return a-b;
}

function saberi(a,b) {
    return a+b;
}

function podeli(a, b){
  return a/b;
}

function pomnozi(a, b){
  return a*b;
}

var a = prompt("Prvi broj?"); //pokusao sam readline() al sam ostao zbunjen
var b = prompt("Drugi broj?");

while (true){
  console.log("Upisite znak operacije");
  var znak = prompt("Znak operacije?");
  if (znak == '+'){
    saberi(a,b);
    break;
  }
  else if(znak == '-'){
    oduzmi(a,b);
    break;
  }
  else if(znak == '/'){
    podeli(a,b);
    break;
  }
  else if(znak =='*'){
    pomnozi(a,b);
    break;
  }
  else console.log("Znak nevalidan");
}