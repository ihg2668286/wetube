# WeTube

Cloning Youtube with Vanilla and NodeJS

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
}