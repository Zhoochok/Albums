const React = require('react');
const Layout = require('./Layout');
const FormAddPhoto = require('./FormAddPhoto');
const PhotoItem = require('./PhotoItem');

function PhotoPage({ title, albums, photos , user, url }) {
  return (
    <Layout title={title} user={user} url={url}>
      <h1>This is the photo page!</h1>
      <h3>Add your photo</h3>
      {user && <FormAddPhoto />}
      <div className="photoItem">
        {photos.map((photo) => (
          <PhotoItem photo={photo} user={user} />
        ))}
      </div>

    </Layout>
  );
}

module.exports = PhotoPage;