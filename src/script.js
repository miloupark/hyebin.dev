// 계산기 DOM 요소 (전역)
const calcButtons = document.querySelectorAll(".button"); // 계산기 버튼들
const calcDisplay = document.querySelector(".calc__display"); // 계산기 화면

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

  // 현재 display 화면(공백 제거된 문자열)
  const currentDisplay = calcDisplay.textContent.trim();

  // 초기화(C) 버튼 클릭 시: 디스플레이 0으로 초기화
  if (isClear) {
    calcDisplay.textContent = 0;
    return; // 종료
  }

  // 기능(C, ±, %) 버튼 클릭 시: 화면 반영 막기(임시)
  if (isFunction) {
    return; // 종료
  }

  // 소수점 중복 입력 방지: 디스플레이에 소수점이 없다면 추가
  if (isDecimal) {
    if (!currentDisplay.includes(".")) {
      calcDisplay.textContent = currentDisplay + clickedBtnText;
    }
    return; // 이미 포함되어 있다면 리턴(무시)
  }

  // 숫자 클릭 시: 현재 화면이 0이면 클릭된 버튼의 값으로 대체, 아니면 이어 붙이기
  if (currentDisplay === "0" && isNumber) {
    calcDisplay.textContent = clickedBtnText;
  } else {
    calcDisplay.textContent += clickedBtnText;
  }

  // 🔍 디버깅용 출력 [3-1 단계 > 구현 단계 c번]
  console.log(clickedBtnText);
};

// 계산기 버튼에 클릭 이벤트 등록
calcButtons.forEach((button) => {
  button.addEventListener("click", btnClick);
});
// 🔍 디버깅용 출력
console.log(calcButtons);
// 계산기 버튼(.button)을 모두 선택하면 NodeList가 반환됨
// NodeList는 유사 배열 객체지만, forEach() 메서드가 있어서 순회 가능
