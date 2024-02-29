const router = require('express').Router();
const { Album, Photo } = require('../../db/models');
const AlbumPage = require('../../components/AlbumPage');
const PhotoPage = require('../../components/PhotoPage');

router.get('/', async (req, res) => {
  try {
    const { baseUrl } = req;

    const album = await Album.findAll();
    const html = res.renderComponent(AlbumPage, {
      album,
      title: 'Albums',
      url: baseUrl,
    });
    // console.log(album);
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

router.get('/:id/photo', async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findOne({ where: { id } });
    const photos = await Photo.findAll({ where: { albumId: id } });
    // console.log(photos);
    const html = res.renderComponent(PhotoPage, {
      album,
      photos,
      title: 'HUI',
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
