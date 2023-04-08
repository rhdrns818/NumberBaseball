randomDigitNumber = '';

const threeDigitButton = document.querySelectorAll(".digit")[0];

threeDigitButton.addEventListener("click", () => {
  // 000 ~ 999 중 숫자 1개 랜덤으로 만들기
  randomDigitNumber = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  threeDigitButton.style.border = "4px solid pink";
  threeDigitButton.style.color = "pink";
});

const fourDigitButton = document.querySelectorAll(".digit")[1];

fourDigitButton.addEventListener("click", () => {
  // 0000 ~ 9999 중 숫자 1개 랜덤으로 만들기
  randomDigitNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  fourDigitButton.style.border = "4px solid pink";
  fourDigitButton.style.color = "pink";
});

const fiveDigitButton = document.querySelectorAll(".digit")[2];

fiveDigitButton.addEventListener("click", () => {
  // 00000 ~ 99999 중 숫자 1개 랜덤으로 만들기
  randomDigitNumber = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");
  fiveDigitButton.style.border = "4px solid pink";
  fiveDigitButton.style.color = "pink";
});

// 숫자야구
const buttonInput = document.querySelector(".button");
const digitsInput = document.querySelector(".digit_input");
let count = 0;

buttonInput.addEventListener("click", () => {
  if (randomDigitNumber === ''){
    alert("자릿수 버튼을 눌러주세요!");
  }
  else {
    console.log(randomDigitNumber);
    digits = randomDigitNumber.toString().length;
  if (digitsInput.value.length == digits) {
    const numberEmptyPlace = document.querySelector(".find_number");
    if (numberEmptyPlace) {
      numberEmptyPlace.textContent = digitsInput.value;
      numberEmptyPlace.classList.remove("find_number");
    }
    const countEmptyPlace = document.querySelector(".count_number");
    if (countEmptyPlace) {
      count++;
      countEmptyPlace.innerHTML = count;
      countEmptyPlace.classList.remove("count_number");
    }
    let digit = digitsInput.value;
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < `${digits}`; i++) {
      if (randomDigitNumber[i] === digit[i]) {
        strike++;
      } else if (randomDigitNumber.includes(digit[i])) {
        ball++;
      }
    }
    let result = "";
    if (strike === 0 && ball === 0) {
      result = "OUT";
    } else {
      result += `B: ${ball}, S: ${strike}`;
    }
    const resultEmptyPlace = document.querySelector(".find_result");
    const rowPlace = document.querySelector(".row");
    if (resultEmptyPlace) {
      resultEmptyPlace.textContent = result;
      resultEmptyPlace.classList.remove("find_result");
      if (result.includes("S: " + digits)) {
        rowPlace.style.backgroundColor = "aqua";
        alert("축하합니다! 게임을 다시 시작하고 싶으면 새로고침 하세요.")
      }
      rowPlace.classList.remove("row");
    }
  } else {
    alert("잘못 입력하셨습니다. 숫자 " + digits + "자리를 입력해주세요");
  }}
});
