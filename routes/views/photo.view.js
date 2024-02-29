const router = require('express').Router();
const { Photo } = require('../../db/models');
const PhotoPage = require('../../components/PhotoPage');
// const FormUpdateBook = require('../../components/FormUpdateBook');

router.get('/', async (req, res) => {
  try {
    const user = res.app.locals.user;
    const photos = await Photo.findAll();
    const document = res.renderComponent(PhotoPage, { photos, user });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});


module.exports = router;