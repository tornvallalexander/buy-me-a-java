import User from "../model/User";

const getUser = (req: any, res: any) => {
  const { userID, userType } = req.body;

  const users = User.find({ _id: userID }, "", (err: any, usersList: any) => {
    if (usersList) {
      if (usersList[0].userType === userType) {
        res.json({ user: usersList[0] });
      } else {
        res.json({ err: "user not found", msg: err });
      }
    } else {
      res.json({ err: "user not found", msg: err });
    }
  });
};

export default getUser;
