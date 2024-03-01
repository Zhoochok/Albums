const router = require("express").Router();

const AlbumItem = require("../../components/AlbumItem");
const { Album, Photo } = require("../../db/models");

// const AlbumItem = require('../../components/AlbumPage');

router.post("/", async (req, res) => {
  try {
    const { img, name, privats } = req.body;
    // console.log( res.locals.user.id);
    const data = {
      userId: res.locals.user.id,
      img,
      name,
      private: privats,
    };
    const el = await Album.create(data);
    // console.log(el);
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
    const result = await Album.destroy({ where: {id: albumId } });
    if (result > 0) {
      res.status(200).json({ message: "success" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
