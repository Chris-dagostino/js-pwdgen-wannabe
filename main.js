
let name = prompt ('inserisci il tuo nome');
document.getElementById ('firstName').innerHTML=name;

let lastName = prompt ('inserisci il tuo cognome');
document.getElementById ('lastName').innerHTML=lastName;

let color = prompt ('inserisci il tuo colore preferito');
document.getElementById ('color').innerHTML=color;

let password = name + lastName + color + "21";
document.getElementById ('password').innerHTML=password