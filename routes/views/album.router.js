const { Album } = require('../../db/models');
const AlbumPage = require('../../components/AlbumPage');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const { baseUrl } = req;
  
    const album = await Album.findAll();
    const html = res.renderComponent(AlbumPage, {
      album,
      title: 'Albums',
      url: baseUrl,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});
module.exports = router;
