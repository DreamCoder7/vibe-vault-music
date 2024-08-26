import mongoose from "mongoose";
const Schema = mongoose.Schema;

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

export default mongoose.model("Song", songSchema);
