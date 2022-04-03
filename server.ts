/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>bookmarks</li>
 *     <li>follows</li>
 *     <li>messages</li>
 * </ul>
 *
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */
import express, {Request, Response} from 'express';
import mongoose from "mongoose";
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import BookmarkController from "./controllers/BookmarkController";
import FollowController from "./controllers/FollowController";
import MessageController from "./controllers/MessageController";
import LikeController from "./controllers/LikeController";

// connect to the database
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://adarsh:Adarsh=97@software-engg.8s8gk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(
    connectionString
    // "mongodb://localhost:27017/Tuiter"
);

// create RESTful Web service API
const app = express();
app.use(express.json());

const session = require("express-session");
let sess = {
    secret: process.env.SECRET,
    cookie: {
        secure: false
    }
}

if (process.env.ENV === 'PRODUCTION') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome!'));

// Create RESTful Web service API
app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const followController = FollowController.getInstance(app);
const messageController = MessageController.getInstance(app);
const likesController = LikeController.getInstance(app);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);