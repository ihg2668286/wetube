/* export const join = (req,res) => res.send("Join");
export const login = (req,res) => res.send("Login");
export const logout = (req,res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => res.send("Edit Profile");
export const changePassword = (req, res) => res.send("Change Password"); */
export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("user Detail");
export const editProfile = (req, res) => res.render("edit Profile");
export const changePassword = (req, res) => res.render("change Password");