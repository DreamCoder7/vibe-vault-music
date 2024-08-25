"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.route("/").post(controller_1.createSong).get(controller_1.getAllSongs);
router.route("/:id").patch(controller_1.updateSongById).delete(controller_1.deleteSongById);
router.route("/stats").get(controller_1.getStats);
exports.default = router;
