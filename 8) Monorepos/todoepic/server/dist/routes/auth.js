"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const db_1 = require("../db");
const dist_1 = require("@gopalepic/common/dist");
// importing my own crated npm module
const router = express_1.default.Router();
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let parsedInput = dist_1.SignupInput.safeParse(req.body);
    if (!parsedInput.success) {
        return res.status(403).json({ message: 'error' });
    }
    const username = parsedInput.data.username;
    const password = parsedInput.data.password;
    const user = yield db_1.User.findOne({ username });
    if (user) {
        res.status(403).json({ message: 'User already exist' });
    }
    else {
        const newUser = new db_1.User({ username, password });
        yield newUser.save();
        const token = yield jsonwebtoken_1.default.sign({ id: newUser._id }, middlewares_1.SECRET, { expiresIn: '1h' });
        res.json({ message: "Sign up successfully", token });
    }
}));
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield db_1.User.findOne({ username, password });
    if (user) {
        const token = yield jsonwebtoken_1.default.sign({ id: user._id }, middlewares_1.SECRET, { expiresIn: '1h' });
        res.json({ message: 'Logged in successfully', token });
    }
    else {
        res.status(403).json({ message: 'User not found' });
    }
}));
router.get('/me', middlewares_1.authenticateJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.headers["userId"];
    const user = yield db_1.User.findOne({ _id: userId });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    }
    else {
        res.status(201).json({ username: user.username });
    }
}));
exports.default = router;
