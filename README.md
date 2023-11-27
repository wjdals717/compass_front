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
  - [학생 마이페이지](#학생-마이페이지)
  - [학원 관리자 마이페이지](#학원-관리자-마이페이지)
  - [웹 관리자 마이페이지](#웹-관리자-마이페이지)
   
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
- 등록 페이지
    - 학원 등록 DB저장(firebase 이용)
    - firebase 업로드시 interrupt 해결: 프로그레스바 추가 및 다음 업로드 차단
- 상세 페이지
    - 각 DB에서 데이터 불러오기(학원DB, 학원정보DB, 편의사항 DB, 수강연령DB, 수업정보DB)
    - 후기 별점 기능(학원 후기 목록 불러오기, 후기 작성, 후기 수정, 후기 삭제)
    - 학원 관리자는 본인 학원에 리뷰 작성 차단 
- 학생 마이페이지(작성한 후기)
    - 후기 별점 기능(본인이 작성한 후기 목록 불러오기, 후기 작성, 후기 수정, 후기 삭제)

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

<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">

### 형상 관리
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">

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


### **학생 마이페이지**

<details>
<summary>관심 학원</summary>
</details>
  
<details>
<summary>개인 정보 수정</summary>
</details>
  
<details>
<summary>학원 신청 목록</summary>
</details>
  
<details>
<summary>나의 문의</summary>
</details>
  
<details>
<summary>작성한 후기</summary>
</details>

<br/>


### **학원 관리자 마이페이지**
<details>
<summary>나의 학원</summary>
내부 내용
</details>
 
<details>
<summary>광고 결제</summary>
</details>
  
<details>
<summary>나의 학원 문의</summary>
</details>

<br/>


### **웹 관리자 마이페이지**
<details>
<summary>학원 등록 대기목록</summary>
</details>



<br/>

## **✏ 느낀점**
> **팀장: 변정민** 
- 

<br/>

> **팀원: 정가영** 
-  프로젝트를 통해 협업과 소통의 중요성을 깨달았습니다. 매일 아침 회의록 작성과 코드 리뷰를 통해 팀 전체가 프로젝트 진행 상황을 파악했습니다. 이로써 코드의 이해도가 높아지고 재사용이 쉬워졌습니다. 할 일의 우선 순위 설정을 통해 프로젝트의 완성도를 높였습니다.
 보안 부분을 맡아 jwt 토큰과 Security에 대한 이해를 높였고, OAuth2를 활용한 소셜 로그인을 구현했습니다. 관리자 마이페이지에서는 학원 승인 기능을 도입하여 학원 정보를 효과적으로 관리할 수 있었습니다. 학원 상세 정보 수정에서는 여러 테이블에서 데이터를 가져오고 업데이트하는 과정에서 어려움을 겪었지만, 이를 통해 많은 것을 배울 수 있었습니다.
 전체적인 디자인 수정을 담당하며 사용자가 한 눈에 기능을 파악하고 편리하게 사용할 수 있을 지 고민하는 과정을 통해 디자인 원칙 및 사용성에 대한 이해가 깊어지게 되었습니다. 

<br/>

> **팀원: 김채원** 
-

<br/>

> **팀원: 이지우** 
-  프로젝트가 시작하기에 앞서서 많으면 많고 적다면 적은 프로그래밍을 배웠다고 생각했습니다. 저의 지식으로 프로젝트를 할 수 있을까? 팀원들에게 피해를 주지는 않을까 걱정하면서 시작하였습니다. 처음에는 뭐가 무엇인지 잘 모르는 상태로 시작해서 당황도 하고 하였지만 팀장님과 팀원분들의 도움으로 점점 어떻게 해야 하는지 감이 잡혀 왔습니다. 그러면서 배웠던 것은 더욱 자세히 알게 되었고 모르는 것을 하면서 새로운 것들을 터득하게 되었습니다. 그 결과로 만들어진 프로젝트는 팀 전체의 노력 결정체로 다가왔습니다. 하지만 이러한 성취와 만족감과 더불어 피로감도 느꼈습니다. 프로젝트 기간의 집중과 노력으로 인해 몸과 마음이 지쳤기 때문입니다. 향후 다른 프로젝트를 하게 되면 몸과 마음을 잘 단련하고 해야겠다는 생각이 들었습니다. 또 한 프로젝트를 돌아보면서 부족한 부분을 발견했습니다. 완벽한 결과물을 만들 수 없다는 것을 깨닫게 되었고, 그것을 향한 개선의 기회로 여겼습니다. 미흡한 점을 보완하고 발전하는 과정이 지속적인 학습과 성장을 가져다줄 것이라 생각했습니다!! 팀장님 팀원분들 최고!!


<br/>

