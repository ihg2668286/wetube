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
        진도 따라잡아서 다 수정함...ㅡㅡ Git보고 복붙해왔
    
    home.pug에서
        each item in videos
            h1= item.title
            p= item.description
        위의 방식은 videos 배열에서 하나씩 item을 처리하는방식
        template의 videos는 videoController에서 전달한 video와 이름이 같아야 한다.
    
    mixin - pug의 함수의 일종
        mixin에는 인자가 하나 필요하다.
        videoBlock
            mixin에 인자가 입력되면, 그 객체의 이름을 video라고 함.
            객체가 mixin에 입력되면, 그 객체의 title을 받아와서 화면에 표시
            home.pug??db.js??(왠지db)의 정보들이 videoBlock으로 전달되어서 함수를 실행. 그리고 그 함수를 html로 내보낸다.

            동영상 재생을 위하여
                자동재생을 위한 autoplay=true 삽입
                동영상 재생 및 일시정지 등 컨트롤을 위하여 controls=true 삽입
                몽땅 자동재생.... 수정요망..;;
                    일단 오토플레이를 false로 해둠...

        각각 다른 정보를 가지지만 같은 구조를 가지는 데이터를 표시하기 위한 코드를 캡슐화함. 이게 mixin을 사용하는 이유.
            다른정보, 같은구조
        
        home에 mixin구현
        search에 mixin구현
        회원가입 - 비번,비번체크 동일하면 home로 이동 아니면 이동x(400호출)
    
    controller들을 수정
    required=true 을 join,login,upload에 삽입해서 필수값들을 넣지 않으면 동작하지 않게끔 수정

    mongodb, mongoose설치
    mongodb - database
        특징 - NoSQL Database이고 규칙이 적고 엄청 유연해서 많은 부분을 수정가능
        만약 채팅을 만든다면 mongodb는 적합한 database가 될것이다. 왜냐하면 생성이 매우 빠르고 엄격하지 않기때문
    mongoose - 데이터베이스와 연결하게 해주는것
}

3.27{
    dotenv
        설치한 이유
            가끔 어떤 부분을 숨겨놓고 싶을 수 있기 때문
            
            지금은 localhost에 설치된 MongoDB이지만 다른 곳에 설치 된다면 어떻게 될까?? 코드에 있는 URL로부터 유저 데이터를 보는걸 원하지 않는다. 이때 dotenv를 사용하는 것이다.

            open_source 프로젝트를 하고있다고 가정을 한다면, 내 Database를 숨겨놓고 싶다. 이 파일을 Github에 올려놓으면 어디에 DB가 있는지 알게 된다. 지금은 localhost라 괜찮지만 실제 Application으로 만들었을 때 문제가 생긴다.
        
    .env
        PORT=4000 과 PORT=4000; 는 전혀 다른것... 만약 세미콜론을 입력한다면 전혀 다른 변수가 되버린다.

    MongoDB의 장점
        document를 줄여준다는 것
            document -> JSON파일
    하지만 MongoDB에 나의 파일들이 어떤 식으로 생겨야 할지 알려줘야 한다. 아무거나 생성할 수 없다.

    DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
    라는 문구가 떴다. 이를 확인하니 useUnifiedTopology: true 이 문장이 있어서 db.js에 저 문구를 추가 하였더니 해결됬다.

    Comment를 만드는 두가지 방법
        ✅1. 모든 CommentID들을 배열로 Video에 집어 넣을것인가??
            모든 Comment의 정보를 넣는게 아니다. Comment의 ID만 넣는 것이지
                [1,2,4,7,...]이런 식으로 Video와 연결된 Comment들의 ID가 저장된다.
        2. Comment에 연결된 Video ID를 줄 것인가??
    
    videoController.js수정
        async
            'JS야 이 function의 어떤 부분은 꼭 기다려야해' 라고 이야기 하는 것과 같다.

            await
                해당 과정이 끝날 때까지 잠시 기다려 달라는 의미
                const videos = await Video.find({});
                    이렇게 하면 Database에 있는 모든 Video를 가져올 것이다.
                await는 async에서만 사용가능
                await부분이 끝나기 전까지는 render부분을 실행하지 않을것이다.
                    해당 과정이 성공적으로 끝나야 하는것이 아니다. 그냥 끝날 때까지 기다리는것이다.
        
        try
            내가 해야 할 것들 그리고 만약 실패한다면 해당 error를 잡아낼 것이다. 그래야 내가 무슨 error인지 볼 수 있다.

    비디오 파일 삽입위한 과정
        upload.pug수정
            Video파일이 아닌 부분은 받지 않도록 하기 위해서 accept="video" 를 삽입해서
                input(type="file", id="file", name="file", required=true, accept="video/*")이렇게 수정
        
            multar
                file을 Upload하고 URL을 반환하는 middleware
                나는 file을 보내는 것이다. 그래서 form의 encoding이 달라야 한다.
                그래서 enctype="multipart/form-data" 이것을 삽입해서
                    form(action=`/videos${routes.upload}`, method="post", enctype="multipart/form-data") 이렇게 수정
                
                multar의사용법은
                    https://github.com/expressjs/multer/blob/master/README.md 참조
                
        middlewares.js수정
            single은 오직 하나의 파일만 Upload할 수 있다.

        videoRouter.js수정
            uploadVideo를 삽입해서
                videoRouter.post(routes.upload, uploadVideo, postUpload); 이렇게 수정
                
            우리가 file을 Upload하면 server(middlewares.js????)에 있는 folder(video/)에 Upload

            postUpload라는 function은 해당 file에 접근할 것이다.
    
        video를 업로드해도 재생되지 않는다. 파일이 깨져서 그런듯.
        videos폴더를 삭제 - multar얘가 동영상 업로드시 자동으로 만든 폴더이다. 그래서 경로 자체를 바꾸기 위해 삭제

        middleware.js에서 uploads/ 를 삽입하여서
        const multerVideo = multer({ dest: "uploads/videos/" }); 에렇게 수정
        /uploads/ 이렇게 하면 안된다. 이렇게 하면 내 컴퓨터의 root에 upload를 따로 만들것이다. uploads/ 이렇게 적음으로써 uploads의 폴더내에서 이루어지게 만들었다.

        video를 Github에 올리는걸 원하지 않으니 .gitignore에 uploads 를 삽입하라.
    
    Video Detail을 보기 위하여
        routes.js에서
            const EDIT_VIDEO = "/:id/edit"; 이 문장에서
                edit라는 parameter로는 어떤 것도 받지 않을 것이다.
                하지만 id로는 어떤 변수를 받겠지.
                만약 controller에서 어떤 data를 가지고 있다는 것을 표현하고 싶다면 :과 이름을 넣으면 된다.
                    <!-- TODO: const VIDEO_DETAIL = "/:id"; 여기 문장에다가..??? 맞나???확인요망 -->
        
        params를 가지고 있고 이제 params로부터 id를 가져오자.

        videoController.js에서
            video의 아이디를 찾아서 Video Detail을 보여주고, 아이디가 잘못된 경우 에러를 출력하고 다시 홈으로 돌아가게끔 설정
                export const videoDetail = async(req, res) =>{...}이 부분을 말하는 것이다.
            비디오 변수를 템플릿에 전달
                res.render("videoDetail", { pageTitle: "Video Detail", video }); 이 문장에서 video는
                video:video 와 같은 의미이다.
        
        videoDetail.pug에서
            다 새롭게 만든것들임
            <!-- TODO:Edit Video버튼 만들자 -->
}
3.30{
    Editing a Video
        routes.js수정
          editVideo: EDIT_VIDEO,에서
             editVideo: (id)=>{
                if(id){
                return `/videos/${id}/edit`;
                }else{
                return EDIT_VIDEO;
                }
             }, 이렇게 수정
    
        videoDetail.pug수정
            a(href=routes.editVideo) Edit video 에서
                a(href=routes.editVideo(video.id)) Edit video 이렇게 수정

            videoRouter.get(routes.editVideo, editVideo); 에서
                videoRouter.get(routes.editVideo(), getEditVideo); 이렇게 수정
            
            유저가 비디오를 수정할 때 비디오를 업로드하는건 원하지 않는다.
            유저가 비디오를 수정할 때 비디오 파일을 바꾸는건 원하지 않는다.
            
            videoRouter.post(routes.editVideo(), postEditVideo);삽입
        
        videoController.js수정
            export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" }); 에서

            export const getEditVideo = async (req, res) => {
                const {
                    params: { id }
                } = req;
                try {
                    const video = await Video.findById(id);
                    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
                } catch (error) {
                    res.redirect(routes.home);
                }
            }; 이렇게 수정
            
        editVideo.pug 수정
            form(action=`/videos${routes.editVideo}`, method="post")에서
                form(action=routes.editVideo(video.id), method="post")이렇게 수정

            input(type="text", placeholder="Title", name="title")에서
                input(type="text", placeholder="Title", name="title", value=video.title) 이렇게 수정
            textarea(name="description", placeholder="Description") 에서
                textarea(name="description", placeholder="Description")=value=video.description 이렇게 수정
            
        위와 같은 작업들을 통해서 Edit video버튼을 눌렀을 때 비디오수정에서 제목과 설명이 현재값을 가지게 되었다. 즉 getEditVideo였다.

        videoController.js수정
            export const postEditVideo = (req, res) => {}; 에서

                export const postEditVideo = async (req, res) => {
                    const {
                        params: { id },
                        // 비디오 수정에서 제목과 설명을 가져와야 하니 body추가
                        body: { title, description }
                    } = req;
                    try {
                        //밑에서 그냥 await 를 바로 쓴 이유는 새로운 변수로 저장하고 싶지 않다. 업데이트한 결과물은 별로 관심이 없다. 그냥 업데이트 하면 끝. 거기서 정보를 가져오거나 하지 않는다. 그래서 저장하지 않는것.
                        await Video.findOneAndUpdate({ _id:id }, { title, description });
                        // 업데이트 하고나서 다시 해당 비디오 페이지로 갔으면 한다. 그래서 바뀐걸 확인
                        res.redirect(routes.videoDetail(id));
                    } catch (error) {
                        res.redirect(routes.home);
                    }
                };이렇게 수정
        
        위와 같은 작업을 통해서 EditVideo를 할때 변경한 값들을 저장할 수 있게 되었다. 즉 postEditVideo였다.

        
}