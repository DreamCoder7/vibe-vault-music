"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = exports.deleteSongById = exports.getAllSongs = exports.updateSongById = exports.createSong = void 0;
const dal_1 = __importDefault(require("./dal"));
const createSong = async (req, res, next) => {
    const data = req.body;
    const newSong = await dal_1.default.createSong(data);
    // Ensure data has required fields
    if (!data.title || !data.artist || !data.album || !data.genre) {
        res.status(400).json({
            status: "FAIL",
            message: "All fields are required: title, artist, album, genre.",
        });
        return;
    }
    res.status(201).json({
        status: "SUCCESS",
        message: "You have created your song successfully.",
        data: newSong,
    });
};
exports.createSong = createSong;
const getAllSongs = async (req, res, next) => {
    try {
        const songs = await dal_1.default.getAllSongs();
        res.status(200).json({
            status: "SUCCESS",
            message: "All songs retrieved successfully.",
            data: songs,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllSongs = getAllSongs;
const updateSongById = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedSong = await dal_1.default.updateSongById(id, data);
        if (!updatedSong) {
            return res.status(404).json({
                status: "FAIL",
                message: "Song not found.",
            });
        }
        res.status(200).json({
            status: "SUCCESS",
            message: "Song updated successfully.",
            data: updatedSong,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateSongById = updateSongById;
const deleteSongById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deletedSong = await dal_1.default.deleteSongById(id);
        if (!deletedSong) {
            return res.status(404).json({
                status: "FAIL",
                message: "Song not found.",
            });
        }
        res.status(200).json({
            status: "SUCCESS",
            message: "Song deleted successfully.",
            data: deletedSong,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteSongById = deleteSongById;
const getStats = async (req, res, next) => {
    try {
        const stats = await dal_1.default.getStatistics();
        res.status(200).json({
            status: "SUCCESS",
            message: "Statistics retrieved successfully.",
            data: stats,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getStats = getStats;
