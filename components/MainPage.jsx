const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>WELCOME Дрозд</h1>
      <img src="https://i.pinimg.com/originals/05/29/71/0529711d950b3449cb7861c200c62e3c.gif" width={600} height={500}></img>
    </Layout>
  );
}

module.exports = MainPage;