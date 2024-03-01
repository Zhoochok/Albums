const jwt = require('jsonwebtoken');
const generateTokens = require('../utils/authUtils');
// const configJWT = require('../config/jwtConfig');

function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, 'R');
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name },
    });
    res.locals.user = user;
    res.cookie('refresh', refreshToken).cookie('access', accessToken);
    next();
  } catch (error) {
    res.clearCookie('access').clearCookie('refresh');
    next();
  }
}

function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const { user } = jwt.verify(access, 'A');
    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

module.exports = { verifyAccessToken };
