import User from "../model/User";

const getCreatorUsers = (req: any, res: any) => {
  const users = User.find(
    { userType: "creator" },
    "",
    (err: any, usersList: any) => {
      res.json({ users: usersList });
    }
  );
};

export default getCreatorUsers;
