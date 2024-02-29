const router = require('express').Router();

const { Photo } = require('../../db/models');

const PhotoItem = require('../../components/PhotoItem');


router.post('/', async (req, res) => {
    try {
      const {
        img, description,
      } = req.body;
      const data = {
        userId: 1,
        img,
        description,
      };
      const photo = await Photo.create(data);
      if (photo) {
        const html = res.renderComponent(PhotoItem, { photo}, { doctype: false });
        res.status(201).json({ message: 'success', html });
      }
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Photo.destroy({ where: { id } });
      if (result > 0) {
        res.status(200).json({ message: 'success' });
      }
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  });

  module.exports = router;