import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });
app.get("/", (req, res) => {
  res.json({
    message: "Backend Connected Successfully"
  });
});

app.post("/upload", upload.single("audio"), (req, res) => {
  res.json({
    text: "Audio uploaded successfully!"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});