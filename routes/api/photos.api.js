const router = require("express").Router();

const { Photo } = require("../../db/models");

const PhotoItem = require("../../components/PhotoItem");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/add/:id", upload.single('img'), async (req, res) => {
  try {
    const { id } = req.params;
    const { img, description, albumId } = req.body;
    const newFileUrl = `/img/${req.file.originalname}`;

    const data = {
      albumId: id,
      userId: 1,
      img: newFileUrl,
      description,
    };
    const photo = await Photo.create(data);
    if (photo) {
      const html = res.renderComponent(
        PhotoItem,
        { photo },
        { doctype: false }
      );
      res.status(201).json({ message: "success", html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Photo.destroy({ where: { id } });
    if (result > 0) {
      res.status(200).json({ message: "success" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
