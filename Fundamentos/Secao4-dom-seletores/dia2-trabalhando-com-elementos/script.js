let newElement = document.createElement('p');
newElement.innerHTML = "Esse é irmão" ;
let pai = document.getElementById("pai");
pai.appendChild(newElement);
let irmao = document.getElementById("elementoOndeVoceEsta");
irmao.appendChild(newElement)