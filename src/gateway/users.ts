import { User } from "../entities/user";
import { AppDataSource } from "./postgres";

export const findUserByEmail = async (email: string): Promise<User> => {
  const user = await AppDataSource.manager.findOne(User, { where: { email } });
  return user;
};

export const saveUser = async (user: User): Promise<User> => {
  const savedUser = await AppDataSource.manager.save(user, { transaction: true });
  return savedUser;
};
