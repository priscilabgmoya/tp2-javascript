// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let piramideInversa = prompt("Ingrese un numero del 1 al 50 inclusive");

if (!isNaN(piramideInversa) && piramideInversa <= 50 && piramideInversa >0) {
  for (let i = piramideInversa=i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      document.write(i);
    }
    document.write(`<br>`);
  }
} else {
  alert(`Ingrese un valor valido`);
}


