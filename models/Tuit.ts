/**
 * @file Declares Tuit data type representing a tuit posted by the user. A tuit can be liked and bookmarked
 * by various users.
 */
import User from "./User";

/**
 * @typedef Tuit Represents a Tuit posted by a user
 *
 * @property {string} tuit the content of the tuit being posted
 * @property {Date} postedOn the date when the tuit was posted
 * @property {string} postedBy User(username) posting the tuit
 */
export default interface Tuit {
    tuit: string,
    postedOn: Date,
    postedBy: User,
    stats: TuitStats
}

export interface TuitStats {
    replies: number;
    retuits: number;
    likes: number;
    dislikes: number;
}
