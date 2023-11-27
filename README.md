## **📜 목차**

🏆 [프로젝트 소개](#-프로젝트-소개)

👨‍💻 [참여자](#-참여자)

🛠 [개발 도구](#-개발-도구)

⏰ [프로젝트 일정](#-프로젝트-일정)

🔗 [API명세서와 ERD설계도](#-api명세서와-erd설계도)
  
📝 [메뉴구조도](#-메뉴-구조도)
  
🖥 [화면 구현 및 코드 리뷰](#-화면-구현-및-코드-리뷰)
  - [회원가입 및 로그인](#회원가입-및-로그인)
  - [홈 / 학원찾기](#홈--학원찾기)
  - [학원 등록](#학원-등록)
  - [학원 상세페이지](#학원-상세페이지)
  - [마이페이지](#마이페이지)
    - [학생](#학생)
    - [학원관리자](#학원관리자)
    - [웹마스터](#웹마스터)

✏ [느낀점](#-느낀점)

<br/>

## **🏆 프로젝트 소개**

- 프로젝트 제목
  - 학습 나침반 : 학원 정보 제공 웹 사이트

- 프로젝트 목적
  - 학원을 알아보는 사람들이 지역, 과목, 수준 등 다양한 요건을 기반으로 학원을 검색하여 정보를 찾을 수 있도록 하는 플랫폼을 제공

- 제작 기간
  - 2023.10.25 ~ 2023.11.29

- 주요 기능
  - 회원가입 및 로그인
  - 다양한 검색 옵션 제공
  - 학원 상세 정보 제공
  - 관심학원 등록
  - 학원 등록 및 정보수정 기능
  - 광고 기능
  - 리뷰 작성, 수정, 삭제
  - 문의 작성 및 답변

<br/>

## **👨‍💻 참여자**

<br/>

> **팀장: 변정민** 
- 주요 일정 조율 및 팀원 관리
- ERD 작성 및 DB 설계
- 등록 페이지 : 학원 등록 저장(firebase 이용)
- 상세 페이지 : 각 DB에서 데이터 불러오기
- 상세/마이페이지 : 후기 별점 기능

<br/>

> **팀원: 정가영**
- 라우트 설정
- OAuth2로그인, 회원가입 기능
- 개인 정보 수정
- 이메일 인증
- 관리자 마이페이지: 학원 승인 기능
- 학원 관리자 마이페이지 
    - 학원 신청 목록(승인 대기, 승인 거절 학원 확인), 
    - 나의 학원(학원 상세 정보 수정)
- 전체 Security 보안, Jwt 토큰
<br/>

> **팀원: 김채원** 
- ERD 작성 및 DB 설계
- 홈: 필터링 매개변수 전달
- 학원 찾기 페이지
    - 학원 필터링(지역, 분야, 이름, 편의시설, 수강연령)
    - 필터링 모달(지역, 카테고리)
- 문의 구현
    - 학생: 문의 작성 및 답변 확인
    - 학원 관리자: 문의 작성 및 답변 확인/문의 답변

<br/>

> **팀원: 이지우**
- 라우트 설정
- 카카오페이 결재 기능
- 학생, 학원관리자 좋아요 기능CRUD
- roleId 값의 따라 mypage 바꾸기
- 유효한 광고 목록
- 리다이렉션
- 후기 작성 권한 관리

<br/>

## **🛠 개발 도구**

### FrontEnd

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 

### BackEnd

<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 

### 형상 관리
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

<br/>

## **⏰ 프로젝트 일정**
![프로젝트_일정](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137966126/ec7e9d78-4394-4041-8e00-5279012a3ff0)
<br/>

## **🔗 API명세서와 ERD설계도**

### API명세서
https://www.notion.so/bc3babdfb67544f3a07ad13bd6ce9a2a?v=30e68966d92344eca0545ce9f63ecf2b
### ERD설계도
![compass_ERD](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137966126/21049342-b7a5-442f-bb81-29f020218ae5)
<br/>

## **📝 메뉴 구조도**
![메뉴구조도 drawio](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137966126/0cf6550d-9b1d-4dfc-bf4a-00d20212c1cc)
<br/>

## **🖥 화면 구현 및 코드 리뷰**


### **회원가입 및 로그인**
<details>
<summary>로그인 유효성 검사 및 예외 처리 영상 그 외 토큰 부여 및 권한 코드 리뷰</summary>
<div markdown="1">
  회원가입 및 로그인
</div>
</details>

<br/>

### **홈 / 학원찾기**
<details>
<summary>찾기 코드 리뷰</summary>
<div markdown="1">
  홈

  
  학원찾기
</div>
</details>

<br/>

### **학원 등록**
<details>
<summary>학원 등록 코드 리뷰</summary>
<div markdown="1">
  학원 등록
</div>
</details>

<br/>

### **학원 상세페이지**
<details>
<summary>학원 상세페이지 코드 리뷰</summary>
<div markdown="1">
  학원 상세페이지
</div>
</details>

<br/>

### **마이페이지**


#### **학생**
<details>
<summary>학생 마이페이지 페이지 코드 리뷰</summary>
<div markdown="1">
  학생 마이페이지
</div>
</details>


#### **학원관리자**
<details>
<summary>학원관리자 마이페이지 페이지 코드 리뷰</summary>
<div markdown="1">
  학원관리자 마이페이지
</div>
</details>


#### **웹마스터**
<details>
<summary>웹마스터 마이페이지 페이지 코드 리뷰</summary>
<div markdown="1">
  웹마스터 마이페이지
</div>
</details>

<br/>

## **✏ 느낀점**
> **팀장: 변정민** 
- 

<br/>

> **팀원: 정가영** 
- 

<br/>

> **팀원: 김채원** 
-

<br/>

> **팀원: 이지우** 
-

<br/>

