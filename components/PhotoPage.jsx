const React = require('react');
const Layout = require('./Layout');
const FormAddPhoto = require('./FormAddPhoto');
const PhotoItem = require('./PhotoItem');

function PhotoPage({ title, user, url, album, photos }) {
  return (
    <Layout title={title} user={user} url={url} photos={photos}>
      <div className="center-container">
      {user && <FormAddPhoto album = {album}/>}
      <div className="photoItem">
        {photos.map((photo) => (
          <PhotoItem photo={photo} user={user} album={album} />
        ))}
      </div>
      </div>
    </Layout>
  );
}

module.exports = PhotoPage;
