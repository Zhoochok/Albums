const React = require('react');

module.exports = function AlbumItem({ title, album, user, url, el }) {
  return (
    <div className="albumPage" data-albumId={el.id}>
      <a href={`/albums/${el.id}/photo`}>
        <p >
          <img className="picture" src={el.img} width={500} height={300} />
        </p>
        <div className="textStr">
        {el.name}
        </div>
      </a>
      {user && el.userId === user.id && (
        <button className="btn-deleteAlbum">Удалить</button>
      )}
    </div>
  );
};
