import { IUserProfile } from "@src/types";
import { foods } from "./restaurants";
import Images from "@constants/Images";

const user: IUserProfile = {
  name: "Promise Sheggsmann",
  email: "promisesheggs@gmail.com",
  profilePicture: Images.promise,
  vouchersCount: 3,
  favorites: foods.slice(1),
};

export default user;
