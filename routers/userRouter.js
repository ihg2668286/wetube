import express from "express";
import routes from "../routes";

import{
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController";

const userRouter = express.Router();

/* userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.editProfile, (req, res) => res.send("Edit Profile"));
userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
userRouter.get(routes.changePassword, (req, res) => res.send("Change Password"));
 */

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.changePassword, changePassword);
 
export default userRouter;
