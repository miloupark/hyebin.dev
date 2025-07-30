// DOM 요소 (전역)
const calcButtons = document.querySelectorAll(".button"); // 계산기 버튼들
const calcDisplay = document.querySelector(".calc__display"); // 계산기 화면

// 계산기 상태 변수 (전역)
let firstOperand = null; // 첫 번째 피연산자
let secondOperand = null; // 두 번째 피연산자
let operator = null; // 연산자
let shouldResetDisplay = false; // 새 숫자 입력 시, 디스플레이 초기화 여부

// display의 글자 수에 따라 폰트 크기 줄이는 함수 (단, 입력 제한은 없음)
const adjustDisplayFontSize = () => {
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
};

// 초기화(C) 버튼 클릭 시: 계산기 상태 변수 초기화
const clickClear = () => {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  shouldResetDisplay = false;
  calcDisplay.textContent = "0";
  adjustDisplayFontSize();
};

// 숫자 버튼 클릭 시
const clickNumber = (number) => {
  const currentDisplay = calcDisplay.textContent.trim();

  // 연산자 버튼을 누른 이후거나(true), 현재 디스플레이가 "0"이면 새 숫자로 반영
  if (shouldResetDisplay || currentDisplay === "0") {
    calcDisplay.textContent = number;
    shouldResetDisplay = false;
  } else {
    // 이어서 숫자 입력
    calcDisplay.textContent += number;
  }

  adjustDisplayFontSize();
};

// 소수점 버튼 클릭 시
const clickDecimal = () => {
  const currentDisplay = calcDisplay.textContent.trim();

  if (shouldResetDisplay) {
    // 연산자 다음, 새 숫자를 시작하는 경우 "0."부터 시작
    calcDisplay.textContent = "0.";
    shouldResetDisplay = false;
  } else if (!currentDisplay.includes(".")) {
    // 소수점 없으면 추가
    calcDisplay.textContent += ".";
  }

  adjustDisplayFontSize();
};

// 연산자 버튼 클릭 시
const clickOperator = (value) => {
  const currentDisplay = calcDisplay.textContent.trim();

  if (firstOperand === null) {
    firstOperand = currentDisplay; // 첫 번째 피연산자가 null이면 현재 값을 저장
  } else if (operator && !shouldResetDisplay) {
    secondOperand = currentDisplay; // 기존 연산자가 있고, 새 숫자 입력이 있다면 계산 진행

    const result = calculate(firstOperand, operator, secondOperand);
    calcDisplay.textContent = String(result); // 화면 출력 시 숫자 -> 문자열로 변경
    firstOperand = result; // 계산 결과 다음 계산의 첫 번째 숫자로 저장
  }

  operator = value; // 클릭한 연산기호 저장
  shouldResetDisplay = true; // 새로운 숫자 입력 -> display 초기화 상태 변경

  console.log(`firstOperand: ${firstOperand}, operator: ${operator}`);
};

// = 버튼 클릭 시
const clickEqual = () => {
  // 첫 번째 피연산자와 연산자가 null이 아니면
  if (firstOperand !== null && operator !== null) {
    secondOperand = calcDisplay.textContent.trim(); // 현재 값을 넣고 calculate() 실행

    const result = calculate(firstOperand, operator, secondOperand);
    calcDisplay.textContent = String(result); // 화면 출력 시 숫자 -> 문자열로 변경
    adjustDisplayFontSize();

    // 첫 번째 피연산자에 다음 계산을 이어가도록 결과 저장
    firstOperand = result;
    secondOperand = null;
    shouldResetDisplay = true;
  }
};

// calculate 함수: 연산자에 따라 계산 결과 반환
const calculate = (firstOperand, operator, secondOperand) => {
  // 문자열을 부동소수점 숫자로 변환
  const firstNum = parseFloat(firstOperand);
  const secondNum = parseFloat(secondOperand);

  // 연산 조건문
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      if (secondNum !== 0) {
        return firstNum / secondNum;
      } else {
        // secondNum이 0이면 '정의되지 않음' 출력 (레퍼런스: 맥북 계산기)
        return "정의되지 않음";
      }
    default:
      return secondNum;
  }
};

// 버튼 클릭 이벤트
const btnClick = (event) => {
  // 클릭된 버튼 요소 및 값
  const clickedBtn = event.currentTarget; // 클릭한 버튼
  const clickedBtnValue = clickedBtn.dataset.set; // 버튼에 설정된 데이터 값 (html data-set)

  // 버튼 클래스에 따라 함수 호출
  if (clickedBtn.classList.contains("clear")) return clickClear();
  if (clickedBtn.classList.contains("number")) return clickNumber(clickedBtnValue);
  if (clickedBtn.classList.contains("decimal")) return clickDecimal();
  if (clickedBtn.classList.contains("operator")) return clickOperator(clickedBtnValue);
  if (clickedBtn.classList.contains("equal")) return clickEqual();
  if (clickedBtn.classList.contains("function")) return clickFunction(clickedBtnValue);
};

// 계산기 버튼에 클릭 이벤트 등록
calcButtons.forEach((button) => {
  button.addEventListener("click", btnClick);
});

// 🔍 디버깅용 출력
// console.log(calcButtons);
// 계산기 버튼(.button)을 모두 선택하면 NodeList가 반환됨
// NodeList는 유사 배열 객체지만, forEach() 메서드가 있어서 순회 가능
