import express from "express";
import {
  createSong,
  deleteSongById,
  getAllSongs,
  updateSongById,
} from "./controller";

const router = express.Router();

router.route("/").post(createSong).get(getAllSongs);

router.route("/:id").patch(updateSongById).delete(deleteSongById);

export default router;
