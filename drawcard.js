"use strict";
const button = document.querySelector(".btn");
const cardBase = document.querySelector(".card-base");
let deck;
let click = 0;
let cardsArr;

axios
  .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => {
    deck = res.data.deck_id;
    return axios
      .get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=51`)
      .then((res) => {
        cardsArr = res.data.cards;
      });
  });

button.addEventListener("click", function () {
  if (click <= 51) {
    let degree = Math.random() * 90 - 45;
    let x = Math.random() * 40 - 20;
    let y = Math.random() * 40 - 20;

    let image = cardsArr[click].image;
    click++;
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${image})`;
    card.style.zIndex = click;
    card.style.transform = ` translate(${x}px, ${y}px) rotate(${degree}deg)`;
    cardBase.append(card);
  } else {
    alert("No more cards!");
    click = 0;
  }
});
