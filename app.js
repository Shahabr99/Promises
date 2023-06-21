const ul = document.querySelector(".result");

// First Part
function myFavNum(num) {
  return axios.get(`http://numbersapi.com/${num}?json`);
}

myFavNum(9).then((data) => console.log(data.data));

// Second Part
function numbers(num1, num2, num3, num4) {
  return axios.get(
    `http://numbersapi.com/${num1},${num2},${num3},${num4}?json`
  );
}

numbers(2, 4, 6, 8).then((data) => console.log(data.data));

// Third Part
let facts = [];
for (let i = 1; i < 5; i++) {
  facts.push(axios.get(`http://numbersapi.com/15?json`));
}

Promise.all(facts).then((factsArr) => {
  factsArr.forEach((fact) => {
    const li = document.createElement("li");
    li.innerText = fact.data.text;
    ul.append(li);
  });
});
