import express from "express";
import {
  createSong,
  deleteSongById,
  getAllSongs,
  getStats,
  updateSongById,
} from "./controller";

const router = express.Router();

router.route("/").post(createSong).get(getAllSongs);
router.route("/:id").patch(updateSongById).delete(deleteSongById);
router.route("/stats").get(getStats)
export default router;
