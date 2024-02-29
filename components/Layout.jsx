const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children, user, url }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        {/* ЗДЕСЬ ПОДКЛЮЧАЕМ СКРИПТЫ */}
        <script defer src="/scripts/auth.js" />
      </head>
      <body>
        <Navbar user={user} url={url} />
        {/* наши страницы */}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
