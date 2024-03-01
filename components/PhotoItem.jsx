const React = require('react');

function PhotoItem({ photo, album, user }) {
  return (
    <div className="card" data-id={photo.id}>
      <img src={photo.img} alt="photo" width={400} height={300} />
      <h3>{photo.description}</h3>
      {user && photo.id === user.id && (
      <a href={`/photo/${photo.id}/update`}>Изменить</a>
      )}
      {user && photo.id === user.id && (
        <button className="btn-delete">Delete photo</button>
      )}
    </div>
  );
}

module.exports = PhotoItem;
