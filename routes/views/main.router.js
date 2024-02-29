const router = require('express').Router();

const MainPage = require('../../components/MainPage');

router.get('/', (req, res) => {
  const user = res.app.locals.user;
  res.send(res.renderComponent(MainPage, { user }));
});

module.exports = router;