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
    - 후기 별점 기능(학원 후기 목록 불러오기, 후기 작성, 수정, 삭제)
    - 학원 관리자는 본인 학원에 리뷰 작성 차단 
- 학생 마이페이지(작성한 후기)
    - 후기 별점 기능(본인이 작성한 후기 목록 불러오기, 후기 수정, 삭제)
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
- 카카오페이 결제 기능
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

## **OAuth2 로그인**
  
### **Front End**
  
**html 코드**

```html
    <div css={S.SLoginBox}>
        <img src={MainLogo} alt="" css={S.SMainLogo}/>
        <div css={S.SkakaoLoginBtn}><img css={S.SKakaoBtn} src={kakaologin} onClick= {handleKaKaoLogin} /></div>
        <div css={S.SNaverLoginBtn}><img css={S.SNaverBtn} src={naverlogin} onClick= {handleNaverLogin} /></div>
    </div>
```

</br>

- 네이버, 카카오 아이콘을 클릭시 해당 계정으로 로그인


</br>

**로그인**

```javascript
    const handleKaKaoLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
    }

    const handleNaverLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver";
    }
```
- window.location.href를 통해 브라우저의 현재 위치를 해당 주소로 변경, 이 URL은 각각 카카오, 네이버 로그인을 처리하는 서버 엔드포인트로 이동


<br/>

---

### **Back End**

**application.yml**

```html
spring:
  profiles.include:
    - secret
  security:
    oauth2:
      client:
        registration:
          kakao:
            clientId: 2dc5c2ec61e5efeb6b952c1b5d381821
            redirectUri: http://localhost:8080/login/oauth2/code/kakao
            authorizationGrantType: authorization_code
            clientAuthenticationMethod: POST
            clientName: Kakao
          naver:
            clientId: i4eW_RUc74M3Ci96bJuG
            redirectUri: http://localhost:8080/login/oauth2/code/naver
            authorizationGrantType: authorization_code
            clientAuthenticationMethod: POST
            clientName: Naver
        provider:
          kakao:
            authorizationUri: https://kauth.kakao.com/oauth/authorize
            tokenUri: https://kauth.kakao.com/oauth/token
            userInfoUri: https://kapi.kakao.com/v2/user/me
            userNameAttribute: id
          naver:
            authorizationUri: https://nid.naver.com/oauth2.0/authorize
            tokenUri: https://nid.naver.com/oauth2.0/token
            userInfoUri: https://openapi.naver.com/v1/nid/me
            userNameAttribute: response
```

- 카카오, 네이버에 대한 OAuth 2.0 클라이언트 정보를 정의

<br/>

**application-secret.yml**
```html
  security:
    oauth2:
      client:
        registration:
          naver:
            clientSecret:
```

- clientSecret 키는 유출시 보안상의 위험이 있기 때문에 application-secret에 따로 숨김

<br/>


**SecurityConfig(웹 보안 설정)**


```java
@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final OAuth2SuccessHandler oAuth2SuccessHandler;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final PrincipalEntryPoint principalEntryPoint;
    private final PrincipalUserDetailsService principalUserDetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();            // WebMvcConfig의 CORS 설정을 적용
        http.csrf().disable();  // CSRF 보호 비활성화
        http.authorizeRequests()
                .antMatchers("/api/auth/**", "/api/option/**",
                        "/api/academies", "/api/academy/**",
                        "/api/review/**", "/api/purchase/**", "/api/academy/check/**",
                        "/api/ad/academies/random")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling()
                .authenticationEntryPoint(principalEntryPoint)
                .and()
                .oauth2Login()
                .successHandler(oAuth2SuccessHandler)
                .userInfoEndpoint()
                .userService(principalUserDetailsService);
    }
}
```

- OAuth 2.0을 이용한 소셜 로그인 및 JWT(JSON Web Token) 기반의 인증에 관련된 보안 설정
- JwtAuthenticationFilter : jwt 인증 관련 필터
- OAuth2SuccessHandler에서 OAuth2Login이 성공했을 때의 로직을 처리(마지막에 실행됨)
- PrincipalUserDetailsService : 사용자 정보를 로드하여 OAuth2User를 return 하는 클래스

<br/>

**PrincipalUserDetailsService**

``` java
@Service
public class PrincipalUserDetailsService implements OAuth2UserService {

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService = new DefaultOAuth2UserService();    // 사용자 정보 로드하기 위한 서비스 생성
        OAuth2User oAuth2User = oAuth2UserService.loadUser(userRequest);    // 사용자 정보 로드

        Map<String, Object> attributes = oAuth2User.getAttributes();    // 사용자 정보에서 속성 얻어옴.

        String provider = userRequest.getClientRegistration().getClientName();  // Naver, Kakao 등 provider 이름
        Map<String, Object> response = null;
        switch (provider) {
            case "Naver":
                response = (Map<String, Object>) attributes.get("response");    // 속성에서 response 부분 꺼냄(id, email, name 등의 실질적 사용자 데이터)
                break;
            case "Kakao":
                response = (Map<String, Object>) attributes.get("properties");
                response.put("id", attributes.get("id"));
                break;
        }
        response.put("provider", provider); // provider 속성을 추가해줌.
        return new DefaultOAuth2User(new ArrayList<>(), response, "id");
    }
}
```
- OAuth2 요청을 받아 사용자 정보를 로드해서 provider에 따른 구조대로 필요한 정보를 response Map에 담아준다.


<br/>

**OAuth2SuccessHandler**

``` java
@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {

    private final AuthMapper authMapper;
    private final JwtProvider jwtProvider;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        String oauth2Id = authentication.getName(); // PrincipalUserDetailsService의 loadUser에서 return 했던 DefaultOAuth2User의 key값
        User user = authMapper.findUserByOauth2Id(oauth2Id);

        if (user == null) { // 소셜 로그인 돼있는 유저가 없다면 -> 새로 회원가입
            DefaultOAuth2User defaultOAuth2User = (DefaultOAuth2User) authentication.getPrincipal();
            String provider = defaultOAuth2User.getAttributes().get("provider").toString();

            // 회원가입이 안 되었을 때 OAuth2 계정 회원가입 페이지로 이동
            response.sendRedirect("http://localhost:3000/auth/detail/signup" +
                    "?oauth2Id=" + oauth2Id +
                    "&provider=" + provider);
            return;
        }
        // 소셜 로그인 돼있는 유저가 있다면 -> 로그인
        PrincipalUser principalUser = new PrincipalUser(user);
        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(principalUser, null, principalUser.getAuthorities());
        String accessToken = jwtProvider.generateToken(authenticationToken);
        response.sendRedirect("http://localhost:3000/auth/oauth2/signin" +  // client로 token을 보낸다
                "?token=" + URLEncoder.encode(accessToken));
    }
}
```
- DB에서 요청을 보낸 유저의 oauth2Id가 있는지 확인
- 소셜 로그인 돼있는 유저가 없다면 회원가입 페이지로 redirect를 보낸다.
- 소셜 로그인 돼있는 유저가 있다면 토큰을 담아 클라이언트로 redirect를 보낸다.

<br/>

---

### **Front End**

**SigninOauth2**

``` javascript
function SigninOauth2(props) {  // /auth/oauth2/signin
    // 서버로부터 redirection해서 들어온 token을 localStorage에 저장하는 과정
    const [ searchParams, setSearchParams ] = useSearchParams();
    const queryClient = useQueryClient();

    localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
    queryClient.refetchQueries(["getPrincipal"]);

    return <Navigate to={"/"} />
}
```
- 백엔드에서 OAuth2Id 유저가 있을 시에 redirect 되는 경로 파일
- localStorage에 accessToken을 저장해둔다.

<br/>

---

<br/>

## **회원가입**

### **FrontEnd**


**html 코드**
``` html
<div css={S.SContainer}>
    <h1 css={S.STitle}>회원가입</h1>
    <h2 css={S.STitle2}>필요한 정보들을 기입해주세요.</h2>

    <div css={S.SInputBox}>
        <div css={S.SInuptCompartment}>
            <div><input type="email" name="email" placeholder='이메일' onChange={handleInputChange}/></div>
            <div><input type="text" name="name" placeholder='이름' onChange={handleInputChange}/></div>
            <div><input type="text" name="nickname" placeholder='닉네임' onChange={handleInputChange}/></div>
    <div><input type="text" name="phone" placeholder='전화번호' onChange={handleInputChange}/></div>
        </div>
   </div>

    <div css={S.SSigninBtnBox}>
        <div css={S.SSigninTitle}>
            <span>이미 계정이 있으신가요?</span>
        </div>
        <button css={S.SSigninBtn} onClick={handleSigninOnClick}>로그인</button>
    </div>
    <div css={S.SSignupBtnBox}>
        <button css={S.SSignupBtn} onClick={handleSignupSubmit}>가입하기</button>
    </div>
</div>
```
- 회원가입시 필요한 회원 정보를 더 기입


<br/>

**회원가입**

``` javascript
    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();

    const [ signupUser, setSignupUser ] = useState({
        email: "",
        oauth2Id: searchParams.get("oauth2Id"),
        name: "",
        nickname: "",
        phone: "",
        provider: searchParams.get("provider")
    });

    const handleSigninOnClick = () => {
        navigate("/auth/signin")
    }

    const handleInputChange = (e) => {
        setSignupUser({
            ...signupUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSignupSubmit = async () => {
        try {
            const response = await instance.post("/auth/signup", signupUser);
            alert("회원가입 완료");
            window.location.replace("/auth/signin");
        } catch (error) {
            console.error(error);
            if(Object.keys(error.response.data).includes("email")) {
                alert("이미 사용중인 이메일입니다. 다시 입력하세요.");
            } else if(Object.keys(error.response.data).includes("nickname")) {
                alert("이미 사용중인 닉네임입니다. 다시 입력하세요.");
            }
        }
    }
```
- 회원가입 버튼 클릭시 handleSignupSubmit 함수 실행, /auth/signup으로 post 요청

<br/>

---

### **Back End**

**AuthController**
``` java
    @ValidAop
    @PostMapping("/api/auth/signup")
    public ResponseEntity<?> signup(
            @Valid @RequestBody SignupReqDto signupReqDto,
            BindingResult bindingResult) {
        return ResponseEntity.ok(authService.signup(signupReqDto));
    }
```
- ValidAop로 유효성 검사

**AuthService**
``` java
    public boolean signup(SignupReqDto signupReqDto) {
        User user = signupReqDto.toUser();
        int errorCode = authMapper.checkDuplicate(user);
        if(errorCode > 0) {
            responseDuplicateError(errorCode);
        }
        return authMapper.saveUser(user) > 0;
    }

    public void responseDuplicateError(int errorCode) {
        Map<String, String> errorMap = new HashMap<>();
        switch (errorCode) {
            case 1:
                errorMap.put("email", "이미 사용중인 이메일입니다.");
                break;
            case 2:
                errorMap.put("nickname", "이미 사용중인 닉네임입니다.");
                break;
            case 3:
                errorMap.put("email", "이미 사용중인 이메일입니다.");
                errorMap.put("nickname", "이미 사용중인 닉네임입니다.");
                break;
        }
        throw new DuplicateException(errorMap);
    }
```
- responseDuplicateError로 닉네임, 이메일 중복 검사
- 에러 코드가 0이면 정상 회원가입

<br/>

**auth_mapper**
``` xml
<insert id="saveUser">
        insert into user_tb
        values(
            0,
            #{email},
            #{oauth2Id},
            #{name},
            #{nickname},
            #{phone},
            #{provider},
            0,
            1
        )
    </insert>
    <select id="checkDuplicate"
            parameterType="com.aws.compass.entity.User"
            resultType="java.lang.Integer">
        select
            (select
                if(count(*) > 0, 1, 0)
            from
                user_tb
            where
                email = #{email}
            )
            + (select
                if(count(*) > 0, 2, 0)
            from
                user_tb
            where
                nickname = #{nickname}
            ) as result
    </select>
```
- user_tb DB에 회원 정보 저장 (enabled: 0(이메일 미인증), role: 1(학생))
- email, nickname 중복 검사(0: 중복x, 1: 이메일 중복, 2: 닉네임 중복, 3: 둘 다 중복)


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

### FrontEnd

#### 학원 상세페이지  좋아요 버튼
  ```html
                      
           <div css={S.SSide}>
            <div css={S.SOptionBox}>
                {!getLikeState.isLoading &&
                    <button disabled={!principal?.data?.data}
                    css={S.SLikeButton}
                    onClick={handleLikeButtonClick}>
                        {getLikeState?.data?.data ? <AiFillHeart css={S.SLikeIcon(getLikeState?.data?.data)}/> :
                        <AiOutlineHeart css={S.SLikeIcon(getLikeState?.data?.data)}/>}
                        관심학원
                        <div>{likeCountOfInfo?.data?.data}</div>
                    </button>
                }
                <button css={S.SinquiryButton(isAcademyRegistered)} onClick={handleinquiryButton}>
                    <BsChatLeftTextFill css={S.SinquiryIcon}/>
                    문의
                </button>
            </div>
        </div>
```
      
-   buttton에 onClick를 넣어줌으로써 내가 취한 행동에 대한 값을 함수로 넘겨준다.
-   data의 조건에 따라 값이 달라진다.

#### 입력 받은 값 처리
``` javascript
const getLikeState = useQuery(["getLikeState"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/like/${academyId}/${userId}`, option)
        } catch(error) {
            console.error(error)
        }
    }, {
        refetchOnWindowFocus: false,
        retry: 0
    })

const likeCountOfInfo = useQuery(["getLikeCountOfInfo"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/info/like/count/${academyId}`, option)
        } catch(error) {
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    })

const handleLikeButtonClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            if(getLikeState?.data?.data) {
                await instance.delete(`/account/like/${academyId}/${userId}`, option);
            } else {
                await instance.post(`/account/like/${academyId}/${userId}`, {}, option);
            }
            getLikeState.refetch();
            likeCountOfInfo.refetch();
        } catch(error) {
            console.error(error)
        }
    }
```
- handleLikeButtonClick 관심 학원을 추가 또는 제거하는 역할
- likeCountOfInfo와 getLikeState : 각각 관심 학원의 좋아요 수와 현재 사용자의 해당 학원에 대한 관심 상태를 가져오는 역할
  
#### 마이페이지 관심학원 리스트 보기
   ```html
        <div>
            <h2>❤️ 나의 관심 학원</h2>
            <div>
                {likeCountOfMypage === 0 ? 
                <EmptyBox comment={"나의 관심 학원을 추가해 보세요!"} link={'/academy/find/1'} btn={"보러 가기"}/> : 
                <ul css={S.UlBox}>
                    {!getLikeAcademiesQuery.isLoading && Array.isArray(getLikeAcademiesQuery?.data?.data) && getLikeAcademiesQuery?.data?.data.map(academy => {
                        return <LiAcademyBox key={academy.ACADEMY_ID} academy={academy}/>
                    })}
                </ul>}
                <Pagination totalCount={likeCountOfMypage.data.data} link={'/account/mypage/like'} search={''}/>
            </div>
        </div>
```
-   getLikeAcademiesQuery 통해 List를 볼 수 있다.

#### 입력 받은 값

```javascript
const userId = principal?.userId

    const getLikeAcademiesQuery = useQuery(["getLikeAcademies", page], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/mypage/like/${userId}/${page}`, option);
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    });
```
-  principal에서 추출하여 userId 상수에 할당


### Backend

#### controller
```java

@RestController
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

  // 좋아요 상태
    @GetMapping("/api/account/like/{academyId}/{userId}")
    public ResponseEntity<?> getLikeState (@PathVariable int userId, @PathVariable int academyId) {
        return ResponseEntity.ok(accountService.getLikeState(userId, academyId));
    }

    // 좋아요 추가
    @PostMapping("/api/account/like/{academyId}/{userId}")
    public ResponseEntity<?> setLike(@PathVariable int userId, @PathVariable int academyId) {
        return ResponseEntity.ok(accountService.setLike(userId, academyId));
    }

    // 좋아요 삭제
    @DeleteMapping("/api/account/like/{academyId}/{userId}")
    public ResponseEntity<?> cancelLike(@PathVariable int userId, @PathVariable int academyId) {
        return ResponseEntity.ok(accountService.cancelLike(userId, academyId));
    }

    // 좋아요 COUNT
    @GetMapping("/api/account/mypage/like/count/{userId}")
    public ResponseEntity<?> getLikeCount(@PathVariable int userId) {
        return ResponseEntity.ok(accountService.getLikeCount(userId));
    }

    // 관심 학원
    @GetMapping("/api/account/mypage/like/{userId}/{page}")
    public ResponseEntity<?> getLikeAcademies(@PathVariable int userId, @PathVariable int page) {
        return ResponseEntity.ok(accountService.getLikeAcademy(userId, page));
    }

    // 관심학원 COUNT
    @GetMapping("/api/account/info/like/count/{academyId}")
    public ResponseEntity<?> getLikeCountOfInfo(@PathVariable int academyId) {
        return ResponseEntity.ok(accountService.getLikeInfoCount(academyId));
    }
}
```
- 좋아요의 CRUD에 대한 데이터 처리

#### DTO
```java
@Builder
@Data
public class AcademyLikeRespDto {
    private int likeId;
    private int userId;
    private int ACADEMYID;
}
```

#### Service
```java
@Service
@RequiredArgsConstructor
public class AccountService {
public boolean getLikeState(int userId, int academyId) {
        return accountMapper.getLikeState(userId, academyId) > 0;
    }

    public boolean setLike(int userId, int academyId) {
        return accountMapper.insertLike(userId, academyId) > 0;
    }

    public boolean cancelLike(int userId, int academyId) {
        return accountMapper.deleteLike(userId, academyId) > 0;
    }

    public int getLikeCount(int userId) {
        return accountMapper.getLikeCountByUserId(userId);
    }

    public List<Academy> getLikeAcademy(int userId, int page) {
        int index = (page - 1) * 5;

        return accountMapper.getLikeAcademies(userId, index);
    }

    public int getLikeInfoCount(int academyId) {
        return accountMapper.getLikeCountByAcademyId(academyId);
    }
}
```
- controller에서 보낸 like에 관한 것들을 받는다.

#### Repository
```java
@Mapper
public interface AccountMapper {
    public int getLikeState(int userId, int academyId);
    public int insertLike(int userId, int academyId);
    public int deleteLike(int userId, int academyId);

    public int getLikeCountByUserId(int userId);
    public List<Academy> getLikeAcademies(int userId, int index);

    public int getLikeCountByAcademyId(int academyId);
}
```
- 데이터베이스와 상호 작용하는 메서드를 정의

#### SQL
```java

    <select id="getLikeState"
            resultType="java.lang.Integer">
        select
            count(*)
        from
            like_tb
        where
            user_id = #{userId}
            and ACADEMY_ID = #{academyId}

    </select>

    <select id="getLikeCountByUserId"
            resultType="java.lang.Integer">
        select
            count(*)
        from
            like_tb
        where
            user_id = #{userId}
    </select>

    <select id="getLikeAcademies"
            resultMap="academyMap">
        SELECT
            at.ACADEMY_ID,
            at.ACA_NM,
            at.REALM_SC_NM,
            at.FA_RDNMA,
            ait.logo_img,
            IFNULL(clt.LIKE_COUNT, 0) AS LIKE_COUNT,
            IFNULL(AVG(rt.score), 0) AS AVG_SCORE
        FROM
            like_tb lt
            LEFT OUTER JOIN academy_tb at ON (at.ACADEMY_ID = lt.ACADEMY_ID)
            LEFT OUTER JOIN academy_info_tb ait ON (ait.ACADEMY_ID =       lt.ACADEMY_ID)
            LEFT OUTER JOIN review_tb rt ON (rt.ACADEMY_ID = lt.ACADEMY_ID)
            LEFT OUTER JOIN (
                SELECT ACADEMY_ID, COUNT(*) AS LIKE_COUNT
                FROM like_tb
                GROUP BY ACADEMY_ID
            ) clt ON clt.ACADEMY_ID = at.ACADEMY_ID
        where
            lt.user_id = #{userId}
        group by
            at.ACADEMY_ID
        order by
            lt.like_id desc
        limit #{index}, 9
    </select>

    <select id="getLikeCountByAcademyId"
            resultType="java.lang.Integer">
        select
            count(*)
        from
            like_tb
        where
            academy_id = #{academyId}
    </select>
    <insert id="insertLike">
        insert into like_tb
        values(0, #{userId}, #{academyId})
    </insert>

    <delete id="deleteLike">
        delete
        from
            like_tb
        where
            user_id = #{userId}
            and ACADEMY_ID = #{academyId}
    </delete>
```
-  좋아요의 CRUD 및 기능을 위한 쿼리문 작성

</details>
  
<details>
<summary>개인 정보 수정</summary>

<br/>

유저의 개인 정보를 수정하는 페이지, 이메일 인증 기능

---

### **Front End**

**html**

``` html
<h2>🛠️ 개인 정보 수정</h2>
<div>
    <div css={S.SButtonBox}>
        <div>
            내 정보
        </div>
        {isEdit? 
        <button onClick={handleEditSubmitOnClick}>확인</button> 
        : <button onClick={handleEditBtnOnClick}>변경하기</button>}
    </div>
    <table css={S.STable}>
        <tbody>
            <tr>
                <td>이메일</td>
                <td>
                    {isEdit ?
                        <input type="text"
                            name='email' 
                            value={newUser.email}
                            onChange={handleInputChange}/>
                        :principalState.data.data.email}
                    {principalState.data.data.enabled > 0 ?
                        <button disabled>
                            인증 완료
                        </button>
                        : (!isEdit ? 
                                <button onClick={handleSendMail}>
                                    인증 하기
                                </button>
                                : <button disabled>
                                    인증 하기
                                </button>)
                    }
                </td>
            </tr>
            <tr>
                <td>이름</td>
                <td>
                    {isEdit ?
                        <input type="text"
                            name='name' 
                            value={newUser.name}
                            onChange={handleInputChange}/>
                        :principalState.data.data.name}
                </td>
            </tr>

            ...

        </tbody>
    </table>
</div>
```
- principalState에 로그인한 유저 정보가 담겨있다.
- isEdit 상태에 따라 input 또는 텍스트로 바꿔준다.
- enabled가 0이면 이메일 인증 안 된 유저, 1이면 인증된 유저

<br/>

**이메일 인증 메일 전송**
``` javascript
    const handleSendMail = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.post("/account/auth/email", {}, option);  // 주소, 데이터, 옵션
            alert("인증 메일 전송 완료. 인증 요청 메일을 확인해주세요.");
        } catch (error) {
            alert("인증 메일 전송 실패. 다시 시도해주세요.");
        }
    }
```
- /account/auth/email 로 요청


<br/>

**수정 버튼 클릭 이벤트**
``` javascript
    const handleEditSubmitOnClick = async () => {
        try {
            setIsEdit(false);
            if(JSON.stringify(newUser) !== JSON.stringify(user)) {  // 기존 유저와 달라졌을 때만 수정
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                const response = await instance.put(`/account/user/${principalState.data.data.userId}`, newUser, option);
                queryClient.refetchQueries(["getPrincipal"]);
                alert("개인정보 변경이 완료 되었습니다.");
            }
        } catch (error) {
            console.error(error);
            if(Object.keys(error.response.data).includes("email")) {
                alert(error.response.data.email);
            } else if(Object.keys(error.response.data).includes("nickname")) {
                alert(error.response.data.nickname);
            }
            setNewUser(user);
        }
    }
```
- newUser 객체에 변경된 유저 정보를 담아서 /account/user/{userId}로 put 요청
- 기존 유저와 달라졌을 때만 put 요청
- 이메일, 닉네임 중복시, 이메일 유효성 검사 실패시엔 중복 메시지 alert

<br/>

---

<br/>

### **Back End**

**AccountController**

``` java
    // 개인 정보 수정
    @ValidAop
    @PutMapping("/api/account/user/{userId}")
    public ResponseEntity<?> editUser(@PathVariable int userId,
                                      @Valid @RequestBody EditUserReqDto editUserReqDto,
                                      BindingResult bindingResult) {
        return ResponseEntity.ok(accountService.updateUser(userId,editUserReqDto));
    }

    // 이메일 인증하기
    @PostMapping("/api/account/auth/email")
    public ResponseEntity<?> sendAuthenticationMail() {
        return ResponseEntity.ok(accountService.sendAuthMail());
    }

    // 인증된 이메일 가져오기
    @GetMapping("/api/account/auth/email")
    public ResponseEntity<?> authenticateMail (String token) {
        //주소의 토큰을 받고 유효한지 확인
        return ResponseEntity.ok(accountService.authenticateMail(token) ? "인증 완료" : "인증 실패");
    }
```
- ValidAop로 유효성 검사

<br/>

**AccountService**

**인증 메일 전송**
``` java
    public boolean sendAuthMail() {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String toEmail = principalUser.getUser().getEmail();

        MimeMessage mimeMailMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMailMessage, false, "utf-8");
            helper.setSubject("학습 나침반 이메일 인증");
            helper.setFrom("mini011029@gmail.com");
            helper.setTo(toEmail);

            String token = jwtProvider.generateAuthMailToken(toEmail);      //이메일 인증을 위한 토큰 발행

            mimeMailMessage.setText(
                    //html로 mail을 전송하기 위함
                    "<div>" +
                            "<h1>학습 나침반 이메일 인증 메일</h1>"+
                            "<p>이메일 인증을 완료하려면 아래의 버튼을 클릭하세요.</p>" +
                            "<a href=\"http://localhost:8080/api/account/auth/email?token=" + token + "\">인증하기</a>" +
                    "</div>", "utf-8", "html"
            );
            javaMailSender.send(mimeMailMessage);       //설정한 메시지를 sender를 통해 전달함
        } catch (Exception e) {
            e.printStackTrace();
            throw new SendMailException("이메일 전송이 실패했습니다.");
        }
        return true;
    }
```
- generateAuthMailToken : 이메일 인증 토큰 발행(유효기간 - 5분)
- http://localhost:8080/api/account/auth/email 로 a 태그 만들어서 인증하도록 한다.

<br/>

**이메일 인증**

``` java
    @Transactional(rollbackFor = Exception.class)
    public boolean authenticateMail(String token) {
        Claims claims = jwtProvider.getClaims(token);
        if(claims == null) {    // 유효하지 않은 토큰
            throw new AuthMailException("만료된 인증 요청입니다.");
        }

        String email = claims.get("email").toString();
        User user = accountMapper.findUserByEmail(email);

        if(user.getEnabled() > 0) { // 이미 인증된 상태
            throw new AuthMailException("이미 인증이 완료된 요청입니다.");
        }

        return accountMapper.updateEnabledToEmail(email) > 0;
    }
```
- 이메일의 a 태그 링크를 통해 들어오는 요청 Service
- 해당 유저의 enabled가 1이라면 이미 인증된 상태로 예외 처리
- 토큰이 유효하다면 enabled를 1로 업데이트(enabled 1 : 인증 상태)

<br/>

**유저 정보 수정**
``` java
    public boolean updateUser(int userId, EditUserReqDto editUserReqDto) {
        User newUser = editUserReqDto.toUser();
        newUser.setUserId(userId);

        int errorCode = accountMapper.checkDuplicateAndIdNot(newUser);
        if(errorCode > 0) {
            authService.responseDuplicateError(errorCode);
        }

        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User oldUser = principalUser.getUser();

        if(oldUser.getEnabled() > 0 && !Objects.equals(oldUser.getEmail(), newUser.getEmail())) {  // 이메일 변경 하면 enabled 0으로 업데이트 해줘야 함.
            newUser.setEnabled(0);
        } else {
            newUser.setEnabled(oldUser.getEnabled());
        }

        return accountMapper.updateUser(newUser) > 0;
    }
```
- 기존 유저를 가져와 새 유저의 이메일이 변경됐을 때는 enabled를 0으로 변경한다.(enabled 0 : 미인증 상태)

<br/>

**account_mapper.xml**
``` xml
    <update id="updateUser">
        update
            user_tb
        set
            email = #{email},
            name = #{name},
            nickname = #{nickname},
            phone = #{phone},
            enabled = #{enabled}
        where
            user_id = #{userId}
    </update>
    <update id="updateEnabledToEmail">
        update
            user_tb
        set
            enabled = 1
        where
            email = #{email}
    </update>
    <select id="findUserByEmail" resultMap="userMap">
        select
            user_id,
            email,
            oauth2_id,
            name,
            nickname,
            phone,
            provider,
            enabled,
            role_id
        from
            user_tb
        where
            email = #{email}
    </select>
    <select id="checkDuplicateAndIdNot"
            parameterType="com.aws.compass.entity.User"
            resultType="java.lang.Integer">
        select
            (select
                if(count(*) > 0, 1, 0)
            from
                user_tb
            where
                email = #{email}
                and user_id != #{userId}
            )
            + (select
                if(count(*) > 0, 2, 0)
            from
                user_tb
            where
                nickname = #{nickname}
                and user_id != #{userId}
            ) as result
    </select>
```
- checkDuplicateAndIdNot : 이메일, 닉네임이 중복인지 확인하는 sql, 해당 유저의 이메일과 닉네임은 중복체크 되면 안 되기에 user_id != #{userId} 조건을 넣어준다. (0 : 중복x, 1 : 이메일 중복, 2 : 닉네임 중복, 3 : 둘 다 중복)

<br/>
</details>
  
<details>
<summary>학원 신청 목록</summary>

<br/>

승인 대기, 승인 거절 상태의 학원을 볼 수 있는 기능

<br/>

---

<br/>

### **Front End**

**html**

``` html
<h2>🗒️ 학원 신청 목록</h2>
<div>
    {getAppliedAcademies?.data?.data.listTotalCount === 0 ? 
    <EmptyBox comment={<>신청한 학원이 없습니다.<br/>학원을 등록해 보세요!</>}
        link={'/academy/regist'} btn={"등록하기"}/> : 
    <>
        <div css={S.SComment}>학원 승인 여부를 확인하고 재신청 해보세요!</div>
        <table css={GS.STable}>
            <tbody>
                <tr>
                    <td>학원 번호</td>
                    <td>학원명</td>
                    <td>승인 여부</td>
                    <td>학원 선택</td>
                </tr>
                {getAppliedAcademies?.data?.data.academyRegistrations.map(academy => {
                    return  <tr key={academy.academyRegistrationId} 
                                style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal', color: academy.approvalStatus < 0 ? 'red' : 'black'}}>
                                <td>{academy.acaAsnum}</td>
                                <td>{academy.acaNm}</td>
                                <td>{academy.approvalStatus === 0 ? "승인 대기" : "승인 거절"}</td>
                                <td>
                                    <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                        {selectedAcademy === academy ? '선택 해제' : '선택'}
                                    </button>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
        {!getAppliedAcademies.isLoading &&
            <Pagination totalCount={getAppliedAcademies?.data?.data?.listTotalCount}
                link={`/account/mypage/appliedacademy`}/>}
        <div>
            {isApplicatedOpen && !!selectedAcademy && 
                (selectedAcademy?.approvalStatus > 0 ? <></> : 
                    selectedAcademy.approvalStatus === 0 ? 
                    <RetryMyAcademy type={"awaiting"} selectedAcademy={selectedAcademy}/> : 
                    <RetryMyAcademy type={"reject"} selectedAcademy={selectedAcademy}/>)}
        </div>
    </>}
</div>
```
- 승인 대기, 승인 거절 상태의 학원 목록을 가져온다.
- 선택된 학원의 승인 상태에 따라 props로 보내 각각의 기능을 수행한다.

<br/>

**승인 대기, 승인 거절 목록 불러오기**
```javascript
    const getAppliedAcademies = useQuery(["getAppliedAcademy", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/academies/applied/${principal.data.data.userId}/${page}`, option);
    }, {
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedAcademy(null);
        }
    })
```
- /accademies/applied/{userId}/{page}로 get 요청

<br/>

**html**
``` html
<div>
    <div css={S.SContainer}>
        <div css={S.SInfo}>
            {type === "reject" && "승인 거절된 학원 등록입니다. 거절 사유를 확인한 후 재등록 하세요."}
            {type === "awaiting" && "승인 대기중인 학원 등록입니다. 학원 승인은 3일 이내 완료됩니다."}
        </div>
        {type === "reject" && 
            <>
                <div css={S.SNameContainer}>
                    <span css={S.SName}>
                        거절 사유
                    </span>
                </div>
                <div css={S.SRejectReason}>
                    {selectedAcademy.rejectReason}
                </div>
            </>
        }
        
        <div css={S.SNameContainer}>
            <span css={S.SName}>선택된 학원</span>
        </div>
        <div>
            <div css={S.SAcademyInfoBox}>
                <div><span>학원 번호</span><div>{selectedAcademy.acaAsnum}</div></div>
                <div><span>지역</span><div>{selectedAcademy.admstZoneNm}</div></div>
            </div>
            <div css={S.SAcademyInfoBox}>
                <div><span>학원명</span><div>{selectedAcademy.acaNm}</div></div>
            </div>
        </div>
        <div css={S.SNameContainer}>
            <span css={S.SName}>사전확인서류 제출</span>
        </div>
        {type === "reject" && 
            <>
                <FileUpload academyContent={academyContent} setAcademyContent={setAcademyContent}
                    uploadeFile={uploadeFile} setUploadeFile={setUploadeFile}/>
                <div css={S.SButtonContainer}>
                    <button css={S.SSubmitButton} onClick={handlesubmissionClick}>제출</button>
                </div>
            </>
        }
        {type === "awaiting" && <FileDownload selectedAcademy={selectedAcademy}/>}
    </div>
</div>
```
- props로 보내준 type에 따라 각각의 기능을 수행
- 승인 거절 상태이면 파일을 다시 업로드해 제출할 수 있고, 승인 대기 상태는 제출했던 파일을 다시 다운로드 받아볼 수 있다.

<br/>

**제출 버튼 클릭 이벤트**
```javascript
    const handlesubmissionClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }

            if(uploadeFile.idFile){
                if(academyContent.match === 'false' && uploadeFile.operationRegistrationFile === 0) {
                    alert("아직 업로드 중입니다! 잠시후 시도해주세요.");
                    return;
                }
                await instance.put("/academy/reapplied", academyContent, option);
                alert("업로드가 완료되었습니다. 신청은 3일 이내 확인됩니다.");
            }
        } catch (error) {
            alert(error.response.data.sendFail);
        }
    }
```
- /academy/reapplied로 새로 업로드한 파일을 담아 put 요청

<br/>

---

<br/>

### **Back End**

**AcademyController**

``` java
    // 승인 거절 학원 재신청
    @ValidAop
    @PutMapping("/api/academy/reapplied")
    public ResponseEntity<?> updateAcademyRegist(@Valid @RequestBody AcademyRegistrationReqDto academyRegistrationReqDto, BindingResult bindingResult) {
        return ResponseEntity.ok(academyService.updateAcademyRegist(academyRegistrationReqDto));
    }

    // 신청된 학원 목록 보기
    @GetMapping("/api/academies/applied/{userId}/{page}")
    public ResponseEntity<?> getAppliedAcademies(@PathVariable int userId, @PathVariable int page) {
        return ResponseEntity.ok(academyService.getAppliedAcademies(userId, page));
    }

```
- 페이지네이션을 위해 PathVariable로 page 변수 받아와줌.

<br/>

**AcademyService**

```java
    @Transactional(rollbackFor = Exception.class)
    public boolean updateAcademyRegist(AcademyRegistrationReqDto academyRegistrationReqDto) {
        AcademyRegistration academyRegistration = academyRegistrationReqDto.toAcademyRegist();

        return academyMapper.updateAcademyRegist(academyRegistration) > 0;
    }

    public AppliedAcademiesRespDto getAppliedAcademies(int userId, int page) {
        int index = (page - 1) * 5;

        List<AcademyRegistration> academyRegistrations = academyMapper.getAppliedAcademyRegistrations(userId, index);
        int listTotalCount = academyMapper.getAppliedAcademyCount(userId);

        return new AppliedAcademiesRespDto(academyRegistrations, listTotalCount);
    }
```


<br/>

**academy_mapper**

```xml
    <update id="updateAcademyRegist">
        update
            academy_registration_tb
        set
            approval_status = 0,
            business_registration_file = #{businessRegistrationFile},
            id_file = #{idFile},
            operation_registration_file =
            <choose>
                <when test='operationRegistrationFile==null or operationRegistrationFile.equals("")'>
                    null,
                </when>
                <otherwise>
                    #{operationRegistrationFile},
                </otherwise>
            </choose>
            reject_reason = null
        where
            ACADEMY_ID = #{academyId}
    </update>
    <select id="getAppliedAcademyRegistrations" resultMap="academyRegistrationMap" parameterType="map">
        select
            art.academy_registration_id,
            art.ACADEMY_ID,
            at.ACA_ASNUM,
            at.ACA_NM,
            at.ADMST_ZONE_NM,
            art.match,
            art.user_id,
            art.business_registration_file,
            art.id_file,
            art.operation_registration_file,
            art.approval_status,
            art.reject_reason
        from
            academy_registration_tb art
            left outer join academy_tb at on(at.ACADEMY_ID = art.ACADEMY_ID)
        where
            art.user_id = #{userId}
            and art.approval_status &lt; 1
        order by
            art.approval_status asc,
            art.academy_registration_id desc
        limit #{index}, 5
    </select>
```
- updateAcademyRegist : 
  - approval_status를 -1 -> 0으로 업데이트(승인 거절 -> 승인 대기 상태로 변경)
  - file들 업데이트
  - 거절 사유 null로 비워주기
- getAppliedAcademyRegistrations : 
  - approval_status < 1 -> 승인 대기, 승인 거절 학원들만 조회
  - approval_status 오름차순 -> 승인 거절 상태인 학원이 먼저 보이도록

<br/>

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

### FrontEnd

#### 카카오 결제 및 마이페이지 결제 리스트

```html
<div>
            <h2>💸 광고 결제</h2>
            <div>
                {getMyAcademies.data.data.listTotalCount === 0 ? 
                <EmptyBox comment={<>광고 결제할 학원이 없습니다! <br />학원을 등록하고 승인 받아 나의 학원을 홍보해보세요!</>}
                    link={'/academy/regist'} btn={"등록하기"}/> :
                <>
                    <div css={S.SComment}><span>광고 결제</span> 하고 <span>나의 학원을 홍보</span>해보세요! 학원명을 클릭하면 상세 페이지로 이동합니다.</div>
                    <table css={GS.STable}>
                        <tbody>
                            <tr>
                                <td>학원 번호</td>
                                <td>학원명</td>
                                <td>학원 선택</td>
                            </tr>
                        { getMyAcademies?.data?.data.academyRegistrations.map(academy => {
                            return  <tr key={academy.academyRegistrationId} 
                                        style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal'}}>
                                        <td>{academy.acaAsnum}</td>
                                        <td css={S.SAcaNm} onClick={()=> {navigate(`/academy/info?ACADEMY_ID=${academy.academyId}`)}}>{academy.acaNm}</td>
                                        <td>
                                            <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                                {selectedAcademy === academy ? '선택 해제' : '선택' }
                                            </button>
                                        </td>
                                    </tr>
                        })}
                        </tbody>
                    </table>
                    {!getMyAcademies.isLoading && 
                        <Pagination totalCount={getMyAcademies?.data?.data?.listTotalCount}
                            link={`/account/mypage/adpayment`}/>}
                    {isPaymentInfoOpen && !!selectedAcademy && (
                    <div css={S.SProductContainer}>
                        {ispurchase.isLoading ? <></> : !!isAcademyPaid
                        ? (
                        <div css={S.SPurchaseInfoBox}>
                            <div css={S.SPurchaseInfo}>
                                <span>결제된 내용</span>
                                <div>상품 : {isAcademyPaid.productName}</div>
                                <div>가격 : {isAcademyPaid.productPrice}원</div>
                                <div>기간 : {isAcademyPaid.productPeriod}일</div>
                                <div>상품 기간 : {formatDate(isAcademyPaid.purchaseDate)} ~ {formatDate(addDays(isAcademyPaid.purchaseDate, isAcademyPaid.productPeriod))}</div>
                                <div>상품설명 : {isAcademyPaid.productPrice}원의 행복</div>
                            </div>
                        </div>
                        )
                        : products.map(product => {
                                return (
                                <div css={S.SProductLayout} onClick={() => { handlePaymentSubmit(product); }}>
                                    <div css={S.SProductImgBox}>
                                        <img css={S.SProductImg} src={productImg} alt="" />
                                        <p css={S.SProductImgText}>{product.productPrice}원</p>
                                    </div>
                                        <div css={S.SProductDetail}>
                                        <div>상품 : {product.productName}</div>
                                        <div>가격 : {product.productPrice}원</div>
                                        <div>기간 : {product.productPeriod}일</div>
                                        <div>상품설명 : {product.productPrice}원의 행복</div>
                                    </div>
                                </div>
                                );
                            })
                        }
                    </div>
                    )}
                </>}
            </div>
        </div>
```
- handlePaymentSubmit 결제를 처리하는 핵심 함수
- 결제된 학원 목록을 테이블로 표시하고, 선택된 학원에 대한 결제 정보를 상세하게 제공
- 결제 정보가 없는 경우에는 알림 메시지와 함께 등록된 학원이 없다는 안내를 제공

#### 입력받은 값
```javascript
// 결제
    const getProduct = useQuery(["getProduct"], async () => {
        try{
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/ad/products`, option)
        } catch(error){
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setProducts(response.data);
        }
    })

    useEffect(() => {
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(iamport);
        }
    }, [])

// 카카오 결제 관련
    const handlePaymentSubmit = (product) => {
        const principal = quertClient.getQueryState("getPrincipal");
        if(!window.IMP) {return}
        const { IMP } = window;
        IMP.init("imp52230315") // IMP를 초기화 시킴

        const paymentData = {
            pg: "kakaopay",
            pay_method: "kakaopay",
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: product.productPrice,
            name: product.productName,
            buyer_name: principal?.data?.data.name,
            buyer_email: principal?.data?.data.email
        }

        IMP.request_pay(paymentData, (response) => {
            const { success, error_msg } = response;

            if(success) {
                const purchaseDate = {
                    productId: product.productId,
                    userId: principal?.data?.data.userId,
                    academyId: selectedAcademy.academyId
                }
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                instance.post("/purchase", purchaseDate, option).then(response => {
                    alert("광고결제가 완료되었습니다. 감사합니다!!🙇")
                    ispurchase.refetch()
                    quertClient.refetchQueries(["getPrincipal"])
                })
            } else {
                alert(error_msg);
            }
        })
    }
```
- 아임포트(Iamport): 아임포트는 결제 처리를 도와주는 외부 라이브러리입니다. 초기화 및 결제 요청에 사용됩니다.

  (아임포트)
https://portone.io/korea/koutm_source=google&utm_medium=google_sa&utm_campaign=pf_conversion_2302_kr&utm_content=homepage&gclid=EAIaIQobChMI0Za95tHlggMVzyZ7Bx3TTg0dEAAYASAAEgI14fD_BwE

- 주요 기능:

1. 결제된 학원 표시 :
getMyAcademies 쿼리를 통해 사용자가 결제한 학원 목록을 가져옵니다.
테이블을 사용하여 학원 번호, 학원명, 선택 버튼을 표시

2. 결제 처리 (handlePaymentSubmit) :
카카오 결제를 위해 IMP를 초기화하고, 결제 정보를 구성하여 IMP.request_pay를 호출
결제 성공 시, 해당 정보를 서버에 전송하여 결제 내역을 기록하고, 관련 데이터를 업데이트

3. 상품 목록 표시 :
getProduct 쿼리를 통해 광고 상품 목록을 가져옵니다.
가져온 상품 목록을 렌더링하여 사용자에게 선택할 수 있는 상품을 표시

4. 상품 선택 및 결제 내역 표시 :
사용자가 상품을 선택하면 해당 상품에 대한 결제 정보를 표시
이미 결제한 경우에는 결제된 내용을 상세히 표시하고, 결제되지 않았다면 선택할 수 있는 상품 목록을 제공

#### 학원 찾기 페이지 광고 리스트
```html
  <div>
    <div css={S.HeaderBox}>
        <h3>이런 학원은 어떠세요?</h3>
        <div>
            <span>광고</span>
            <RiAdvertisementFill size={22}/>
        </div>
    </div>
    <ul css={S.UlBox}>
    {!getPurchaseAcademyList.isLoading && Array.isArray(getPurchaseAcademyList?.data?.data) && getPurchaseAcademyList?.data?.data.map(academy => {
        return <LiAcademyBox key={academy.ACADEMY_ID} academy={academy}/>
    })}
    </ul>
</div>
```
- 광고 리스트의 각 학원은 LiAcademyBox 컴포넌트를 통해 표현

#### 입력받은 값
```javascript
// 광고 목록 가지고오기
    const getPurchaseAcademyList = useQuery(["getPurchaseAcademyList"], async () => {
        try{
            return await instance.get(`/ad/academies/random`)

        } catch(error) {
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    })
```
- 광고 목록을 가져오기 위해 API 엔드포인트 /ad/academies/random에 비동기 요청을 보냅니다.
- 가져온 학원 목록은 getPurchaseAcademyList.data.data에 저장
- 가져온 학원 목록을 매핑하여 각 학원을 LiAcademyBox로 표시

### Backend

#### Controller
```java
@RestController
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    // 광고 목록 가져오기
    @GetMapping("/api/ad/products")
    public ResponseEntity<?> getProducts() {
        return ResponseEntity.ok(paymentService.getProducts());
    }

    // 광고 결제된 학원
    @PostMapping("/api/purchase")
    public ResponseEntity<?> purchase(@RequestBody PurchaseReqDto purchaseReqDto) {
        return ResponseEntity.ok(paymentService.purchase(purchaseReqDto));
    }

    // 광고 정보 유효성 검사
    @GetMapping("/api/purchase/check")
    public ResponseEntity<?> getPurchaseInfo(@RequestParam int userId, @RequestParam int academyId) {
        return ResponseEntity.ok(paymentService.isPurchase(userId, academyId));
    }
}
```
- 광고 제품 및 구매와 관련된 엔드포인트를 관리

#### DTO
```java
  @Data
@Builder
public class PurchaseReqDto {

    private int purchaseInfoId;
    private int academyId;
    private int userId;
    private int productId;
    private Date purchaseDate;
    private int productPeriod;

    public Purchase toPurchase() {
        return Purchase.builder()
                .purchaseInfoId(purchaseInfoId)
                .academyId(academyId)
                .userId(userId)
                .productId(productId)
                .purchaseDate(purchaseDate)
                .build();
    }
}
```
- 광고와 관련된 정보의 데이터 전송 객체

#### Service
```java
@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentMapper paymentMapper;

    public List<ProductRespDto> getProducts() {
        List<ProductRespDto> productRespDtos = new ArrayList<>();
        paymentMapper.getProducts().forEach(product -> {
            productRespDtos.add(product.toProduct());
        });
        return productRespDtos;
    }

    public boolean purchase(PurchaseReqDto purchaseReqDto) {
        return paymentMapper.savePurchase(purchaseReqDto.toPurchase()) > 0;
    }

    public PurchaseInfoRespDto isPurchase(int userId, int academyId) {
        if(!Objects.isNull(paymentMapper.checkPurchase(userId, academyId))) {
            return paymentMapper.checkPurchase(userId, academyId).toPurchaseInfoDto();
        }
        return null;
    }
}
```
- 결제와 관련된 작업을 처리하는 비즈니스 로직이 포함된 서비스

- 광고 제품 가져오기 : paymentMapper.getProducts()를 사용하여 광고 제품 목록을 가져옵니다.
- 학원을 위한 광고 구매 : 제공된 구매 정보로 paymentMapper.savePurchase()를 호출하여 구매를 시작합니다.
- 광고 정보 유효성 검사 : paymentMapper.checkPurchase()를 호출하여 광고 정보의 유효성을 확인합니다.

#### Repository
```java
@Mapper
public interface PaymentMapper {

    public List<Product> getProducts();
    public int savePurchase(Purchase purchase);
    public Product checkPurchase(int userId, int academyId);
}
```
- 결제와 관련된 데이터베이스 상호 작용을 위한 MyBatis Mapper 인터페이스
#### SQL
```java
<resultMap id="productMap" type="com.aws.compass.entity.Product">
        <id property="productId" column="product_id"/>
        <result property="productName" column="product_Name"/>
        <result property="productPrice" column="product_price"/>
        <result property="productPeriod" column="product_period"/>
        <result property="purchaseDate" column="purchase_date"/>
    </resultMap>

    <resultMap id="purchaseMap" type="com.aws.compass.entity.Purchase">
        <id property="purchaseInfoId" column="purchase_info_id"/>
        <result property="academyId" column="academy_id"/>
        <result property="userId" column="user_id"/>
        <result property="productId" column="product_id"/>
        <result property="purchaseDate" column="purchase_date"/>
    </resultMap>

    <insert id="savePurchase" parameterType="com.aws.compass.entity.Purchase">
        insert into purchase_info_tb
        values(0, #{academyId}, #{userId}, #{productId}, CONVERT_TZ(NOW(), 'UTC', 'Asia/Seoul'))
    </insert>

    <select id="getProducts"
            resultMap="productMap">
        select
            pt.product_id,
            pt.product_name,
            pt.product_price,
            pt.product_period
        from
            product_tb pt
    </select>

    <select id="checkPurchase" resultMap="productMap">
        SELECT
            pit.purchase_date,
            pt.product_name,
            pt.product_period,
            pt.product_price
        FROM
            purchase_info_tb pit
            left outer join product_tb pt on(pt.product_id = pit.product_id)
        where
            user_id = #{userId}
            and ACADEMY_ID = #{academyId}
            and now() <![CDATA[ <= ]]> date_add(purchase_date, interval pt.product_period DAY)
    </select>
```
- 결과 매핑: SQL 쿼리 결과를 Java 객체에 매핑하기 위한 결과 맵을 정의 (productMap 및 purchaseMap)
- Insert 쿼리 (savePurchase)
- purchase_info_tb 테이블에 새로운 구매 레코드를 삽입
- Select 쿼리 (getProducts 및 checkPurchase)


</details>
  
<details>
<summary>나의 학원 문의</summary>
</details>

<br/>


### **웹 관리자 마이페이지**
<details>
<summary>학원 등록 대기목록</summary>

<br/>

승인 대기 중인 학원들을 모아 웹 관리자가 승인/승인 거부 할 수 있도록 만든 페이지

<br/>

---

<br/>

### **Front End**

**html**

``` html
<h2>📜 학원 등록 대기목록</h2>
<div>
    {getAcademies.data.data.listTotalCount === 0 ? <div css={S.SEmptyBox}>등록 대기중인 학원이 없습니다.</div> : 
    <>
        <div css={S.SComment}>
            승인 대기 중인 학원들을 승인 거절 또는 승인 해주세요.
        </div>
        <table css={GS.STable}>
            <tbody>
                <tr>
                    <th>학원 번호</th>
                    <th>학원명</th>
                    <th>신청자</th>
                    <th>학원 선택</th>
                </tr>
                { getAcademies?.data?.data.academyRegistrations.map(academy => {
                    return  <tr key={academy.academyRegistrationId} 
                                style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal' }}>
                                <td>{academy.acaAsnum}</td>
                                <td>{academy.acaNm}</td>
                                <td>{academy.name}</td>
                                <td>
                                    <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                        {selectedAcademy === academy ? '선택 해제' : '선택'}
                                    </button>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
        {!getAcademies.isLoading && 
            <Pagination totalCount={getAcademies.data.data.listTotalCount}
                link={'/account/mypage/academyawating'}/>}
        {isWaitingAcademyOpen && !!selectedAcademy && <SelectedAcademy selectedAcademy={selectedAcademy}/>}
    </>}
</div>
```
``` html
<div css={S.SContainer}>
    <div css={S.SNameContainer}>
        <span css={S.SName}>선택된 학원</span>
    </div>
    <div css={S.SSelectedAcaContainer}>
        <div css={S.SAcademyInfoBox}>
            <div><span>학원 번호</span><div>{selectedAcademy.acaAsnum}</div></div>
            <div><span>지역</span><div>{selectedAcademy.admstZoneNm}</div></div>
            <div><span>신청자</span><div>{selectedAcademy.name}</div></div>
        </div>
        <div css={S.SAcademyInfoBox}>
            <div><span>학원명</span><div>{selectedAcademy.acaNm}</div></div>
        </div>
    </div>
    <div css={S.SNameContainer}>
        <span css={S.SName}>사전확인서류 제출</span>
    </div>
    <FileDownload selectedAcademy={selectedAcademy}/>
</div>
<div css={S.SButtonBox}>
    <button onClick={handleDisapprovalOnClick} css={S.SDeclineBtn}>승인 거절</button>
    <button onClick={handleApprovalOnClick} css={S.SApprovalBtn}>승인</button>
</div>
```
- 승인 대기중인 학원 리스트를 보여준다. 선택 버튼을 누르면 해당 학원의 정보와 업로드한 파일을 다운받아 볼 수 있다.
- 승인 버튼과 승인 거절 버튼으로 해당 학원을 승인/승인 거절 할 수 있다.


<br/><br/>

**승인 대기 학원 목록 가져오기**

``` javascript
    const getAcademies = useQuery(["getAcademies", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/admin/academies/awaiting/${page}`, option);
    }, {
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedAcademy(null);
        }
    })
```
- /admin/academies/awaiting 으로 요청


<br/>

**승인 버튼 클릭**
``` javascript
    const handleApprovalOnClick = async () => {
        try {
            const requestData = {
                academyRegistrationId: selectedAcademy.academyRegistrationId,
                userId: selectedAcademy.userId
            }
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.put('/admin/academy/approval', requestData, option);
            alert("승인 완료");
            queryClient.refetchQueries(["getAcademies"]);
        } catch (error) {
            console.error(error);
        }
    }
```
- /admin/academy/approval로 승인할 학원의 데이터 담아 요청
- 승인 후 대기 학원 목록 refetch

<br/>


**승인 거절 버튼 클릭**
``` javascript
    const handleDisapprovalOnClick = async () => {
        const rejectReason = prompt("거절 사유를 입력하세요: ");

        if(rejectReason !== null && rejectReason.trim() !== "") {
            try {
                const requestData = {
                    academyRegistrationId: selectedAcademy.academyRegistrationId,
                    rejectReason: rejectReason
                }
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                await instance.put(`/admin/academy/disapproval`, requestData, option);
                alert("승인 거절 완료");
                queryClient.refetchQueries(["getAcademies"]);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("거절 사유를 입력하지 않아 취소되었습니다.");
        }
    }
```
- /admin/academy/disapproval로 승인 거절할 학원의 데이터 담아 요청
- 거절 사유를 입력하지 않을 시 취소되도록 함.

<br/>

---

<br/>

### **Back End**


**AdminController**
``` java
    // 대기 학원 가져오기
    @GetMapping("/api/admin/academies/awaiting/{page}")
    public ResponseEntity<?> getAwaitingAcademies(@PathVariable int page) {
        return ResponseEntity.ok(adminService.getAwaitingAcademies(page));
    }

    // 학원 승인하기
    @PutMapping("/api/admin/academy/approval")
    public ResponseEntity<?> approvalAcademy(@RequestBody ApprovalAcademyReqDto approvalAcademyReqDto) {
        return ResponseEntity.ok(adminService.approvalAcademy(approvalAcademyReqDto));
    }

    // 학원 승인 거절하기
    @PutMapping("/api/admin/academy/disapproval")
    public ResponseEntity<?> disapprovalAcademy(@RequestBody DisapprovalReqDto disapprovalReqDto) {
        return ResponseEntity.ok(adminService.disapprovalAcademy(disapprovalReqDto));
    }
```
- 페이지네이션을 위해 page번호를 PathVariable로 받아온다.

<br/>

**AdminService**
``` java
    public AwaitingAcademiesRespDto getAwaitingAcademies(int page) {
        int index = (page - 1) * 5;

        List<AcademyRegistration> academyRegistrations = adminMapper.getAcademyRegistrations(index);
        int listTotalCount = adminMapper.getAwaitingAcademyCount();

        return new AwaitingAcademiesRespDto(academyRegistrations, listTotalCount);
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean approvalAcademy(ApprovalAcademyReqDto approvalAcademyReqDto) {
        return adminMapper.updateApprovalState(approvalAcademyReqDto.getAcademyRegistrationId()) > 0
                && adminMapper.updateUserRole(approvalAcademyReqDto.getUserId()) > 0;
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean disapprovalAcademy(DisapprovalReqDto disapprovalReqDto) {
        return adminMapper.updateApprovalStatus(disapprovalReqDto.getAcademyRegistrationId(), disapprovalReqDto.getRejectReason()) > 0;
    }
```
- getAwaitingAcademies : 승인 대기 목록과 리스트 길이를 return
- approvalAcademy : 
  - 학원의 승인 상태를 변경(0(승인 대기) -> 1(승인))
  - user의 role 변경(1(학생) -> 2(학원 관리자))
- disapprovalAcademy :
  - 학원의 승인 상태, 거절 사유 변경(0(승인 대기) -> -1(승인 거절))

<br/>

**admin_mapper**
``` xml
    <update id="updateApprovalState">
        update
            academy_registration_tb
        set
            approval_status = 1
        where
            academy_registration_id = #{academyRegistrationId}
    </update>
    <update id="updateUserRole">
        update
            user_tb
        set
            role_id = 2
        where
            user_id = #{userId}
    </update>
    <update id="updateApprovalStatus" parameterType="map">
        update
            academy_registration_tb
        set
            approval_status = -1,
            reject_reason = #{rejectReason}
        where
            academy_registration_id = #{academyRegistrationId}
    </update>

    <select id="getAcademyRegistrations" resultMap="academyRegistrationMap">
        select
            art.academy_registration_id,
            art.ACADEMY_ID,
            at.ACA_ASNUM,
            at.ACA_NM,
            at.ADMST_ZONE_NM,
            art.match,
            art.user_id,
            ut.name,
            art.business_registration_file,
            art.id_file,
            art.operation_registration_file
        from
            academy_registration_tb art
                left outer join academy_tb at on(at.ACADEMY_ID = art.ACADEMY_ID)
                left outer join user_tb ut on(ut.user_id = art.user_id)
        where
            art.approval_status = 0
        order by
            art.academy_registration_id asc
        limit #{index}, 5
    </select>
    <select id="getAwaitingAcademyCount" resultType="java.lang.Integer">
        select
            count(*)
        from
            academy_registration_tb
        where
            approval_status = 0
    </select>
```
- getAcademyRegistrations : approval_status가 0인 것들만(승인 대기 상태인 것) 가져옴
- 오래된 승인 대기 학원부터 가져오기 위해 id 오름차순으로 가져옴


</details>

<br/>



<br/>

## **✏ 느낀점**
> **팀장: 변정민** 
- 이번 프로젝트의 팀장을 처음 맡게 되었을 때 과연 이 프로젝트를 잘 이끌어 갈 수 있을까라는 생각이 막연하게 들었습니다. 저 혼자 이끌어가는 것이 아닌 팀원들과 매일 회의하고, 진행 척도를 체크하면서 주고받는 대화들을 통해 방향을 잡을 수 있었습니다. 팀원들의 역량을 높이기 위해 전부 CRUD를 맡아서 할 수 있도록 진행하였고, 진행 척도를 체크하며 서로 할 일을 파악하고 도움을 주는 방향으로 이끌어 나갈 수 있었습니다.
- 배운 대로 단순히 firebase에 업로드하면 된다고 생각했지만, 여러 개의 파일을 올리는 과정에서 interrupt가 발생해 이전 파일이 업로드되지 않았습니다. 사용자 입장에서 생각하면 사용자는 이 과정을 모르니 당연히 interrupt를 해결해야만 했습니다. 진행 중 상태를 알리는 프로그레스바를 만들고, 다음 단계를 진행하려면 알림창을 띄워 아직 업로드되지 않음을 알리는 방향으로 사용성을 높였습니다.
- 여러 개의 DB에서 값을 가져오다 보니 한 번에 들고 오면 SQL문이 너무 늘어나고 시간도 오래 걸렸습니다. 따로 가져와서 값을 전달할 때만 합쳐서 들고 오는 방향으로 진행했더니 시간도 줄어들고 값을 들고 와서 확인하는 데도 불편함이 줄었습니다.
- 후기 수정을 할 때 최신 값이 안 넘어오고 자꾸 이전의 값이 넘어왔습니다. 그 과정에서 언제 리뷰를 다시 가져와야 하는지, 언제 수정 버튼의 상태를 변경해야 하는지 등 다시 생각하는 과정에서 해답을 찾을 수 있었습니다.
- 혼자 진행하는 프로젝트였다면 1달이라는 시간 내에 해결하지 못하고, 문제점을 찾는 과정에서도 오래 걸렸을 것 같다고 느꼈습니다. 함께 프로젝트를 진행하면서 코드를 리뷰하는 과정에서 버그를 찾고 사용성에 대해서 생각하면서 서로 피드백했더니 코드와 사용성에 대한 이해도가 높아지고 프로젝트의 완성도를 높일 수 있었습니다.

<br/>

> **팀원: 정가영** 
-  프로젝트를 통해 협업과 소통의 중요성을 깨달았습니다. 매일 아침 회의록 작성과 코드 리뷰를 통해 팀 전체가 프로젝트 진행 상황을 파악했습니다. 이로써 코드의 이해도가 높아지고 재사용이 쉬워졌습니다. 할 일의 우선 순위 설정을 통해 프로젝트의 완성도를 높였습니다.
 보안 부분을 맡아 jwt 토큰과 Security에 대한 이해를 높였고, OAuth2를 활용한 소셜 로그인을 구현했습니다. 관리자 마이페이지에서는 학원 승인 기능을 도입하여 학원 정보를 효과적으로 관리할 수 있었습니다. 학원 상세 정보 수정에서는 여러 테이블에서 데이터를 가져오고 업데이트하는 과정에서 어려움을 겪었지만, 이를 통해 많은 것을 배울 수 있었습니다.
 전체적인 디자인 수정을 담당하며 사용자가 한 눈에 기능을 파악하고 편리하게 사용할 수 있을 지 고민하는 과정을 통해 디자인 원칙 및 사용성에 대한 이해가 깊어지게 되었습니다. 

<br/>

> **팀원: 김채원** 
- 프로젝트를 시작할 때 여러 사람과 어떤 웹사이트를 만들지 목표를 잡는 것부터 시작하는 프로젝트는 처음이었기 때문에 긴장도 되고, 배운 지식으로 얼마나 실질적인 결과물을 만들어 낼 수 있을지에 대한 궁금증도 있었습니다. 프로젝트를 진행하면서 제가 알고 있다고 생각한 부분도 실제로는 모르는 것이 많았습니다. 특히, 학원 찾기 페이지를 맡아 DB의 정보를 다루는 일이 많았는데, 오랜 시간이 지난 MySQL 문법들을 기억하기 위해 이전에 공부했던 자료를 찾아보며 복습해야 했고, MyBatis 동적 쿼리 문법을 이용하여 조건이 있는 경우에만 필터를 적용하는 방법을 배웠습니다. 다루는 정보가 많았기에 정보를 빠르게 가져오기 위한 쿼리를 짜기 위해 노력했습니다. 이 부분에서 시간이 많이 소요되었지만, 팀원들의 배려로 문의 부분을 맡아 CRUD 과정도 해볼 수 있었습니다.
- 계획을 세우고 시작했지만, 예상치 못한 상황과 추가 요구사항으로 인해 일이 계속 늘어나면서, 그때마다 팀원들과 소통하며 역할을 나누어 일을 신속하게 처리하는 것이 중요하다는 것을 배웠습니다. 프로젝트 초반에는 OpenAPI를 사용하다가 정보 처리 문제로 인해 정보를 DB에 저장해 사용해야 했는데, 이에 따라 코드를 수정해야 했고, 이로 인해 일부 기능을 포기하고 다른 방식으로 개선할 수 있을 것 같은 코드들도 시간에 쫓겨 수정하지 못한 것이 아쉬웠습니다.
- 학원 찾기 페이지에서 전체 초기화 버튼이 있으면 사용자가 편하게 모든 조건을 리셋 후 새로운 조건을 넣을 수 있어서 구현하려 했지만, 초기화 후 모달이 켜지면 이전 값이 남아있는 문제가 있었습니다. 그것을 해결하려 시간을 쓰기에는 다른 기능들이 많이 남아있었기에 조건별 초기화 버튼만 만들고 모든 조건을 초기화하는 버튼을 구현하지 못하였습니다. 이 부분은 프로젝트가 끝난 후 혼자서라도 개선해 보려고 합니다. 또 하나 아쉬운 점은 관심 학원 페이지에서 관심 학원 목록을 가져올 때 본인의 관심 학원을 가져와야 했는데, user_id를 조건으로 주면 해당 학원의 관심 학원 수를 얻을 수 없어, like_tb 테이블을 서브쿼리로 조인하여 사용했습니다. 이 방법으로는 값은 잘 나왔지만, 여러 방법을 시도해 보지 못하고 이 방법만 사용한 것이 아쉬웠습니다. 이 부분도 프로젝트가 끝난 후 다른 방법을 찾아보고 개선해 볼 계획입니다.

<br/>

> **팀원: 이지우** 
-  프로젝트가 시작하기에 앞서서 많으면 많고 적다면 적은 프로그래밍을 배웠다고 생각했습니다. 저의 지식으로 프로젝트를 할 수 있을까? 팀원들에게 피해를 주지는 않을까 걱정하면서 시작하였습니다. 처음에는 뭐가 무엇인지 잘 모르는 상태로 시작해서 당황도 하고 하였지만 팀장님과 팀원분들의 도움으로 점점 어떻게 해야 하는지 감이 잡혀 왔습니다. 그러면서 배웠던 것은 더욱 자세히 알게 되었고 모르는 것을 하면서 새로운 것들을 터득하게 되었습니다. 그 결과로 만들어진 프로젝트는 팀 전체의 노력 결정체로 다가왔습니다. 하지만 이러한 성취와 만족감과 더불어 피로감도 느꼈습니다. 프로젝트 기간의 집중과 노력으로 인해 몸과 마음이 지쳤기 때문입니다. 향후 다른 프로젝트를 하게 되면 몸과 마음을 잘 단련하고 해야겠다는 생각이 들었습니다. 또 한 프로젝트를 돌아보면서 부족한 부분을 발견했습니다. 완벽한 결과물을 만들 수 없다는 것을 깨닫게 되었고, 그것을 향한 개선의 기회로 여겼습니다. 미흡한 점을 보완하고 발전하는 과정이 지속적인 학습과 성장을 가져다줄 것이라 생각했습니다!! 팀장님 팀원분들 최고!!


<br/>

