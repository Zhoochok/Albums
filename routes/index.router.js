const router = require('express').Router();

//Views
const mainRouter = require('./views/main.router');
const photoView = require('./views/photo.view');
const authView = require('./views/auth.view');
const albumsRouter = require("./views/album.router")

// //Api
// const productApi = require('./api/product.api');
const authApi = require('./api/auth.api');
const photoApiRouter = require('./api/photos.api')

//router Views
router.use('/', mainRouter);
router.use("/albums", albumsRouter);
router.use('/auth', authView);
router.use('/api/auth', authApi);
router.use('/api/photos', photoApiRouter)
router.use('/photo', photoView)

module.exports = router;
