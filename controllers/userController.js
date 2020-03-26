/* export const join = (req,res) => res.send("Join");
export const login = (req,res) => res.send("Login");
export const logout = (req,res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => res.send("Edit Profile");
export const changePassword = (req, res) => res.send("Change Password"); */

import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req,res)=>{
    console.log(req.body);      //회원가입한 정보들을 log로 출력
    
    const{
        body:{name,email,password,password2}
    }=req;

    if(password !== password2 ){
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    }else{
        // TODO: Register User(사용자 등록)
        // TODO: log user in(사용자 로그인이라는 주석도 달아주자. 다시 시도해보자.)
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    //TODO: Process log out(로그아웃 처리)
        res.redirect(routes.home);
}

// export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });