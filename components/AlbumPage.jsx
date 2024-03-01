const React = require("react");
const Layout = require("./Layout");
const FormAddAlbum = require("./FormAddAlbum");
const AlbumItem = require("./AlbumItem");

module.exports = function Album({ title, album, user, url }) {

  return (
    <Layout title={title} url={url} user={user} album={album}>
      <div className="center-container">
        {user && <FormAddAlbum />}
        <div className="MyAlbum">
          <div className="albumPage">
            <p>Мой альбом</p>
            {album.map((el) => el.userId === user.id && <AlbumItem key={el.id} el={el} user={user} />)}
            <div>
            <p>Чужие</p>
            {album.map((el) => el.userId !== user.id && <AlbumItem key={el.id} el={el} user={user} />)}
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};