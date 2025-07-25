# Calculator

- HTML, CSS, and JavaScript
- 기간: 2025-07-25 ~ 2025-07-30

<br>

## Folder Structure

```bash
calculator/
├── index.html
├── src/
│ └── style.css
├── README.md
├── .gitignore
└── package.json
```

<br>

## Class Naming Convention

### 기본 원칙

- 이 프로젝트는 BEM(Block Element Modifier) 네이밍 규칙을 따릅니다.
- calculator는 축약하여 `calc`로 사용합니다.

```plaintext
.calc__display     /* calculator의 display 영역 */
.calc__keypad      /* calculator의 keypad 영역 */

```

<br>

### 버튼

- `button` 요소는 클래스명에서 `btn`으로 축약하여 사용합니다.

```plaintext
.calc__window-btns
.btn-xs
```

- 상태나 역할을 구분할 경우 Modifier를 추가합니다.

```plaintext
.calc__window-btns        /* 윈도우 컨트롤 버튼 그룹 */
.calc__window-btn--close  /* 빨간색 닫기 버튼 */
```

<br>

### 예외: 유틸리티 클래스는 BEM 대상 아님

```plaintext
.p-40
.btn-xs
```

- 재사용 목적의 디자인 도우미 클래스는 BEM 규칙을 따르지 않습니다.
- 구조보다 스타일 목적이 우선되는 클래스이며, 자유롭게 사용 가능합니다.

<br>

### 예외: `.calc-container`는 독립 스타일링을 위한 Wrapper

```plaintext
.calc-container
```

- `.calc-container`는 전체 레이아웃을 구성하기 위한 wrapper로 사용되며, BEM의 Block으로 취급하지 않습니다.
- 따라서 내부 요소들을 .calc-container\_\_display처럼 연결하지 않고, `.calc\_\_display`, `.calc\_\_keypad`등으로 구성합니다.

<br>

## 🗂️ JavaScript 최종과제 가이드

<details>
<summary>📌 DAY1 미션지 </summary>

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

</details>
