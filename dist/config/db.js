"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Db config goes here..
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = process.env.DB_REMOTE || "";
const connectDB = async () => {
    console.log(MONGO_URI);
    try {
        await mongoose_1.default.connect(MONGO_URI, {});
        console.log("MongoDB Connected...");
    }
    catch (error) {
        process.exit(1);
    }
};
exports.default = connectDB;
