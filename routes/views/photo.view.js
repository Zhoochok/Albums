const router = require('express').Router();
const { Photo } = require('../../db/models');
const PhotoPage = require('../../components/PhotoPage');

router.get('/', async (req, res) => {
  try {
    const { baseUrl } = req;

    const photos = await Photo.findAll();
    const document = res.renderComponent(PhotoPage, { url: baseUrl });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
