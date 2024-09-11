# mbti-test

리액트 심화과정 개인과제

## 배포링크

- 배포링크 : 추후 추가 예정
- Test ID: useruser
- Test PW : 1234

## 프로젝트 목적

- 이번 프로젝트의 주요 목적은 회원가입 및 로그인, 프로필 관리, 테스트 결과 저장, JWT인증과 REST API 통신 등 실무에서 자주 사용되는 기능들을 구현하는 것입니다.
- 인증 및 권한 관리를 통해 사용자의 데이터를 안전하게 보호하는 방법
- Axios와 Tanstack Query(React Query)를 활용하여 비동기 데이터를 효율적으로 관리
- json-server를 사용해 로컬 환경에서 API 서버를 구축

## 프로젝트 구조

<details>
<summary>프로젝트 구조 접기/펼치기</summary>
<div markdown="1">

```
mbti-project
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ Shared
│  │  └─ Router.jsx
│  ├─ api
│  │  ├─ auth.js
│  │  └─ testResults.js
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ AuthForm.jsx
│  │  ├─ Layout.jsx
│  │  ├─ ProtectedRoute.jsx
│  │  ├─ TestForm.jsx
│  │  ├─ TestResultItem.jsx
│  │  └─ TestResultList.jsx
│  ├─ data
│  │  └─ questions.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ normalize.css
│  ├─ pages
│  │  ├─ Home.jsx
│  │  ├─ Login.jsx
│  │  ├─ Profile.jsx
│  │  ├─ Result.jsx
│  │  ├─ Signup.jsx
│  │  └─ Test.jsx
│  ├─ utils
│  │  └─ mbtiCalculator.jsx
│  └─ zustand
│     └─ useUserStore.js
├─ tailwind.config.js
├─ vite.config.js
└─ yarn.lock

```

</div>
</details>

## 필수 기능 구현

- [x] 회원가입 / 로그인 / 프로필 관리 기능 구현
      JWT 인증 서버를 사용하여 회원가입, 로그인, 프로필 수정을 구현합니다.
      프로필 이미지는 사용하지 않으며, 회원가입 시 아이디와 비밀번호만 입력받습니다.
      인증이 되지 않은 사용자는 서비스를 이용할 수 없도록 설정합니다.

- [x] MBTI 테스트 제공
      로그인한 사용자가 MBTI 테스트를 진행할 수 있도록 합니다.
      총 20개의 문항으로 구성된 테스트를 question.js 파일에 저장하여 관리합니다.
      사용자는 문항에 대한 답변을 선택하여 테스트를 완료할 수 있습니다.

- [x] 테스트 결과 계산 및 저장
      사용자가 MBTI 테스트를 완료하면, 결과를 계산하여 json-server에 저장합니다.
      MBTI 결과는 E/I, S/N, T/F, J/P 네 가지 지표를 기반으로 계산됩니다.
      테스트 결과는 기본적으로 공개(true)로 설정됩니다.

- [x] 테스트 결과 관리 기능
      사용자는 자신의 테스트 결과를 삭제할 수 있습니다.
      또한, 테스트 결과의 공개 여부를 변경할 수 있는 기능을 추가하여, 다른 사용자가 자신의 테스트 결과를 볼 수 없도록 설정할 수 있습니다.
      모든 사용자가 다른 사용자의 공개된 테스트 결과를 볼 수 있는 페이지를 구현합니다.

## 도전 기능 구현

- [x] 로그인 유지 기능 구현
- [x] Props Drilling 개선
- [ ] Tanstck Query 사용
- [x] axios를 이용한 API 호출

## 사용 기술

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/reactrouter-#CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
