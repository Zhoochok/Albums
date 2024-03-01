const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user, album }) {
  return (
    <Layout title={title} user={user} album={album}>
      <div className="center-container">
        <h1 className="animate__animated animate__swing">
          WELCOME
          {user.name}
        </h1>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
