/* export const home = (req, res) => res.send("Home");
export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("Video Detail");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video"); */

// render함수의 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체
// export const home = (req, res) => res.render("home", { pageTitle: "Home" });

// import { videos } from "../db";

import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
    // const searchingBy = req.query.term;
    // 위의 방법은 ES6이전의 방식 더 최근의 방식을 사용해보자. 바로 밑의줄에서 사용
    const {
      query: { term: searchingBy }
    } = req;

  res.render("search", { pageTitle: "Search", searchingBy, videos});
};

// export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) =>{
  const{
    body:{file, title, description }
  } = req;
  
  //TODO:Upload and save video(비디오 업로드 및 저장)
  res.redirect(routes.videoDetail(324393));
};


export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
  
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
