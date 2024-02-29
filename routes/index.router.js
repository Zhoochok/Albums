const router = require('express').Router();

//Views
const mainRouter = require('./views/main.router');
const photoView = require('./views/photo.view');
const authView = require('./views/auth.view');
const albumsRouter = require("./views/album.router")
const incorrectRouter = require('./views/incorrect.view')


// //Api
// const productApi = require('./api/product.api');
const authApi = require('./api/auth.api');
const photoApiRouter = require('./api/photos.api')
const albumApiRouter = require('./api/albums.api')

//router Views
router.use('/', mainRouter);
router.use("/albums", albumsRouter);
router.use('/api/albums', albumApiRouter)
router.use('/photo', photoView)
router.use('/api/photos', photoApiRouter)
router.use('/auth', authView);
router.use('/api/auth', authApi);


router.use('*', incorrectRouter)
module.exports = router;
