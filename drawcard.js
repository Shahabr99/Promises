"use strict";
const button = document.querySelector(".btn");
const cardBase = document.querySelector(".card-base");
let deck;
let click = 0;
let cardsArr;
let number = 40;
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
    number > 0 ? (number = -40) : (number = 40);
    let degree = Math.round(Math.random() * number);
    console.log(degree);
    let image = cardsArr[click].image;
    click++;
    console.log(click, image);
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${image})`;
    card.style.zIndex = click;
    card.style.transform = `rotate(${degree}deg)`;
    cardBase.append(card);
  }
});
