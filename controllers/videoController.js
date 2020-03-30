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
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    // await부분이 끝나기 전까지는 render부분을 실행하지 않을것이다.
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
  // error가 생기면 video는 없을 거고 default로 videos는 빈 배열이 된다.
};

export const search = (req, res) => {
  // const searchingBy = req.query.term;
  // 위의 방법은 ES6이전의 방식 더 최근의 방식을 사용해보자. 바로 밑의줄에서 사용
  const {
    query: { term: searchingBy }
  } = req;

  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);

  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

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
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    // 비디오 수정에서 제목과 설명을 가져와야 하니 body추가
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id:id }, { title, description });
    // 업데이트 하고나서 다시 해당 비디오 페이지로 갔으면 한다. 그래서 바뀐걸 확인
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) =>{
  const {
    params: { id }
  } = req;
  try {
    await Video.findOneAndRemove({_id:id});
  } catch (error) {}
  
  res.redirect(routes.home);
};
