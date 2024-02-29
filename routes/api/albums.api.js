const router = require('express').Router();

const { Album } = require('../../db/models');

const AlbumItem = require('../../components/AlbumPage');

router.post('/', async (req, res) => {
  try {
    const { img, name, privats } = req.body;
    const data = {
      userId: 1,
      img,
      name,
      private: privats,
    };
    const album = await Album.create(data);
    if (album) {
      const html = res.renderComponent(
        AlbumItem,
        { album },
        { doctype: false }
      );
      res.status(201).json({ message: 'success', html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
