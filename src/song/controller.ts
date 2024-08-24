import { Response, Request, NextFunction } from "express";

import { CreateSongDto } from "./dto/create-song.dto";
import Song from "./dal";

const createSong = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const data: CreateSongDto = req.body;

  const newSong = await Song.createSong(data);

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

const getAllSongs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const songs = await Song.getAllSongs();
    res.status(200).json({
      status: "SUCCESS",
      message: "All songs retrieved successfully.",
      data: songs,
    });
  } catch (error) {
    next(error);
  }
};

const updateSongById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const data: CreateSongDto = req.body;

  try {
    const updatedSong = await Song.updateSongById(id, data);

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
  } catch (error) {
    next(error);
  }
};

const deleteSongById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const deletedSong = await Song.deleteSongById(id);

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
  } catch (error) {
    next(error);
  }
};

const getStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stats = await Song.getStatistics();
    res.status(200).json({
      status: "SUCCESS",
      message: "Statistics retrieved successfully.",
      data: stats,
    });
  } catch (error) {
    next(error);
  }
};

export { createSong, updateSongById, getAllSongs, deleteSongById, getStats };
