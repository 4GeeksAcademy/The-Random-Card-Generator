import "bootstrap";
import "./style.css";

window.onload = () => {
  // nueva carta
  const generarCarta = () => {
    let numero = generarRandomNumero();
    let pinta = generarRandomPinta();
    let cardElement = document.querySelector(".card");

    cardElement.className = "card " + pinta;
    cardElement.innerHTML = numero;
  };

  //  número aleatorio
  let generarRandomNumero = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let iNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[iNumbers];
  };

  // pinta aleatoria
  let generarRandomPinta = () => {
    let pintas = ["heart", "club", "diamond", "spade"];
    let iPintas = Math.floor(Math.random() * pintas.length);
    return pintas[iPintas];
  };

  //  carta al cargar la página cada 10 segundos
  generarCarta();
  setInterval(generarCarta, 10000);

  //boton
  document.getElementById("generateCardBtn").addEventListener("click", () => {
    generarCarta();
  });
};
