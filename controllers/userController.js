/* export const join = (req,res) => res.send("Join");
export const login = (req,res) => res.send("Login");
export const logout = (req,res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => res.send("Edit Profile");
export const changePassword = (req, res) => res.send("Change Password"); */
export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("user Detail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("edit Profile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("change Password", { pageTitle: "Change Password" });