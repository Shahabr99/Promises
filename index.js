// First Part
async function myFavNum(num) {
  const result = await axios.get(`http://numbersapi.com/${num}?json`);
  console.log(result.data.text);
}

myFavNum(9);

// Second Part
async function numbers(num1, num2, num3, num4) {
  const resp = await axios.get(
    `http://numbersapi.com/${num1},${num2},${num3},${num4}?json`
  );
  console.log(resp.data);
}

numbers(2, 4, 6, 8);

// Third Part
async function fourFacts(num) {
  for (let i = 0; i < num; i++) {
    const resp = await axios.get(`http://numbersapi.com/15?json`);
    console.log(resp.data.text);
  }
}

fourFacts(4);
