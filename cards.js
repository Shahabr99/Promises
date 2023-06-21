"use strict";
// Part 1
function shuffleDraw() {
  return axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
}

shuffleDraw()
  .then((res) => {
    const deck = res.data.deck_id;
    return axios.get(
      `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
    );
  })
  .then((res) => {
    const value = res.data.cards[0].value;
    const suit = res.data.cards[0].suit;
    console.log(`it is the ${value} of ${suit}`);
  });

// Part 2
let twoCards = [];
let deck;
function getTwoCards() {
  return axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((res) => {
      const deck = res.data.deck_id;
      return axios
        .get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
        .then((res) => {
          let { value, suit } = res.data.cards[0];

          const deck = res.data.deck_id;
          console.log(`First card is ${value} of ${suit}`);
          return axios
            .get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
            .then((res) => {
              let { value, suit } = res.data.cards[0];

              console.log(`Second card is ${value} of ${suit}`);
            });
        });
    });
}

getTwoCards();
