const React = require('react');
const Layout = require('./Layout');
const FormAddAlbum = require('./FormAddAlbum');
const AlbumItem = require('./AlbumItem');

module.exports = function Album({ title, album, user, url }) {
  // console.log(album);
  return (
    <Layout title={title} url={url} user={user} album={album}>
      <div className="center-container">
      {user && <FormAddAlbum />}
      <div className="albumPage">
        {album.map((el) => (
          <AlbumItem el={el} />
        ))}
      </div>
      </div>
    </Layout>
  );
};
