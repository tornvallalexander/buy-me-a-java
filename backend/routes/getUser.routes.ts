import User from "../model/User";

const getUser = async (req: any, res: any) => {
  const { userName, userType } = req.body;

  const users = await User.find({ userName: userName });

  if (users.length) {
    if (users[0].userType === userType) {
      res.json({ user: users[0] });
    } else {
      res.json({ error: "user not found", name: userName });
    }
  } else {
    res.json({ error: "user not found", name: userName });
  }
};

export default getUser;
