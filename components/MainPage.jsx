const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user, album }) {
  return (
    <Layout title={title} user={user} album={album}>
      <div className="center-container">
        <h1 className="animate__animated animate__swing">
          WELCOME {user && user.name}!
        </h1>
        {/* <h5 className="animate__animated animate__bounce">Нельзя пользоваться сервисом не зарегистрированным пользователям</h5> */}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
