import User from "../model/User";

const getUsers = (req: any, res: any) => {
  const users = User.find({}, "", (err: any, usersList: any) => {
    res.json(usersList);
  });
};

export default getUsers;
