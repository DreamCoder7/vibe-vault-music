import { CreateSongDto } from "./dto/create-song.dto";
import SongModel from "./model";

class Song {
  static async createSong(req: CreateSongDto) {
    try {
      const newSong = await SongModel.create(req);
      return newSong;
    } catch (error) {
      throw error;
    }
  }

  static async getAllSongs() {
    try {
      const songs = await SongModel.find();
      return songs;
    } catch (error) {
      throw error;
    }
  }

  static async updateSongById(id: string, song: CreateSongDto) {
    try {
      const updatedSong = await SongModel.findByIdAndUpdate(id, song, {
        new: true,
      });
      return updatedSong;
    } catch (error) {
      throw error;
    }
  }

  static async deleteSongById(id: string) {
    try {
      const deletedSong = await SongModel.findByIdAndDelete(id);
      return deletedSong;
    } catch (error) {
      throw error;
    }
  }
}

export default Song;
