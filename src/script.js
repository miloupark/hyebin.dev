// 계산기 DOM 요소 (전역)
const calcButtons = document.querySelectorAll(".button"); // 계산기 버튼들
const calcDisplay = document.querySelector(".calc__display"); // 계산기 화면

// display의 글자 수에 따라 폰트 크기 줄이는 함수 (단, 최대 글자 수 제한 없음)
function adjustDisplayFontSize() {
  const displayTextLength = calcDisplay.textContent.length;

  if (displayTextLength <= 14) {
    calcDisplay.style.fontSize = "";
  } else if (displayTextLength <= 20) {
    calcDisplay.style.fontSize = "22px";
  } else if (displayTextLength <= 26) {
    calcDisplay.style.fontSize = "18px";
  } else {
    calcDisplay.style.fontSize = "12px";
  }
}

// 버튼 클릭 시 실행
const btnClick = (event) => {
  // 클릭된 버튼 관련 변수 (지역)
  const clickedBtn = event.currentTarget; // 클릭된 버튼 요소
  const clickedBtnText = clickedBtn.querySelector(".button__inner").textContent; // 버튼 안의 텍스트

  // 버튼 종류 확인
  const isNumber = clickedBtn.classList.contains("number"); // 숫자 버튼 여부 확인
  const isDecimal = clickedBtn.classList.contains("decimal"); // 소수점 버튼 여부 확인
  const isClear = clickedBtn.classList.contains("clear"); // 초기화(C) 버튼 여부 확인
  const isFunction = clickedBtn.classList.contains("function"); // 기능 버튼 여부 확인
  const isOperator = clickedBtn.classList.contains("operator"); // 연산자 버튼 여부 확인
  const isEqual = clickedBtn.classList.contains("equal"); // 결과 버튼 여부

  let firstOperand = ""; // 첫 번째 피연산자
  let operator = ""; // 연산자

  // 현재 display 화면(공백 제거된 문자열)
  const currentDisplay = calcDisplay.textContent.trim();

  // display 변화 확인: true시, adjustDisplayFontSize() 실행
  let changeDisplay = false;

  // 초기화(C) 버튼 클릭 시: 디스플레이 0으로 초기화
  if (isClear) {
    console.log(clickedBtnText);
    calcDisplay.textContent = 0;
    changeDisplay = true;
    return; // 종료
  }

  // 결과 버튼
  if (isEqual) {
    console.log(clickedBtnText);
    return;
  }

  // 연산자 버튼 클릭 시
  //  let firstOperand = ""; // 첫 번째 피연산자
  // let operator = ""; // 연산자
  if (isOperator) {
    //
    firstOperand = calcDisplay.textContent.trim();
    operator = clickedBtnText;
    calcDisplay.textContent = "";
    if (firstOperand === null) {
      calcDisplay = firstOperand;
    }
    console.log(operator);
    console.log(firstOperand);
    return;
  }

  // 기능 버튼 클릭 시: 콘솔 출력
  if (isFunction) {
    console.log(clickedBtnText);
    return;
  }

  // 소수점 중복 입력 방지: 디스플레이에 소수점이 없다면 추가
  if (isDecimal) {
    console.log(clickedBtnText);
    if (!currentDisplay.includes(".")) {
      calcDisplay.textContent = currentDisplay + clickedBtnText;
      changeDisplay = true;
    }
    return; // 이미 포함되어 있다면 리턴(무시)
  }

  // 숫자 클릭 시: 현재 화면이 0이면 클릭된 버튼의 값으로 대체, 아니면 이어 붙이기
  if (isNumber) {
    console.log(clickedBtnText);
    if (currentDisplay === "0") {
      calcDisplay.textContent = clickedBtnText;
    } else {
      calcDisplay.textContent += clickedBtnText;
    }
    changeDisplay = true;
  }

  // display 변화 시, 폰트 사이즈 조절
  if (changeDisplay) {
    adjustDisplayFontSize();
  }
};

// 계산기 버튼에 클릭 이벤트 등록
calcButtons.forEach((button) => {
  button.addEventListener("click", btnClick);
});

// 🔍 디버깅용 출력
// console.log(calcButtons);
// 계산기 버튼(.button)을 모두 선택하면 NodeList가 반환됨
// NodeList는 유사 배열 객체지만, forEach() 메서드가 있어서 순회 가능
