git studuy

git add .
git commit -m "수정한내용"
git push origin master

package.json파일의 scripts 안에 start를 넣음으로써 node index.js 를 치지않고 npm start 만으로도 localhost:4000에 접속하도록 만들었다.

POST request가 정보를 서버로 전달

<!-- 수동으로 재시작하는 부분을 자동으로 되게끔 수정한 내역을 밑에 적어놓았다. -->
npm install nodemone --D 를 함으로써 수동으로 재시작을 하던것을 자동으로 바꾸었다. --D를 넣은 이유는 dependency에 포함하려는게 아니라
프로젝트를 실행하는데 필요한게 아니라 프로그래머에게 필요한것이니 이를 반영하기 위해 넣었다.
그래서 package.json에 devDependencies가 추가되었다.
이것은 프로젝트가 아닌 프로그래머에게 필요한 것이다.
그리고 start에 nodemon을 추가하여서  "start": "nodemon --exec babel-node index.js" 으로 수정하였다.
이 작업을 통해서 수정후 저장만 하면 따로 재시작을 수동으로 하지 않아도 자동으로 재시작 되는것을 확인할 수 있었다.

3.25{
    morgan은 middleware중 하나인데 logging에 도움을 주는 것.
        logging란 무슨일이 어디서 일어났는지를 기록하는 것이다.
    helmet은 node.js 앱의 보안에 도움이 되는 것.
    body parser, cookie parser 둘다 express의 middleware인데 cookie와 body를 다루는 걸 도와준다.
        body-parser -> body로부터 정보를 얻을 수 있게 해주는 것
            body-parser에는 정의해야할 옵션이 있다. 그 중 json,text,urlencoded등 모든 것들에 대해 이해 해야한다. 왜냐면 서버가 우리가 무엇을 전송하는지 알 수 있어야 하기 때문이다. 예를들어 json을 전송하길 원한다면 서버가 json을 이해하길 바라야 한다. 일반적인 html form을 전송한다면 서버가 urlencoded라는 것을 이해하길 바라야 한다.
        cookie-parser -> cookie에 유저 정보를 저장할 것이다. session을 다루기 위해서 말이다.
        그래서 둘다 필요하다.
    
    index.js -> app.js 로 이름변경
    app.js를 init.js와 연결
    nodemone을 init.js로 연결

    router는 많은 route들이 담긴 파일

    export와 import의 사용법? 학습

    MVC
        Model - data(데이터)
        View - how does the look (데이터가 어떻게 생겼는지)
        Controller - function that looks for the data (데이터를 보여주는?찾는? 함수)
    
    router->userRouter으로 수정
    변수에 export하면 그 변수만 export한다는 것
    export default는 파일로 export를 한다는 것

    globalRouter.js를 사용하여서 data의 모습에 맞춰서 URL과 함수를 분리하였다.
    (home,login,logout,search,join)

    controller생성 - 대개 프로젝트에 있는 각 모델마다 컨트롤러를 만들게 된다.
        // TODO 댓글창을 비디오컨트롤러에 넣을 예정이다.
        globalRouter.js의 내용을 수정해서 임포트 넣었다.

    cookieParser
        cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어. 사용자 인증 같은곳에서 쿠키를 검사할 때 사용해야 한다.
    bodyParser
        사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어. requsest 정보에서 form이나 json 형태로 된 body를 검사한다.
        아바타의 사진이나 비디오를 업로드 할 때, 제목이나 댓글 같은 정보를 전달할 때 form에 담아서 업로드 해야한다.
    helmet
        application이 더 안전하도록 만들어준다.
    morgan
        application에서 발생하는 모든 일들을 logging 하는 것이다.

    pug를 이용해서 layout생성
        header를 수정하기 위해서 모든 탬플릿을 수정할 수는 없기에 layout생성
        pug에서 html만들때에는 <>를 넣어서 태그를 만들지 않는다. only 들여쓰기로 만들어 낸다.
        ex)<p>blablabla</p> 같은 경우에는
            p
                blablabla
        이런식으로 단순히 들여쓰기로만 표현한다. 또한 /를 이용해서 닫지 않는다.
    
    partials
        페이지의 일부분

    한곳에서만 정보를 보관하는 방식이 더 나은 코드를 만드는 원칙이다.
    여러곳에서 같은 정보를 보관한다면 일일이 다 수정해야하지만 한곳에서만 정보를 보관하면 그 부분만 수정하면 되기에 버그를 최소화할 수 있다.

    pug 에서 block을 적지 않으면, 어떠한 템플릿도 작동하지 않는다.
    레이아웃에 block을 추가해야, 페이지의 내용들이 채워진다.
    block을 창문에 비유하면 이해하기 쉽다. 창문을 추가하고 창문안의 내용물이 보이는 것이다.
}

3.26{
    locals 라는 미들웨어 생성
        local변수를 global변수로 사용하도록 만들어주는 것이라고 생각하자.
        local기능을 통해 변수에 접근가능
    
    middlewares.js를 생성
        여기에 locals를 추가
        locals가 추가되면 그것들을 템플릿, 컨트롤러 등 어디서든 사용가능
        만약 app.js에 미들웨어를 넣는다면, 그 위에 있는 globalRouter와 userRouter에서는 locals에 접근을 못한다. 그래서 어디에 위치시켜야 할지 잘 알아야 한다.

        미들웨어는 코드 사이에 들어가 있어서 next를 호출해야한다. 다음 함수로 넘어간다는 뜻이다. 이 경우에는 다음에 있는 router들로 넘어가게 된다.

    localhost:4000 에서 join,login,header의아이콘으로 home 링크생성

    템플릿을 직접 수정하지 않고, middlewares.js에서 수정하면 된다.
    전역적으로(글로벌) 사용할 수 있는 변수를 추가하였다. 이로써 모든 템플릿에서 사용가능 하게 됬다. 템플릿, 뷰, 모든 곳에서 사용가능하다.

    한 템플릿에만 변수를 추가하는 방법
        템플릿마다 다른 정보를 가질 수도 있으니 필요하다.
        videoController.js, userController.js에서 한 화면에만 변수를 추가(Title을 추가?수정?하였다.)
            render함수의 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체
    
    search제작
        videoController.js에서 암시적 리턴대신 리턴값을 넣어야 한다.

    socailLogin.pug
        |Continue with Github 이것에서 |을 적지 않으면 에러가 생겨난다.
        이는 Continu를 하나의 태그로 생각해 버리게 되기 때문이다. 그래서 | 을 삽인한 것이다.
        | 는 이 안에 들어간 것들을 텍스트로 바꿔준다.
    
    userRouter.js 와 videoRouter.js 이 두파일이 수정이 되있네???? 왜???? 언제????
}