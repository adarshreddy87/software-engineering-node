import UserDao from "../daos/UserDao";
import mongoose from "mongoose";
import User from "../models/User";

const userDao: UserDao = UserDao.getInstance();

mongoose.connect(`mongodb+srv://adarsh:Adarsh=97@software-engg.8s8gk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

export const login = async (u: string, p: string) => {
    try {
        const user = await userDao.findUserByCredentials(u, p);
        if (!user) {
            throw "Unknown user";
        }
        return user;
    } catch (e) {
        return e;
    }
}

export const register = async (u: string, p: string, e: string) => {
    try {
        const user = await userDao.findUserByUsername(u);
        if (user) {
            throw 'User already exists';
        }
        const newUsr = new User()
        newUsr.username = u;
        newUsr.password = p;
        newUsr.email = e;
        const newUser = await userDao.createUser(newUsr);
        return newUser;
    } catch (e) {
        return e;
    }
}