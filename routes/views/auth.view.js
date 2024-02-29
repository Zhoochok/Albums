const RegistrationPage = require('../../components/RegPage');
const AuthorizationPage = require('../../components/LogPage');
const router = require('express').Router();

router.get('/registration', async (req, res) => {
  try {
    const html = res.renderComponent(RegistrationPage, { title: 'REGA' });
    res.send(html);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

//страница авторизации
router.get('/authorization', async (req, res) => {
  try {
    const html = res.renderComponent(AuthorizationPage, { title: 'LOGA' });
    res.send(html);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
