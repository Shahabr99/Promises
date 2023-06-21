// First Part
async function myFavNum(num) {
  return await axios.get(`http://numbersapi.com/${num}?json`);
}

myFavNum(9).then((data) => console.log(data.data));

// Second Part
async function numbers(num1, num2, num3, num4) {
  return await axios.get(
    `http://numbersapi.com/${num1},${num2},${num3},${num4}?json`
  );
}

numbers(2, 4, 6, 8).then((data) => console.log(data.data));

// Third Part
async function fourFacts() {
  return await axios.get(`http://numbersapi.com/15?json`);
}

fourFacts()
  .then((res) => {
    console.log(res.data.text);
    return axios.get(`http://numbersapi.com/15?json`);
  })
  .then((res) => {
    console.log(res.data.text);
    return axios.get(`http://numbersapi.com/15?json`);
  })
  .then((res) => {
    console.log(res.data.text);
    return axios.get(`http://numbersapi.com/15?json`);
  })
  .then((res) => {
    console.log(res.data.text);
    return axios.get(`http://numbersapi.com/15?json`);
  })
  .catch((err) => {
    console.log("Error", err);
  });
