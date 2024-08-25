"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const songSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Date, required: true },
    duration: { type: String, required: true },
    lyrics: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
exports.default = mongoose_1.default.model("Song", songSchema);
