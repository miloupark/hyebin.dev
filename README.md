# 🧮 Calculator | JS Final Mission in OZ

![계산기 디자인](./src/images/calculator_ui.png)

### 나만의 계산기 구현하기

- 🚀 [Live Demo (GitHub Pages)](https://miloupark.github.io/calculator/)
- 작업 기간: 2025-07-25 ~ 2025-07-30
- 작업 로그: [Binyard Blog](https://binyard.me/OZ/fe/mission.html)
- 디자인 시안: [Figma](https://www.figma.com/design/hh1hbNBF5992A1dQYb6INU/Calculator?node-id=0-1&t=AJexyvuflp4TE5th-1)

<br>

## 🗂️ JavaScript 최종과제 가이드

<details>
<summary>DAY1 미션지</summary>

#### STEP 1. HTML로 목업 만들기

요구사항

1. HTML 파일을 생성하고 기본 구조를 작성하세요.

2. CSS 초기화 코드를 입력해주세요.

<br>

구현 단계

1. `index.html`

- body 요소 내부에 계산기 컨테이너를 만듭니다.
- flex를 이용하여 컨테이너가 화면의 중간에 위치하도록 합니다.
- 컨테이너 내부에 2개의 영역을 생성합니다. (display, buttons)
- 각 영역을 시각적으로 확인할 수 있도록 border 속성을 추가합니다.
- `display`와 `buttons`를 flex를 사용하여 적절하게 배치합니다.
- 계산기 컨테이너의 내부 여백을 적절하게 설정합니다.

  <br>

#### STEP 2. 계산기 상단에 버튼 추가하기 (도전미션)

요구사항

1. 계산기 상단에 버튼을 3개 추가하세요.

- 맥북 계산기의 디자인 모티브로 하지만, 기능은 동작하지 않아도 됩니다.
- 버튼은 원 형태이고, 각 버튼이 일정한 간격을 갖도록 구현해야 합니다.

      <br>

  </details>

<details>
<summary>DAY2 미션지</summary>

#### STEP 1. HTML로 목업 만들기, flexbox로 정렬 및 배치하기

요구사항

1. CSS의 flexbox 속성을 이용해 계산기 레이아웃을 구성하세요.
2. 계산기의 기본 구성 요소를 추가하세요 (디스플레이, 숫자 버튼, 연산자 버튼 등).

<br>

구현 단계

1. `index.html`

- buttons 내부에 계산기에 필요한 버튼을 추가합니다.

  - 모든 버튼은 `button` class를 가지고 있어야 합니다.
  - 숫자 버튼에는 `number` class를 추가합니다.
  - 연산기호 버튼(`+`, `-`, `*`, `/`)에는 `operator` class를 추가합니다.
  - 기능 버튼(`C`, `±`, `%`)에는 `function` class를 추가합니다.
  - 숫자 0은 다른 버튼에 비해 두 배의 영역을 가지고 있으므로, `zero` class를 추가합니다.

2. `style.css`

- display 영역을 스타일링합니다.

  - 텍스트를 오른쪽으로 정렬합니다.
  - 콘텐츠와 테두리 사이에 padding을 지정합니다.

- buttons 영역과 버튼들을 flexbox를 사용하여 정렬합니다.

<br>

#### STEP 2. 버튼에 hover 및 active 효과 추가하기

요구사항

- 버튼에 마우스를 올리면(`hover`) 배경색이 변경되도록 하세요.
- 버튼을 클릭하면(`active`) 배경색이 잠시 변경되도록 하세요.

<br>
</details>

<details>
<summary>DAY3 미션지</summary>

### STEP 1. 버튼 클릭 시 디스플레이에 표시되도록 만들기

### 1-1. 각 버튼을 클릭했을 때 console에 각 버튼의 value가 나오도록 하기

요구사항

1. 각 버튼을 클릭했을 때 해당 버튼의 값을 콘솔에 출력하세요.

<br>

구현 단계

1. `script.js`

- 모든 버튼 요소를 선택합니다.
- 각 버튼에 클릭 이벤트 리스너를 추가합니다.
  - 참고: [MDN: 배열 메서드 forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- 버튼이 클릭되었을 때, 해당 버튼의 값을 콘솔에 출력합니다.
  - 참고: [MDN: Event.target](https://developer.mozilla.org/ko/docs/Web/API/Event/target)

<br>

### 1-2. 숫자를 디스플레이에 표시하기

요구 사항

- 숫자 버튼을 클릭하면 디스플레이에 해당 숫자가 표시되도록 하세요.
- 초기 디스플레이 값이 `0`일 때는 클릭한 숫자로 바뀌어야 합니다.
- 초기 값이 `0`이 아닐 때는 클릭한 숫자가 뒤에 추가되어야 합니다.
- 클래스가 `number`인 버튼에 대해서만 처리하세요.

<br>

구현 단계

1. `script.js`

- 모든 버튼 요소와 디스플레이 요소를 선택합니다.
- 각 버튼에 클릭 이벤트 리스너를 추가합니다.
- 버튼이 클릭되었을 때, 클래스가 `number`인 경우 디스플레이에 값을 표시합니다.
- 디스플레이가 `0`일 때는 클릭한 숫자로 바뀌어야 합니다.
- 디스플레이가 `0`이 아닐 때는 클릭한 숫자가 뒤에 추가되어야 합니다.

<br>

### STEP 2. 소수점과 Clear 기능 추가하기

요구 사항

- 소수점(`.`) 버튼을 클릭하면 디스플레이에 소수점을 추가하세요. (이미 소수점이 있는 경우 추가되지 않도록)
- `C` 버튼을 클릭하면 디스플레이를 `0`으로 초기화하세요.

<br>

### 추가 참고 자료

- [MDN: JavaScript 이벤트](https://developer.mozilla.org/ko/docs/Web/API/Event)
- [MDN: Element.classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)

</details>

<br>

## 📁 Folder Structure

```plaintext
calculator/
├── index.html
├── src/
│   ├── style.css
│   └── script.js
├── README.md
├── .gitignore
└── package.json
```

<br>

## 📍 Class Naming Convention

> 이 프로젝트는 BEM(Block Element Modifier) 방식을 기반으로 클래스명을 작성하되, 일부 유틸리티 클래스는 예외로 처리합니다.

### 필수 클래스

```plaintext
button     // 모든 버튼 공통
number     // 숫자 버튼 (0~9)
operator   // 연산자 버튼 (+ - * /)
function   // 기능 버튼 (C, ±, % 등)
zero       // 0번 버튼 (2칸 영역)
```

- `DAY 2`에서 명시된 필수 클래스명 입니다. 아래 클래스는 반드시 포함되어야 합니다.

<br>

### 개인 네이밍 기준 (BEM 기반)

```plaintext
.calc__display     /* calculator의 display 영역 */
.calc__keypad      /* calculator의 button 영역 */
```

- `calculator`는 축약하여 `calc`로 사용합니다.

<br>

⚠️ 예외: 유틸리티 클래스

```plaintext
.p-40
.btn-xs
```

- 재사용 목적의 디자인 도우미 클래스는 BEM 규칙을 따르지 않습니다.
- 구조보다 스타일 목적이 우선되는 클래스이며, 자유롭게 사용 가능합니다.

<br>

⚠️ 예외: `.calc-container`는 독립 스타일링을 위한 Wrapper

```plaintext
.calc-container
```

- `.calc-container`는 전체 레이아웃을 구성하기 위한 wrapper로 사용되며, BEM의 Block으로 취급하지 않습니다.
- 따라서 내부 요소들을 .calc-container\_\_display처럼 연결하지 않고, .calc\_\_display, .calc\_\_keypad등으로 구성합니다.

<br>

## 📦 Assets

- Icons from [Lucide Icons](https://lucide.dev/)
