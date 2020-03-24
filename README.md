# WeTube

Cloning Youtube with Vanilla and NodeJS

git studuy

package.json파일의 scripts 안에 start를 넣음으로써 node index.js 를 치지않고 npm start 만으로도 localhost:4000에 접속하도록 만들었다.

POST request가 정보를 서버로 전달

<!-- 수동으로 새로고침을 자동으로 되게끔 수정한 내역을 밑에 적어놓았다. -->
npm install nodemone --D 를 함으로써 수동으로 새로고침을 하던것을 자동으로 바꾸었다. --D를 넣은 이유는 dependency에 포함하려는게 아니라
프로젝트를 실행하는데 필요한게 아니라 프로그래머에게 필요한것이니 이를 반영하기 위해 넣었다.
그래서 package.json에 devDependencies가 추가되었다.
이것은 프로젝트가 아닌 프로그래머에게 필요한 것이다.
그리고 start에 nodemon을 추가하여서  "start": "nodemon --exec babel-node index.js" 으로 수정하였다.
이 작업을 통해서 수정후 저장만 하면 따로 새로고침 버튼을 수동으로 누르지 않아도 자동으로 재시작 되는것을 확인할 수 있었다.