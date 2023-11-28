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
    - 후기 별점 기능(본인이 작성한 후기 목록 불러오기, 후기 작성, 수정, 삭제)
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

  `
                      
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
  학원 상세페에지 에서 좋아요 버튼을 누르면 좋아요의 count가 쌓이고
  
        
        
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
  마이페이지에서 자신이 좋아요 한 학원 리스트를 볼 수 있다.
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
   `결제
  
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
    }`
</div>
카카오 결제창이 나타나고 결제에 성공시 alert("광고결제가 완료되었습니다. 감사합니다!!🙇") 띄움


          
    ` <div>
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
    
 결제 완료 후 학원 찾기 페이지 에서 결제된 학원 리스트들을 볼 수 있다.   
                               
                        


    `<div>
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
    );


   결제 완료 후 마이페이지의 결제된 학원 리스트들을 볼 수 있다.
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
- 프로젝트를 시작할 때 여러 사람과 어떤 웹사이트를 만들지 목표를 잡는 것부터 시작하는 프로젝트는 처음이었기 때문에 긴장도 되고, 배운 지식으로 얼마나 실질적인 결과물을 만들어 낼 수 있을지에 대한 궁금증도 있었습니다. 프로젝트를 진행하면서 제가 알고 있다고 생각한 부분도 실제로는 모르는 것이 많았습니다. 특히, 학원 찾기 페이지를 맡아 DB의 정보를 다루는 일이 많았는데, 오랜 시간이 지난 MySQL 문법들을 기억하기 위해 이전에 공부했던 자료를 찾아보며 복습해야 했고, MyBatis 동적 쿼리 문법을 이용하여 조건이 있는 경우에만 필터를 적용하는 방법을 배웠습니다. 다루는 정보가 많았기에 정보를 빠르게 가져오기 위한 쿼리를 짜기 위해 노력했습니다. 이 부분에서 시간이 많이 소요되었지만, 팀원들의 배려로 문의 부분을 맡아 CRUD 과정도 해볼 수 있었습니다.
- 계획을 세우고 시작했지만, 예상치 못한 상황과 추가 요구사항으로 인해 일이 계속 늘어나면서, 그때마다 팀원들과 소통하며 역할을 나누어 일을 신속하게 처리하는 것이 중요하다는 것을 배웠습니다. 프로젝트 초반에는 OpenAPI를 사용하다가 정보 처리 문제로 인해 정보를 DB에 저장해 사용해야 했는데, 이에 따라 코드를 수정해야 했고, 이로 인해 일부 기능을 포기하고 다른 방식으로 개선할 수 있을 것 같은 코드들도 시간에 쫓겨 수정하지 못한 것이 아쉬웠습니다.
- 학원 찾기 페이지에서 전체 초기화 버튼이 있으면 사용자가 편하게 모든 조건을 리셋 후 새로운 조건을 넣을 수 있어서 구현하려 했지만, 초기화 후 모달이 켜지면 이전 값이 남아있는 문제가 있었습니다. 그것을 해결하려 시간을 쓰기에는 다른 기능들이 많이 남아있었기에 조건별 초기화 버튼만 만들고 모든 조건을 초기화하는 버튼을 구현하지 못하였습니다. 이 부분은 프로젝트가 끝난 후 혼자서라도 개선해 보려고 합니다. 또 하나 아쉬운 점은 관심 학원 페이지에서 관심 학원 목록을 가져올 때 본인의 관심 학원을 가져와야 했는데, user_id를 조건으로 주면 해당 학원의 관심 학원 수를 얻을 수 없어, like_tb 테이블을 서브쿼리로 조인하여 사용했습니다. 이 방법으로는 값은 잘 나왔지만, 여러 방법을 시도해 보지 못하고 이 방법만 사용한 것이 아쉬웠습니다. 이 부분도 프로젝트가 끝난 후 다른 방법을 찾아보고 개선해 볼 계획입니다.

<br/>

> **팀원: 이지우** 
-  프로젝트가 시작하기에 앞서서 많으면 많고 적다면 적은 프로그래밍을 배웠다고 생각했습니다. 저의 지식으로 프로젝트를 할 수 있을까? 팀원들에게 피해를 주지는 않을까 걱정하면서 시작하였습니다. 처음에는 뭐가 무엇인지 잘 모르는 상태로 시작해서 당황도 하고 하였지만 팀장님과 팀원분들의 도움으로 점점 어떻게 해야 하는지 감이 잡혀 왔습니다. 그러면서 배웠던 것은 더욱 자세히 알게 되었고 모르는 것을 하면서 새로운 것들을 터득하게 되었습니다. 그 결과로 만들어진 프로젝트는 팀 전체의 노력 결정체로 다가왔습니다. 하지만 이러한 성취와 만족감과 더불어 피로감도 느꼈습니다. 프로젝트 기간의 집중과 노력으로 인해 몸과 마음이 지쳤기 때문입니다. 향후 다른 프로젝트를 하게 되면 몸과 마음을 잘 단련하고 해야겠다는 생각이 들었습니다. 또 한 프로젝트를 돌아보면서 부족한 부분을 발견했습니다. 완벽한 결과물을 만들 수 없다는 것을 깨닫게 되었고, 그것을 향한 개선의 기회로 여겼습니다. 미흡한 점을 보완하고 발전하는 과정이 지속적인 학습과 성장을 가져다줄 것이라 생각했습니다!! 팀장님 팀원분들 최고!!


<br/>

