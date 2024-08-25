"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
class Song {
    static async createSong(req) {
        try {
            const newSong = await model_1.default.create(req);
            return newSong;
        }
        catch (error) {
            throw error;
        }
    }
    static async getAllSongs() {
        try {
            const songs = await model_1.default.find();
            return songs;
        }
        catch (error) {
            throw error;
        }
    }
    static async updateSongById(id, song) {
        try {
            const updatedSong = await model_1.default.findByIdAndUpdate(id, song, {
                new: true,
            });
            return updatedSong;
        }
        catch (error) {
            throw error;
        }
    }
    static async deleteSongById(id) {
        try {
            const deletedSong = await model_1.default.findByIdAndDelete(id);
            return deletedSong;
        }
        catch (error) {
            throw error;
        }
    }
    static async getStatistics() {
        try {
            const totalSongs = await model_1.default.countDocuments();
            const totalArtists = await model_1.default.distinct("artists").countDocuments();
            const totalAlbums = await model_1.default.distinct("album").countDocuments();
            const totalGenres = await model_1.default.distinct("genre").countDocuments();
            return { totalSongs, totalArtists, totalAlbums, totalGenres };
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = Song;
