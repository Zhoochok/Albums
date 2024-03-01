const router = require("express").Router();

const AlbumItem = require("../../components/AlbumItem");
const { Album, Photo } = require("../../db/models");

router.post('/', async (req, res) => {

  try {
    const { img, name, privats } = req.body;
    const data = {
      userId: 1,
      img,
      name,
      private: privats,
    };
    const el = await Album.create(data);
    if (el) {
      const html = res.renderComponent(AlbumItem, { el }, { doctype: false });
      res.status(201).json({ message: "success", html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    console.log(albumId);
    const result = await Photo.destroy({ where: {id: albumId } });
    if (result > 0) {
      res.status(200).json({ message: "success" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
