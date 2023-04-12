randomDigitNumber = "";

const threeDigitButton = document.querySelectorAll(".digit")[0];

threeDigitButton.addEventListener("click", () => {
  // 3자리 숫자 1개 랜덤으로 만들기
  randomDigitNumber = "";
  const num = [0,1,2,3,4,5,6,7,8,9];

  for(let i = 0; i< 3; i++){
    let randomIndex = Math.floor(Math.random() * num.length);
    randomDigitNumber += num[randomIndex].toString();
    num.splice(randomIndex, 1);
  }
  if(fourDigitButton || fiveDigitButton){
    fourDigitButton.style.border = "4px solid gray";
    fourDigitButton.style.color = "gray";
    fiveDigitButton.style.border = "4px solid gray";
    fiveDigitButton.style.color = "gray";
  }
  threeDigitButton.style.border = "4px solid pink";
  threeDigitButton.style.color = "pink";
  console.log(randomDigitNumber);
});

const fourDigitButton = document.querySelectorAll(".digit")[1];

fourDigitButton.addEventListener("click", () => {
  // 4자리 숫자 1개 랜덤으로 만들기
  randomDigitNumber = "";
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * num.length);
    randomDigitNumber += num[randomIndex].toString();
    num.splice(randomIndex, 1);
  }if (threeDigitButton || fiveDigitButton) {
    threeDigitButton.style.border = "4px solid gray";
    threeDigitButton.style.color = "gray";
    fiveDigitButton.style.border = "4px solid gray";
    fiveDigitButton.style.color = "gray";
  }
  fourDigitButton.style.border = "4px solid pink";
  fourDigitButton.style.color = "pink";
  console.log(randomDigitNumber);
});

const fiveDigitButton = document.querySelectorAll(".digit")[2];

fiveDigitButton.addEventListener("click", () => {
  // 5자리 숫자 1개 랜덤으로 만들기
  randomDigitNumber = "";
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * num.length);
    randomDigitNumber += num[randomIndex].toString();
    num.splice(randomIndex, 1);
  }
  if (fourDigitButton || threeDigitButton) {
    fourDigitButton.style.border = "4px solid gray";
    fourDigitButton.style.color = "gray";
    threeDigitButton.style.border = "4px solid gray";
    threeDigitButton.style.color = "gray";
  }
  fiveDigitButton.style.border = "4px solid pink";
  fiveDigitButton.style.color = "pink";
  console.log(randomDigitNumber);
  
});

// 숫자야구
const $resetbutton = document.querySelector(".reset-button");
$resetbutton.addEventListener("click",() => {
  location.href = "index.html";
});

const buttonInput = document.querySelector(".input-button");
const digitsInput = document.querySelector(".digit_input");
let count = 0;

buttonInput.addEventListener("click", () => {
  if (randomDigitNumber === "") {
    alert("자릿수 버튼을 눌러주세요!");
  } else {
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
          alert("축하합니다! 게임을 다시 시작하고 싶으면 리셋 버튼을 누르세요.");
          digitsInput.disabled = true;
          buttonInput.disabled = true;
        }
        rowPlace.classList.remove("row");
      }
    } else {
      alert("잘못 입력하셨습니다. 숫자 " + digits + "자리를 입력해주세요");
    }
  }
});