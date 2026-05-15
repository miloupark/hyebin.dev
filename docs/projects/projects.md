---
outline: [1, 2, 3]
---

# Projects

## 🏠 모음.zip
> 관심사로 모이고, 스페이스에서 이어가는 커뮤니티 플랫폼 모음.zip

- 2026.03 - 2026.04
- Team: FE 6명
- Role: Frontend Developer
- GitHub: https://github.com/sprint-13/moum-zip
- Deploy: https://moum-zip-web.vercel.app/
- Tech Stack: Next.js, TypeScript, Tailwind CSS, ShadCN, Vercel, Amplitude


### Overview

moum.zip은 사용자가 다양한 모임을 탐색하고, 직접 모임을 개설하거나 참여할 수 있는 모임 플랫폼입니다.  
랜딩 페이지와 모임 만들기 페이지를 담당했으며, 공통 Dropdown 컴포넌트 구현, Amplitude 도입, 이미지 포맷 최적화, 폰트 로딩 방식 개선을 통해 UI 완성도와 사용자 경험, 성능 개선에 기여했습니다.

### Contributions

- 랜딩 페이지 UI 구현
- 모임 만들기 페이지 UI 및 입력 흐름 구현
- Dropdown 공통 컴포넌트 구현
- Amplitude 도입을 통한 사용자 행동 데이터 수집 기반 마련
- 이미지 포맷 최적화를 통한 리소스 로딩 개선
- 폰트 로딩 방식 개선을 통한 초기 화면 렌더링 성능 개선

### Key Points

- Tailwind CSS 기반 반응형 UI 구현
- 재사용 가능한 Dropdown 공통 컴포넌트 설계
- 모임 생성 플로우에서 사용자가 자연스럽게 입력을 완료할 수 있도록 화면 흐름 구성
- 이미지와 폰트 리소스를 최적화해 초기 로딩 경험 개선
- Amplitude 이벤트 트래킹을 적용해 사용자 행동 분석 기반 마련

### Problem Solving

#### 공통 Dropdown 컴포넌트 구현

여러 페이지에서 반복적으로 사용되는 선택 UI를 개별적으로 구현하지 않고, 재사용 가능한 Dropdown 컴포넌트로 분리했습니다.  
옵션 목록, 선택 상태, 비활성화 상태 등을 공통 구조로 관리할 수 있도록 구성해 UI 일관성과 유지보수성을 높였습니다.

#### 이미지 포맷 및 폰트 로딩 최적화

랜딩 페이지는 첫인상이 중요한 화면이기 때문에 초기 렌더링 속도와 시각적 안정성이 중요했습니다.  
이미지 리소스와 폰트 로딩 방식을 점검하고 개선해 사용자가 더 빠르게 콘텐츠를 확인할 수 있도록 최적화했습니다.

#### Amplitude 도입

서비스 개선을 위해 사용자의 행동 흐름을 확인할 수 있는 분석 도구가 필요했습니다.  
Amplitude를 도입해 주요 클릭, 페이지 진입, 전환 흐름을 추적할 수 있는 기반을 마련했고, 이후 데이터 기반으로 UX를 개선할 수 있는 환경을 구성했습니다.

## 📚 StudyHub - Externship Project

> 온라인 강의와 스터디 문화를 결합한 IT 학습 플랫폼

- 2025.11.21 - 2025.12.26
- Team: FE 2명
- Role: Frontend Developer
- GitHub: https://github.com/OZ-Coding-School/oz_externship_fe_04_team2
- Deploy: https://oz-externship-fe-04-team2.vercel.app/

### Overview

StudyHub는 온라인 강의와 스터디 문화를 결합한 IT 학습 플랫폼입니다.  
스터디 그룹 조회, 기록, 일정 관리, 실시간 채팅 기능을 중심으로 개발에 참여했습니다.

### Contributions

- 스터디 그룹 상세 페이지 개발
  - 스케줄 CRUD 기능 구현
  - 학습 기록 CRUD 기능 구현
- WebSocket 기반 실시간 채팅 기능 구현
- [Calendar / DatePicker 라이브러리 리서치 및 발표](https://www.binyard.me/frontend/OZ/llog/engineering-day.html)

### Problem Solving

- [스케줄 모달 클릭 후 스크롤 없어지고, 버튼 selected color 변경되는 이슈 해결](https://github.com/OZ-Coding-School/oz_externship_fe_04_team2/pull/288)
- [멀티 도메인 환경에서 인증 상태 불일치 문제 해결](https://github.com/OZ-Coding-School/oz_externship_fe_04_team2/pull/297)
- [localStorage에 토큰 있을 때 loginState 동기화](https://github.com/OZ-Coding-School/oz_externship_fe_04_team2/pull/299)

## 💊 이건뭐약 - Main Project

> 오픈 API를 활용한 의약품 이미지 검색 서비스

- Period: 2025.10.24 - 2025.11.20
- Team: FE 3명 / BE 4명
- Role: Frontend Developer / Sub Leader
- GitHub: https://github.com/oz-main-13-team5/frontend
- Deploy: https://frontend-mu-ruby.vercel.app/
- Figma: [디자인](https://www.figma.com/design/y1mrdq5f3bYzMjdKwTn2ZE/Main-Project_%EC%9D%B4%EA%B1%B4%EB%AD%90%EC%95%BD_5%ED%8C%80?node-id=5-92&t=s0OMvyCsq1tx7e2G-1)

### Overview

사용자가 알약 사진, 이름, 효능으로 의약품 정보를 조회하고, 계정 기반으로 북마크와 마이페이지를 이용할 수 있는 웹 서비스입니다.  
회원가입, 로그인, 인증 흐름, 마이페이지, 공용 컴포넌트, 반응형 UI, 성능 최적화, UXUI 디자인 작업을 담당했습니다.

### Contributions

- JWT 기반 로그인 / 회원가입 기능 구현
- Access Token / Refresh Token 인증 흐름 구현
  - [`HTTP → 쿠키 → 브라우저 저장소 → JWT → CORS` 흐름 학습 및 문서화](https://www.binyard.me/frontend/http-auth/04.jwt-token.html)
- 이메일 인증 코드 전송 및 검증 로직 구현
- Axios 인스턴스 및 인터셉터 설계
- 토큰 자동 첨부, 만료 대응, 공통 에러 핸들링 구조화
- 마이페이지 (회원 탈퇴, 북마크 리스트, 이미지 검색 히스토리) 구현
- Input, Button, Modal, Tab, Header 등 공용 컴포넌트 및 반응형 UI 구현
- 코드 스플리팅 및 폰트 최적화를 통한 성능 개선

### Problem Solving

- [TypeScript 유틸리티 타입(Omit) 적용 과정에서의 문제 해결](https://github.com/oz-main-13-team5/frontend/pull/184)
- [Pretendard Variable Dynamic Subset 도입으로 폰트 최적화](https://github.com/oz-main-13-team5/frontend/pull/154)
- [라우트 페이지 단위 lazy + suspense 기반 코드 스플리팅](https://github.com/oz-main-13-team5/frontend/pull/153)


## 🎞️ FilmArchive

> 감상한 영화를 기록하고 다시 확인할 수 있는 영화 아카이빙 서비스

- 2025.09.03 - 2025.09.09
- Type: React Mini Project
- Team: 개인 프로젝트
- GitHub: https://github.com/miloupark/oz_react_mini_13
- Deploy: https://oz-react-mini-13-eight.vercel.app/
- Tech Stack: React, Vite, React Router DOM, TailwindCSS, shadcn/ui, React Bits, Supabase, TMDB API

### Overview

React, Vite 기반으로 구현한 영화 웹 애플리케이션입니다. TMDB API를 활용해 영화 목록과 상세 페이지를 구성하고, Supabase 기반 회원가입·로그인 및 마이페이지 기능을 구현했습니다. TailwindCSS, shadcn/ui, React Bits를 활용해 반응형 UI와 인터랙션 요소를 적용하며 사용자 경험을 고려한 화면 구현을 시도했습니다.


### Key Points

- React 기반 컴포넌트 구조 및 상태 흐름 학습
- TMDB API 기반 영화 목록 / 상세 페이지 구현
- React Bits를 활용한 인터랙션 컴포넌트 적용
- 무한 스크롤 구현
- Supabase 기반 회원가입 / 로그인 구현

## 📝 UQUIZ?

> React 기초와 상태 관리를 복습하기 위해 진행한 퀴즈 생성 및 결과 확인 서비스입니다. Zustand 상태 관리, React Router 구조, localStorage 동작 원리, 렌더링 성능 이슈를 학습하고 정리했습니다.

- 2025.09.24 - 2025.10.20 (주 1회 작업)
- Team: 개인 프로젝트
- GitHub: https://github.com/miloupark/uquiz
- Deploy: https://uquiz-ashy.vercel.app/

### Key Features

- 퀴즈 생성 및 결과 확인 기능 구현
- Zustand 기반 결과 랭킹 데이터 관리
- React Router 기반 페이지 이동 구조 설계
- 코치 코드 리뷰를 기반으로 UI 및 코드 구조 개선

### Problem Solving

- [브라우저 Rendering 성능 이슈: Reflow vs Repaint 리서치](https://github.com/miloupark/uquiz/issues/2)
- [Zustand 결과 랭킹 데이터에 고유 id 추가 — React key warning 해결](https://github.com/miloupark/uquiz/issues/8)
- [React Router: Link 태그를 버튼처럼 사용하는 이유](https://github.com/miloupark/uquiz/issues/3)